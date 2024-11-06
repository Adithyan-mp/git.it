import React, { useState } from 'react';

function CheckboxField() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center mt-4">
      <input
        id="terms"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
      />
      <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-700">
        I agree to the terms and conditions
      </label>
    </div>
  );
}

export default CheckboxField;
