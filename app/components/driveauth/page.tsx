'use client'
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID = process.env.CLIENT_ID;
const API_KEY = process.env.API_KEY;
const DISCOVERY_DOC = "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest";
const SCOPES = "https://www.googleapis.com/auth/drive.readonly";

export default function DriveAuth() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [files, setFiles] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  

  useEffect(() => {
    function start() {
      gapi.client
        .init({
          apiKey: API_KEY,
          discoveryDocs: [DISCOVERY_DOC],
        })
        .then(() => {
          gapi.auth2
            .init({
              client_id: CLIENT_ID,
              scope: SCOPES,
            })
            .then(() => {
              const GoogleAuth = gapi.auth2.getAuthInstance();
              setIsSignedIn(GoogleAuth.isSignedIn.get());
              GoogleAuth.isSignedIn.listen(setIsSignedIn);
            })
            .catch((error: { message: string; }) => {
              setErrorMessage("Error initializing Google Auth: " + error.message);
            });
        })
        .catch((error: { message: string; }) => {
          setErrorMessage("Error initializing GAPI Client: " + error.message);
        });
    }

    gapi.load("client:auth2", start);
  }, []);

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn().catch((error: { message: string; }) => {
      setErrorMessage("Sign-in failed: " + error.message);
    });
  };

  const handleSignoutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  interface GoogleDriveFile {
    id: string;
    name: string;
  }
  
  const listFiles = async () => {
    const response = await gapi.client.drive.files.list({
      pageSize: 10,
      fields: "files(id, name)",
    });
    const files: GoogleDriveFile[] = response.result.files; // Use the new type here
    setFiles(files.map((file) => `${file.name} (${file.id})`));
  };
  

  return (
    <div>
      <h1>Google Drive API Quickstart</h1>
      {isSignedIn ? (
        <>
          <button onClick={handleSignoutClick}>Sign Out</button>
          <button onClick={listFiles}>List Files</button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <pre>{files.length ? files.join("\n") : "No files found."}</pre>
        </>
      ) : (
        <>
          <button onClick={handleAuthClick}>Authorize</button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </>
      )}
    </div>
  );
}


