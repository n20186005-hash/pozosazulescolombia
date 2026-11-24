import urllib.request as req, json, base64, sys, io, hashlib, pathlib, concurrent.futures, urllib.parse
from PIL import Image
items=list(json.load(open('.github/photo-sources-140.json')).items())
def fetch(item):
    slug, urls=item
    for n,url in enumerate(urls):
        try:
            url=urllib.parse.quote(url,safe=":/?=%&+@;,$!()~*'")
            request=req.Request(url,headers={'User-Agent':'Mozilla/5.0 (compatible; Boyaca travel guide image check)'})
            with req.urlopen(request,timeout=18) as response: image=Image.open(io.BytesIO(response.read(22000000)))
            image=image.convert('RGB'); image.thumbnail((960,800))
            for quality in (82,70,58,48,37):
                out=io.BytesIO(); image.save(out,'WEBP',quality=quality)
                if out.tell()<27000:break
            if out.tell()>=27000:
                image.thumbnail((560,500));out=io.BytesIO();image.save(out,'WEBP',quality=53)
            raw=out.getvalue(); assert 1000<len(raw)<39000
            encoded=base64.b64encode(raw).decode(); print(f'::notice title=MEDIA-{slug}::{n}|{hashlib.sha256(raw).hexdigest()}|{encoded}',flush=True)
            return True
        except Exception as e: print(slug,n,str(e)[:100],flush=True)
    print(f'::warning title=MISSING-{slug}::No valid source',flush=True);return False
part=int(sys.argv[1]);batch=items[part*5:part*5+5]
with concurrent.futures.ThreadPoolExecutor(4) as pool: list(pool.map(fetch,batch))
