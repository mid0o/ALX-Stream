import React from "react";
import { FiUploadCloud } from "react-icons/fi";
import { Input } from "./UsedInputs";

const Uploader = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(file.name);
    }
  };

  return (
    <>
      <div className="w-full text-center">
        <div className="px-6 pt-5 pb-6 border-2 gap-6 border-border border-dashed bg-main rounded-md cursor-pointer">
          <input 
            type="file" 
            accept=".jpg,.png"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <span className="mx-auto flex-colo text-subMain text-3xl">
              <FiUploadCloud />
            </span>
            <p className="text-sm mt-2">Click to upload image</p>
            <em className="text-sm text-gray-500">
              (only .jpg and .png files will be accepted)
            </em>
          </label>
        </div>

        <label className="text-border font-semibold">FullName</label>
        <Input
          required=""
          type="text"
          placeholder="Netflixo React Tailwind"
          className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
        />
        <div className="text-sm w-full">
          <label className="text-border font-semibold">Email</label>
          <input
            required=""
            type="email"
            placeholder="netflixo@gmail.com"
            className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
          />
        </div>
        <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
          <button className="bg-subMain font-medium transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Delete Account
          </button>
          <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Update Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Uploader;
