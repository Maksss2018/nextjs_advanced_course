import Link from "next/link";
export default function SomeComponentPage() {
  return (
    <>
      <h3> Some component </h3>
      <Link href={"/about/renderOtherComponent"}>Update it</Link>
    </>
  );
}
