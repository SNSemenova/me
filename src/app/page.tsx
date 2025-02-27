import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] row-start-2 items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-6xl font-bold text-center sm:text-left">
          Welcome to Svetlana&apos;s personal website!
        </h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center w-full justify-end">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/cv"
        >
          <Image
            aria-hidden
            src="/contact_page.svg"
            alt="Profile icon"
            width={20}
            height={20}
          />
          Go to my CV →
        </Link>
      </footer>
    </div>
  );
}
