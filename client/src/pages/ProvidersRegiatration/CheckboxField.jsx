import React from 'react';

const CheckboxField = () => {
  return (
    <div className="flex items-center w-full mb-4">
      <input
        type="checkbox"
        id="terms"
        className="mr-2"
        required
      />
      <label htmlFor="terms" className="text-sm text-gray-700">
        I agree to the terms and conditions
      </label>
    </div>
  );
};

export default CheckboxField;
