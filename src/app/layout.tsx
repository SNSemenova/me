import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationItem from "@/components/NavigationItem";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Engineer",
  description: "Svetlana Semenova's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url(/large-triangles.svg)] min-h-screen grid grid-rows-[64px_1fr] justify-stretch print:flex print:min-h-0`}
      >
        <header className="bg-sky-500/20 px-1 sm:px-10 py-3 print:hidden">
          <nav>
            <ul className="flex gap-4">
              <li>
                <NavigationItem name="Home" href="/" />
              </li>
              <li>
                <NavigationItem name="CV" href="/cv" />
              </li>
              <li>
                <NavigationItem name="Projects" href="/projects" />
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
