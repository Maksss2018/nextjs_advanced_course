import Link from "next/link";
import React from "react";

export default function FirstPage() {
  return (
    <h1>
      {" "}
      F2 - go to <Link href={"/f1"}>F1</Link>{" "}
    </h1>
  );
}
