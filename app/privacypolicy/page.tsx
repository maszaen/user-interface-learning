import Link from "next/link";

export default function Home() {
  return (
    <div className="grid h-full grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex h-full max-w-[450px] flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="flex flex-col w-full gap-3">
          <div>
            <h1 className="font-bold grey-color">Privacy Policy</h1>
            <p>Last updated: 20/09/2024</p>
          </div>

          <div>
            <p>
              This website is a personal project created for learning and exploring API integrations. 
              It is not intended for commercial purposes. We do not collect personal data from users 
              except for basic browsing analytics (e.g., page views) for learning purposes.
            </p>
          </div>

          <div>
            <h2 className="font-bold grey-color">Data Collection</h2>
            <p>
              We do not intentionally collect any personal data. However, we may collect non-personally 
              identifiable information (such as browser type, device type, and basic analytics) to 
              better understand how this site is used.
            </p>
          </div>

          <div>
            <h2 className="font-bold grey-color">Use of APIs</h2>
            <p>
              This website uses external APIs for educational purposes only. No data is stored or 
              processed beyond the API interaction.
            </p>
          </div>

          <div>
            <h2 className="font-bold grey-color">Your Rights</h2>
            <p>
              As this is a non-commercial, personal project, no user accounts or personal data are 
              involved. If you have any concerns, feel free to contact the site owner for any clarifications.
            </p>
          </div>
          
          <div>
            <h2 className="font-bold grey-color">Contact Information</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at: [Your Contact Information]</p>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href="/">&larr; Back to Home</Link>
      </footer>
    </div>
  );
}
