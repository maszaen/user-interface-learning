'use client';

import { useEffect, useState } from "react";
import { gapi } from "gapi-script";

// API_KEY dan CLIENT_ID perlu diatur di file .env
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const DISCOVERY_DOC = "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest";
const SCOPES = "https://www.googleapis.com/auth/drive.readonly";

// Named Export untuk hook useAuthDrive
export const useAuthDrive = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [files, setFiles] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const start = () => {
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
              .catch((error: any) => {
                setErrorMessage("Error initializing Google Auth: " + error.message);
              });
          })
          .catch((error: any) => {
            setErrorMessage("Error initializing GAPI Client: " + error.message);
          });
      };
      gapi.load('client:auth2', start);
    }
  }, []);

  return { isSignedIn, files, errorMessage, setFiles, setErrorMessage };
};

// Named Export untuk fungsi handleAuthClick
export const handleAuthClick = () => {
  gapi.auth2.getAuthInstance().signIn().catch((error: any) => {
    console.error("Sign-in failed: " + error.message);
  });
};

// Named Export untuk fungsi handleSignoutClick
export const handleSignoutClick = () => {
  gapi.auth2.getAuthInstance().signOut();
};

// Named Export untuk fungsi listFiles
export const listFiles = async (setFiles: any, setErrorMessage: any) => {
  try {
    const response = await gapi.client.drive.files.list({
      pageSize: 10,
      fields: "files(id, name)",
    });
    const files = response.result.files;
    if (files && files.length > 0) {
      setFiles(files.map((file: any) => `${file.name} (${file.id})`));
    } else {
      setFiles([]);
    }
  } catch (error: any) {
    setErrorMessage("Error fetching files: " + error.message);
  }
};
