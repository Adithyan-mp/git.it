import React from "react";
import FormField from "./FormField";

function GigForm({ formFields, formData, handleInputChange, formErrors }) {
  return (
    <form className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start overflow-hidden px-20 py-16 mx-auto w-auto bg-gray-800 rounded-[30px] shadow-bg max-md:px-5 max-md:mt-10">
        {formFields.map((field, index) => (
          <FormField
            key={index}
            {...field} // Spread field to pass label, type, etc.
            formData={formData} // Pass form data
            handleInputChange={handleInputChange} // Pass handle input change function
            placeholder={field.placeholder || ''} // Pass placeholder (ensure field objects have this property if needed)
            error={formErrors[field.label.toLowerCase().replace(/\s+/g, '-')]} // Pass error if exists
          />
        ))}
      </div>
    </form>
  );
}

export default GigForm;
