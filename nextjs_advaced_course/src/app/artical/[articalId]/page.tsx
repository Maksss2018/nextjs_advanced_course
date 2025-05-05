import Link from "next/link";

export default async function ArticalPage({
  params,
  searchParams,
}: {
  params: Promise<{ articalId: string }>;
  searchParams: Promise<{ lang: string }>;
}) {
  const { articalId } = await params;
  const { lang } = await searchParams;
  if (!articalId) {
    return (
      <>
        <h1>Articals page</h1>
        <Link href="/artical/news-1">read "news 1"</Link>
        <Link href="/artical/news-2">read "news 2"</Link>
      </>
    );
  }
  return (
    <>
      <h1>Artical {articalId} page </h1>

      {lang && (
        <h2>
          read in <b>{lang}</b>
        </h2>
      )}
      <Link href={`/artical/${articalId}?lang=en`}>read in English</Link>
      <Link href={`/artical/${articalId}?lang=fr`}>read in French</Link>
    </>
  );
}
