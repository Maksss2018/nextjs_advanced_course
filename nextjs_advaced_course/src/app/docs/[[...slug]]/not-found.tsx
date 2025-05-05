"use client";

import { usePathname } from "next/navigation";
export default function NotFound() {
  const pathname = usePathname();
  return (
    <>
      <h1>404</h1>
      <h2>Page not found by pathname:</h2>
      <h3>{pathname}</h3>
    </>
  );
}
