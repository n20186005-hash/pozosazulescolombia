import HomeContent from "@/components/HomeContent";
import { notFound } from "next/navigation";

export default async function Home({params}:{params:Promise<{lang:string}>}) {
  const {lang}=await params;
  if(lang!=="en" && lang!=="es" && lang!=="zh") notFound();
  return <HomeContent lang={lang}/>;
}
