import { notFound } from "next/navigation";
export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (!slug) {
    return <h1>Docs page</h1>;
  }
  if (slug.length >= 4) {
    notFound();
  }
  return (
    <>
      <h1>Docs page for:</h1>
      <h2>{slug.join("/")}</h2>
    </>
  );
}
