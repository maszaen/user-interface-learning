'use client'
import Image from "next/image";
import Footer from "./components/footer/page";
import { useAuthDrive, handleAuthClick, handleSignoutClick, listFiles } from "./components/driveauth/page";

export default function Home() {
  const { isSignedIn, files, errorMessage, setFiles, setErrorMessage } = useAuthDrive();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div>
      <h1>My Drive Page</h1>
      {isSignedIn ? (
        <>
          <button onClick={handleSignoutClick}>Sign Out</button>
          <button onClick={() => listFiles(setFiles, setErrorMessage)}>List Files</button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <pre>{files.length ? files.join("\n") : "No files found."}</pre>
        </>
      ) : (
        <>
          <button onClick={handleAuthClick}>Authorize</button>
        </>
      )}
    </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Mulailah bereksperimen, buka dan edit folder{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/dashboard
            </code>
            .
          </li>
          <li>Kembangkan kreatifitasmu, jadilah programer handal.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/dashboard"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Dashboard
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/privacypolicy"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
