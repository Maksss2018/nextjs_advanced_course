"use client";
import { usePathname } from "next/navigation";

export default function NotFound({ error }: { error: Error }) {
  const pathname = usePathname();
  return (
    <>
      <h1>Error</h1>
      <h2>something wroung with:</h2>
      <h3>{pathname}</h3>
      <p>Msg:{error.message}</p>
    </>
  );
}
