/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud, FileText } from "lucide-react";
import { toast } from "react-toastify";

const FileUpload = ({ file, setFile }) => {
  const [isDragging, setIsDragging] = useState(false);

 const handleFileChange = (e) => {
  const uploaded = e.target.files[0];
  if (uploaded) {
    if (uploaded.type === "application/pdf") {
      setFile(uploaded);
    } else {
      toast.error("Only PDF files are allowed.");
      e.target.value = ""; 
    }
  }
};


  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  return (
    <motion.div

      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* <h2 className="text-xl font-semibold text-gray-800">Upload Project PDF</h2> */}

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`transition-all duration-200 border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-[#202020]"
          } hover:border-blue-400 hover:bg-[#202020]`}
      >
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="flex flex-col items-center justify-center  cursor-pointer ">
          
            <>
              <UploadCloud className="w-10 h-10 text-blue-500 mb-2" />
              <p className="text-white text-sm">
                Click or drag & drop a PDF file here
              </p>
            </>
          
        </label>
      </div>

      {/* {file && (
        <div className="text-sm text-green-600 font-medium text-center">
          File ready for upload
        </div>
      )} */}
    </motion.div>
  );
};

export default FileUpload;
