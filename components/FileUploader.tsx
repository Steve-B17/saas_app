"use client";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { RocketIcon, CircleArrowDown } from "lucide-react";

function FileUploader() {
  const onDrop = useCallback((acceptedFiles: File[]) => {}, []);

  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } =
    useDropzone({
      onDrop,
    });

  return (
    <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto">
      <div
        {...getRootProps()}
        className={`p-10 border-2 border-dashed mt-10 w-[90%] border-pink-500 text-pink-500 rounded-lg h-96 flex justify-center items-center ${
          isFocused || isDragAccept ? " bg-pink-200" : "bg-pink-100"
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex items-center flex-col">
          {isDragActive ? (
            <>
              <RocketIcon className="h-20 w-20 animate-ping" />
              <p>Drop the files here ...</p>
            </>
          ) : (
            <>
              <CircleArrowDown className="h-20 w-20 animate-bounce" />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FileUploader;
