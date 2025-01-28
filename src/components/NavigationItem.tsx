"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationItem({ name = "Home", href = "/" }) {
  const pathname = usePathname();
  const isCurrentPath = pathname === href;
  const linkStyle = isCurrentPath ? "text-sky-500 pointer-events-none" : "";
  return (
    <Link
      href={href}
      className={`px-3 py-2 inline-block underline underline-offset-4 ${linkStyle}`}
      aria-disabled={isCurrentPath}
      tabIndex={isCurrentPath ? -1 : undefined}
    >
      {name}
    </Link>
  );
}
