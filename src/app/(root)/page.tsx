import { redirect } from "next/navigation";

// Since output is 'export', Next.js doesn't support server-side redirects well for static export without a meta refresh.
// But actually `redirect` in a static page might work at build time or generate a meta refresh. 
// However, the best way for client-side language detection in static export is a client component.
import LanguageRedirect from "./LanguageRedirect";

export default function RootPage() {
  return <LanguageRedirect />;
}