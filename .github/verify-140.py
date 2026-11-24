import concurrent.futures, hashlib, html.parser, json, os, pathlib, sys, time
from urllib.parse import urlparse
from urllib.request import Request, urlopen
from xml.etree import ElementTree as ET
records=json.load(open('src/nearby/places.json')); locales=['en','es','zh']; root=pathlib.Path('out')
base='https://www.pozosazulescolombia.com'; online='--online' in sys.argv
def get(path):
    if online:
        for attempt in range(3):
            try:
                with urlopen(Request(base+path,headers={'User-Agent':'Pozos-Azules-Visitor-Guide-Check/1'}),timeout=25) as res:
                    assert res.status==200 and urlparse(res.url).hostname=='www.pozosazulescolombia.com'
                    return res.read()
            except Exception:
                if attempt==2: raise
                time.sleep(1)
    for p in [root/path.lstrip('/'),root/(path.lstrip('/')+'.html'),root/path.lstrip('/')/'index.html']:
        if p.is_file(): return p.read_bytes()
    raise FileNotFoundError(path)
class Page(html.parser.HTMLParser):
    def __init__(self,raw):
        super().__init__();self.tags=[];self.body=[];self.footer=[];self.hidden=0;self.section=''
        self.feed(raw.decode())
    def handle_starttag(self,t,a):
        attrs=dict(a);self.tags.append((t,attrs))
        if t=='footer':self.section='footer'
        if t in ('script','style'):self.hidden+=1
        if self.section=='footer' and t=='a':self.footer.append(attrs.get('href'))
    def handle_endtag(self,t):
        if t=='footer':self.section=''
        if t in ('script','style'):self.hidden=max(0,self.hidden-1)
    def handle_data(self,d):
        if not self.hidden:self.body.append(d)
homes={l:Page(get('/'+l)) for l in locales}
sitemap={x.text for x in ET.fromstring(get('/sitemap.xml')).iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')}
def photo(p):
    path=p['image'];return path,get(path)==pathlib.Path('public'+path).read_bytes()
def check(job):
    p,l=job;route='/'+l+'/nearby/'+p['slug'];url=base+route
    try:
        d=Page(get(route));body=' '.join(' '.join(d.body).split());c=p['locales'][l]
        checks={k:' '.join(c[k].split()) in body for k in ['name','intro','look','photo','fees','hours','stay','advice','note','tag']}
        checks.update(stops=all(x in body for x in c['stops']),photo=images[p['image']] and any(t=='img' and a.get('src')==p['image'] for t,a in d.tags),footer=bool(d.footer) and d.footer==homes[l].footer,language=any(t=='html' and a.get('lang')==l for t,a in d.tags),FAQ=sum(t=='details' for t,a in d.tags)==3,table=any(t=='table' for t,a in d.tags),map=any(t=='a' and a.get('href')==p['map'] for t,a in d.tags),canonical=any(t=='link' and a.get('rel')=='canonical' and a.get('href')==url for t,a in d.tags),languages=all(any(t=='link' and a.get('hreflang')==lang and a.get('href')==base+'/'+lang+'/nearby/'+p['slug'] for t,a in d.tags) for lang in locales),sitemap=url in sitemap,directory=any(t=='a' and a.get('href')==route for t,a in homes[l].tags))
        return {'url':url,'passed':all(checks.values()),'missing':[k for k,v in checks.items() if not v]}
    except Exception as e:return {'url':url,'passed':False,'error':str(e)}
with concurrent.futures.ThreadPoolExecutor(5) as pool:
    images=dict(pool.map(photo,records));rows=list(pool.map(check,[(p,l) for p in records for l in locales]))
originals=sorted(pathlib.Path('public/gallery').glob('*.jpg'));assert len(originals)==19
for f in originals: assert get('/gallery/'+f.name)==f.read_bytes(),f.name
n=sum(x['passed'] for x in rows);print(n,'/',len(rows),'language pages;',sum(images.values()),'verified venue images;',len(originals),'original photographs')
json.dump(rows,open('verified-140.json','w'),ensure_ascii=False,indent=2)
for x in rows:
    if not x['passed']: print(x)
assert len(rows)==93 and n==93 and len(images)==31 and all(images.values())
