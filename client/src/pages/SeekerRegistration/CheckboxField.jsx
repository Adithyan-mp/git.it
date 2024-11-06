// CheckboxField.js
import React from 'react';

function CheckboxField({ label, checked, onChange }) {
  return (
    <div className="flex items-center mt-5">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      <label className="text-sm">{label}</label>
    </div>
  );
}

export default CheckboxField;
