import Link from "next/link";
import React from "react";

export default function FirstPage() {
  return (
    <h1>
      {" "}
      F2 intercepted - go to <Link href={"/f2"}>F2</Link>{" "}
    </h1>
  );
}
