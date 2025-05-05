import Link from "next/link";
export default function ArticalsListPage() {
  return (
    <>
      <h1>Articals page</h1>
      <Link href="/artical/news-1">read "news 1"</Link>
      <Link href="/artical/news-2">read "news 2"</Link>
    </>
  );
}
