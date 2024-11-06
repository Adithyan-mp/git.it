import React from 'react';

function InputPassword({ label, type }) {
  const id = label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col w-full max-w-[400px]"> {/* Ensure it matches the ChangePassword width */}
      <label htmlFor={id} className="text-left">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="flex bg-white border border-black h-[40px] w-full" // Set width to 100% for responsiveness
        aria-label={label}
      />
    </div>
  );
}

export default InputPassword;
