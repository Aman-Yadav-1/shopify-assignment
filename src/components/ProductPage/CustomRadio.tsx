import React from "react";

const CustomRadio = ({ checked, onChange, name, value }) => (
  <div 
    className="relative w-5 h-5 cursor-pointer"
    onClick={() => onChange(value)}
  >
    <div className={`w-5 h-5 rounded-full border-2 ${
      checked ? 'border-black' : 'border-gray-400'
    } bg-white flex items-center justify-center`}>
      {checked && (
        <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
      )}
    </div>
  </div>
);

export default CustomRadio;