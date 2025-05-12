import Link from "next/link";
export default function SomeComponentPage() {
  return (
    <>
      <h3> Some component updated!!</h3>
      <Link href={"/about"}>Back</Link>
    </>
  );
}
