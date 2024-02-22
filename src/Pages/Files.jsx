import { useState } from "react";

export function Files() {
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");

  function handleFileChange(e) {
    const files = Array.from(e.target.files);
    setFiles(files);
    setUploadProgress(Array(files.length).fill(0));
  }

  async function handleUpload() {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`index${index}`, file);
    });
    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
        // You may need to set headers for file uploads
      });

      if (!response.ok) {
        throw new Error("Failed to upload files");
      }

      setUploadStatus("success");
    } catch (error) {
      console.error("Error uploading files:", error.message);
      setUploadStatus("error");
    }
  }

  return (
    <>
      <input type="file" multiple onChange={handleFileChange}></input>
      <button onClick={handleUpload}>Upload</button>
      {files.map((file, index) => (
        <div key={index}>
          {file.name} - {file.size} bytes
          <progress value={uploadProgress[index]} max="100" />
        </div>
      ))}
      {uploadStatus && (
        <div>
          {uploadStatus === "success" ? "Upload successful" : "Upload failed"}
        </div>
      )}
    </>
  );
}

/*
*Develop a file upload component to upload multiple files simultaneously. It should 
display progress indicators for each file and should display a success or error message 
after the upload is complete.
*/
