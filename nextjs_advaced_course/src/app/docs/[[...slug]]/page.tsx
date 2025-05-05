export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (!slug) {
    return <h1>Docs page</h1>;
  }
  return (
    <>
      <h1>Docs page for:</h1>
      <h2>{slug.join("/")}</h2>
    </>
  );
}
