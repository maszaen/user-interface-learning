import Image from "next/image"
export default function Footer() {
	return (
		<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
			<a
			  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
			  href="https://github.com/maszaen?tab=repositories"
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
			  Repo Github
			</a>
			<a
			  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
			  href="https://nextjs.org/docs"
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
			  NextJS Docs
			</a>
			<a
			  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
			  href="https://www.dicoding.com/academies/my"
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
			  Dicoding Learn →
			</a>
	  </footer>
	)
}