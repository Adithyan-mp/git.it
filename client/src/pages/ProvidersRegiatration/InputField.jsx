import React from 'react';

const InputField = ({ label, type, name, onChange }) => {
  return (
    <div className="flex flex-col w-full mb-4">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        className="p-2 mt-1 border border-gray-300 rounded-md"
        required
      />
    </div>
  );
};

export default InputField;
