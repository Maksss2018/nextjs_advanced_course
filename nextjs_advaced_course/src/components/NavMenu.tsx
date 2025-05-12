"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const linksArray = [
  { name: "Home", href: "/" },

  { name: "About", href: "/about" },

  { name: "Docs", href: "/docs" },

  { name: "Login", href: "/login" },

  { name: "Register", href: "/register" },

  { name: "read artical", href: "/artical" },

  { name: "Order product page", href: "/order-product" },
];

export default function NavMenu(): React.ReactNode {
  const pathname = usePathname();
  return (
    <nav>
      {linksArray.map(({ name, href }) => {
        const isActive =
          pathname === href || (pathname.startsWith(href) && href !== "/");
        const active = isActive ? "red-link" : "black-link";
        return (
          <Link className={active} key={name} href={href} replace>
            {name}
          </Link>
        );
      })}
    </nav>
  );
}
