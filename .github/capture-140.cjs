const { chromium } = require(process.env.RUNNER_TEMP + '/visual-check/node_modules/playwright');
const fs=require('node:fs');
(async()=>{
  const browser=await chromium.launch();
  const page=await browser.newPage();
  const records=[]; const origin='https://www.pozosazulescolombia.com';
  for (const [device,width,height] of [['desktop',1440,900],['mobile',390,844]]) {
    await page.setViewportSize({width,height});
    for (const [type,path] of [['home','/es'],['detail','/es/nearby/museo-fosil']]) {
      await page.goto(origin+path,{waitUntil:'networkidle',timeout:45000});
      await page.locator('footer').waitFor({state:'attached'});
      await page.evaluate(()=>document.fonts.ready);
      await page.screenshot({path:'screens/'+device+'-'+type+'-hero.png'});
      await page.locator('footer').scrollIntoViewIfNeeded();
      await page.screenshot({path:'screens/'+device+'-'+type+'-footer.png'});
      const stats=await page.evaluate(()=>{
        const style=el=>{const s=getComputedStyle(el);return [s.fontFamily,s.color,s.backgroundColor]};
        return {nav:style(document.querySelector('nav')),footer:style(document.querySelector('footer')),bodyWidth:document.documentElement.scrollWidth,footerLinks:[...document.querySelectorAll('footer a')].map(a=>a.getAttribute('href')),title:document.querySelector('h1')?.textContent};
      });
      records.push({device,type,...stats});
      await page.evaluate(()=>scrollTo(0,0));
    }
    const [home,detail]=records.filter(x=>x.device===device);
    if(JSON.stringify(home.footerLinks)!==JSON.stringify(detail.footerLinks)||JSON.stringify(home.footer)!==JSON.stringify(detail.footer))throw Error(device+' footer mismatch');
  }
  fs.writeFileSync('screens/visual.json',JSON.stringify(records,null,2)); await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
