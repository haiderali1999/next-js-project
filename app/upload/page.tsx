"use client";
import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <CldUploadWidget
      uploadPreset="who3rdcr"
      onUpload={(result, widget) => {
        console.log(result);
        setPublicId("")
      }}
    >
      {({ open }) => (
        <button className="btn btn-primary" onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadPage;
