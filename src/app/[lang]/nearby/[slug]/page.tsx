import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Nav, Footer } from "@/components/SiteFrame";
import { LangProvider } from "@/components/LangProvider";
import { alternatives, domain, labels, locales, places } from "@/nearby/catalog";
import type { Locale } from "@/i18n/translations";

type Params = Promise<{ lang: Locale; slug: string }>;
export const dynamicParams = false;
export function generateStaticParams() { return places.map(({slug}) => ({slug})); }
function resolve(locale: Locale, slug: string) {
  const index = places.findIndex(p => p.slug === slug);
  if (!locales.includes(locale) || index < 0) notFound();
  return { p:places[index], index };
}
export async function generateMetadata({params}: {params:Params}): Promise<Metadata> {
  const {lang:locale,slug}=await params;
  const {p}=resolve(locale,slug); const t=p.locales[locale]; const path="/nearby/"+slug;
  return {title:t.name,description:t.intro,alternates:{canonical:domain+"/"+locale+path,...alternatives(path)},openGraph:{title:t.name,description:t.intro,url:domain+"/"+locale+path,images:[domain+p.image]}};
}
const pairs=[1,0,3,2,6,6,5,3,7,10,11,10,13,12,9,16,15,0,19,18,13,18,11,16,25,26,27,28,27,30,29];
export default async function Place({params}: {params:Params}) {
  const {lang:locale,slug}=await params;const {p,index}=resolve(locale,slug);
  const copy=p.locales[locale], tr=labels[locale], related=places[pairs[index]], relatedText=related.locales[locale];
  const relatedURL=`/${locale}/nearby/${related.slug}`;
  return <LangProvider initialLocale={locale}><Nav/><main className="place-guide">
    <header className="hero"><div className="hero-bg" style={{backgroundImage:`url("${p.image}")`}}/><div className="hero-texture"/><div className="hero-content">
      <a className="hero-tagline" href={`/${locale}#nearby`}>{tr.near}</a><h1 className="hero-title">{copy.name}</h1>
      <p className="hero-subtitle">{copy.intro}</p><a className="hero-cta" href={p.map}>{tr.map}</a>
      <p className="guide-hero-links"><a href="#hours">{tr.hours}</a> · <a href={p.map}>{tr.rating}</a></p>
    </div></header>
    <section className="section"><h2 className="section-title">{tr.gallery}</h2><p>{copy.look}</p></section>
    <section className="section"><h2 className="section-title">{tr.practical}</h2><table><tbody>
      {[[tr.about,copy.name],[tr.address,p.address],[tr.contact,p.operator],[tr.route,copy.stops.join(" → ")]].map(([key,value])=><tr key={key}><th scope="row">{key}</th><td>{value}</td></tr>)}
    </tbody></table><h3 id="hours">{tr.hours}</h3><p>{copy.hours}</p><h3>{tr.fees}</h3><p>{copy.fees}</p></section>
    <section className="section"><h2 className="section-title">{tr.walk}</h2><ol>{copy.stops.map((stop,i)=><li key={stop}><strong>{[tr.first,tr.main,tr.return][i]}</strong> · {stop}</li>)}</ol></section>
    <section className="section"><h2 className="section-title">{tr.photo}</h2><figure><img loading="lazy" src={p.image} alt={copy.name}/><figcaption>{copy.name} · <a href={p.photoSource}>{tr.credit}</a></figcaption></figure><p>{copy.photo}</p>
      <h3>{tr.stay}</h3><p>{copy.stay}</p></section>
    <section className="section"><h2 className="section-title">{tr.reviews}</h2><p>{tr.re} <a href={p.map}>{tr.rating}</a></p></section>
    <section className="section"><h2 className="section-title">{tr.faqs}</h2>
      <details open><summary>{tr.q1}</summary><p>{copy.stops[0]} → {copy.stops[1]}. {p.address} · <a href={p.map}>{tr.map}</a></p></details>
      <details open><summary>{tr.q2}</summary><p>{copy.look}</p></details>
      <details open><summary>{tr.q3}</summary><p><a href={relatedURL}>{relatedText.name}</a>. {tr.next}</p></details>
    </section><section className="section"><h2 className="section-title">{tr.directions}</h2><p>{p.address}</p><a href={p.map}>{tr.map}</a> · <a href={p.source}>{tr.source}</a><h3>{tr.other}</h3><a href={relatedURL}>{relatedText.name}</a></section>
  </main><Footer/></LangProvider>;
}
