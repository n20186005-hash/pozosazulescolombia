import urllib.request as req, json, base64, sys, io, hashlib, pathlib, concurrent.futures, urllib.parse
from PIL import Image
items=list(json.load(open('.github/photo-sources-140.json')).items())
def fetch(item):
    slug, urls=item
    originals=[]
    for url in urls:
        if 'upload.wikimedia.org' in url and '/thumb/' in url: originals.append(url.replace('/thumb/','/').rsplit('/',1)[0])
        if 'Special:FilePath/' in url:
            filename=urllib.parse.unquote(url.split('Special:FilePath/')[-1].split('?')[0]); key=hashlib.md5(filename.encode()).hexdigest()
            originals.append('https://upload.wikimedia.org/wikipedia/commons/'+key[0]+'/'+key[:2]+'/'+urllib.parse.quote(filename))
    for n,url in enumerate(urls+originals):
        try:
            url=urllib.parse.quote(url,safe=":/?=%&+@;,$!()~*'")
            request=req.Request(url,headers={'User-Agent':'Mozilla/5.0 (compatible; Boyaca travel guide image check)'})
            with req.urlopen(request,timeout=18) as response: image=Image.open(io.BytesIO(response.read(22000000)))
            image=image.convert('RGB'); image.thumbnail((960,800))
            for quality in (82,70,58,48,37):
                out=io.BytesIO(); image.save(out,'WEBP',quality=quality)
                if out.tell()<27000:break
            while out.tell()>=30000 and image.width>250:
                image.thumbnail((int(image.width*.78),int(image.height*.78)));out=io.BytesIO();image.save(out,'WEBP',quality=58)
            raw=out.getvalue(); assert 400<len(raw)<60000, f'image bytes {len(raw)}'
            encoded=base64.b64encode(raw).decode(); print(f'META|{slug}|{len(raw)}|{url}',flush=True)
            for offset in range(0,len(encoded),1500): print(f'PHOTO|{slug}|{offset}|{encoded[offset:offset+1500]}',flush=True)
            return True
        except Exception as e: print(slug,n,str(e)[:100],flush=True)
    print(f'::warning title=MISSING-{slug}::No valid source',flush=True);return False
part=int(sys.argv[1]);batch=items[part*5:part*5+5]
with concurrent.futures.ThreadPoolExecutor(4) as pool: list(pool.map(fetch,batch))
