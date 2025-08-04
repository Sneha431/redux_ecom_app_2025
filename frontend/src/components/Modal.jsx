import React from "react";

const Modal = ({ children, setisModalOpen, isModalOpen }) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-gray-600 opacity-75"
        onClick={() => setisModalOpen(false)}
      ></div>
      <button
        className="absolute top-2 right-4 text-gray-300 text-3xl bg-transparent cursor-pointer"
        onClick={() => setisModalOpen(false)}
      >
        &times;
      </button>
      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md z-10">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
