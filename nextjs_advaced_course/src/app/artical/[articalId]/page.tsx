import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ articalId: string }>;
  searchParams: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { articalId } = await params;
  const { lang = "en" } = await searchParams;

  return {
    title: `${lang} ${articalId}`,
  };
}

export default async function ArticalPage({ params, searchParams }: Props) {
  const { articalId } = await params;
  const { lang } = await searchParams;

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
