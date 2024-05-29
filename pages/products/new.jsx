import Layout from "@/components/Layout";
import axios from "axios";
import React, { useRef, useState } from "react";

export default function AddNewProduct() {
  const fileInputRef = useRef(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [fileName, setFileName] = useState("");

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      console.log(`Selected file: ${file.name}`);
    }
  };

  const handleCancelClick = () => {
    // Clear the file input
    fileInputRef.current.value = null;
    // Clear the file name state
    setFileName("");
  };

  
  async function createProduct(event){
    event.preventDefault();
    const data = {title, description, price}
    try{
        await axios.post('/api/products',data)
    }
    catch(error){
        console.log(error);
    }
      
  }

  return (
    <Layout>
        <form onSubmit={createProduct}>
      <h1 className="text-green-900 text-center mb-4 font-semibold text-lg">
        הוספת מוצר חדש
      </h1>
      <div className="mb-4">
        <label className="block mb-2">שם המוצר</label>
        <input
          type="text"
          placeholder="שם המוצר"
          className="w-full p-2 border border-gray-300 rounded"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">תיאור המוצר</label>
        <textarea
          placeholder="תיאור המוצר"
          className="w-full p-2 border border-gray-300 rounded"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-2">מחיר (בש"ח)</label>
        <input
          type="number"
          placeholder="מחיר"
          className="w-full p-2 border border-gray-300 rounded"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <div className="flex items-center my-4">
        <button
          onClick={handleButtonClick}
          className="bg-gray-300 rounded-md ml-2 mb-2 text-xs p-1 hover:bg-blue-500"
        >
          הוספת תמונה
        </button>
        <input
          onChange={handleFileChange}
          ref={fileInputRef}
          type="file"
          className="hidden"
        />
        <input
          type="text"
          placeholder="לא נבחר קובץ"
          value={fileName}
          readOnly
          className="flex-grow p-2 border border-gray-300 rounded"
        />
        {fileName && (
          <button
            onClick={handleCancelClick}
            className="bg-red-300 rounded-md ml-2 mb-2 text-xs p-1 hover:bg-red-500 mr-2"
          >
            ביטול
          </button>
        )}
      </div>
      <button type="submit" className="btn-primary">שמירה</button>
      </form>
    </Layout>
  );
}
