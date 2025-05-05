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
  if (slug[3] === "error") {
    throw Error(" its longer then 4 ");
  }
  if (slug.length >= 5) {
    notFound();
  }
  return (
    <>
      <h1>Docs page for:</h1>
      <h2>{slug.join("/")}</h2>
    </>
  );
}
