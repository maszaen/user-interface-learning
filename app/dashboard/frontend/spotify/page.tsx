'use client'
import Image from "next/image";
import Link from "next/link";
import Directory from "../../../components/directory/page";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex h-full flex-col gap-8 items-center sm:items-start min-w-[450px]">
      <Directory/>
  
          <div className="dashCard">
            <p>Category</p>
            <Link href={"/dashboard/frontend/spotify"}>
              <div className={isOpen ? "subCard" : "hidden"}>
                <div className="cardContent">
                  <h3>Spotify UI</h3>
                </div>
              </div>
            </Link>

            <Link href={"/dashboard/iosui"}>
              <div className={isOpen ? "subCard" : "hidden"}>
                <div className="cardContent">
                  <h3>IOS UI</h3>
                </div>
              </div>
            </Link>

            <Link href={"/database"}>
              <div className={isOpen ? "subCard" : "hidden"}>
                <div className="cardContent">
                  <h3>Database Design</h3>
                </div>
              </div>
            </Link>
          </div>

        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
