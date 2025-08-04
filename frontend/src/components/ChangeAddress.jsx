import React from "react";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import loader from "../assets/images/loading_button.gif";
const ChangeAddress = ({setaddress,setisModalOpen}) => {
  const[newaddress,setnewaddress]=useState("");
   const [show, setshow] = useState(false);
    const onClose = () =>{
      if (newaddress) 
        {setaddress(newaddress);
    setshow(true)
    setTimeout(() => {
      setisModalOpen(false);
      setshow(false);
      
    }, 500);
  }

  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter new address"
        className="border p-2 w-full mb-4"
        onChange={(e) => setnewaddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2 cursor-pointer"
          onClick={() => setisModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded flex cursor-pointer"
          onClick={onClose}
        >
          {show && newaddress ? "Saving.." :"Save Address"}
         
          <img
            src={loader}
            className={`w-5 h-5 ml-2 mt-1 ${
              show && newaddress ? "block" : "hidden"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
