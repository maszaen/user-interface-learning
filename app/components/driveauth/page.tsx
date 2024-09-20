import { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID = "891166606972-7o388rjai971u6n33n9a4drdjh6ej8oj.apps.googleusercontent.com";
const API_KEY = "AIzaSyATb4XpbP0OguXeVjp97UO544jRtxUTvbc";
const DISCOVERY_DOC = "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest";
const SCOPES = "https://www.googleapis.com/auth/drive.metadata.readonly";

export default function DriveAuth() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
      }).then(() => {
        gapi.auth2.init({
          client_id: CLIENT_ID,
          scope: SCOPES,
        }).then(() => {
          const GoogleAuth = gapi.auth2.getAuthInstance();
          setIsSignedIn(GoogleAuth.isSignedIn.get());
          GoogleAuth.isSignedIn.listen(setIsSignedIn);
        });
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignoutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  const listFiles = async () => {
    const response = await gapi.client.drive.files.list({
      pageSize: 10,
      fields: "files(id, name)",
    });
    const files = response.result.files;
    setFiles(files.map((file: any) => `${file.name} (${file.id})`));
  };

  return (
    <div>
      <h1>Google Drive API Quickstart</h1>
      {isSignedIn ? (
        <>
          <button onClick={handleSignoutClick}>Sign Out</button>
          <button onClick={listFiles}>List Files</button>
          <pre>{files.length ? files.join("\n") : "No files found."}</pre>
        </>
      ) : (
        <button onClick={handleAuthClick}>Authorize</button>
      )}
    </div>
  );
}
