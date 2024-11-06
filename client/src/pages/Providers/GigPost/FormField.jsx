import React from "react";

function FormField({ label, type, formData, handleInputChange, placeholder, error }) {
  const inputId = label.toLowerCase().replace(/\s+/g, '-');

  let inputElement;
  const commonClasses = "flex shrink-0 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200";

  if (type === "textarea") {
    inputElement = (
      <textarea
        id={inputId}
        className={`${commonClasses} h-[110px] w-full p-3`}
        aria-label={label}
        placeholder={placeholder}
        value={formData[inputId] || ''} // Controlled component
        onChange={(e) => handleInputChange({ target: { name: inputId, value: e.target.value } })} // Handle input change
      />
    );
  } else {
    inputElement = (
      <input
        type={type}
        id={inputId}
        className={`${commonClasses} h-[40px] w-full p-2`}
        aria-label={label}
        placeholder={placeholder}
        value={formData[inputId] || ''} // Controlled component
        onChange={(e) => handleInputChange({ target: { name: inputId, value: e.target.value } })} // Handle input change
      />
    );
  }

  return (
    <div className="flex flex-col gap-2 mt-9 first:mt-0">
      <label 
        htmlFor={inputId} 
        className="text-lg leading-tight text-white">
        {label}
      </label>
      <div className="flex-grow w-full">
        {inputElement}
      </div>
      {error && <span className="text-red-500 text-sm">{error}</span>} {/* Error message */}
    </div>
  );
}

export default FormField;
