import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "about page",
};

export default function AboutLayout({
  children,
  someComponentPage,
  someOtherComponentPage,
}: Readonly<{
  children: React.ReactNode;
  someComponentPage: React.ReactNode;
  someOtherComponentPage: React.ReactNode;
}>) {
  return (
    <>
      {children}
      {someComponentPage}
      {someOtherComponentPage}
    </>
  );
}
