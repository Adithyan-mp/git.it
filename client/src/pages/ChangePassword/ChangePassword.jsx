import React from 'react';
import InputPassword from './InputPassword';
import CheckboxField from './CheckboxField';

const inputFields = [
  { label: 'Password', type: 'password' },
  { label: 'Confirm Password', type: 'password' },
];

function ChangePassword() {
  return (
    <main className="flex overflow-hidden flex-col items-center px-5 pt-16 bg-gray-800 min-h-screen justify-center">
      <div className="flex flex-col w-full max-w-[400px]"> {/* Adjust max-width */}
        <h1 className="text-2xl font-semibold text-white"> {/* Adjusted text size */}
          Change Your Password
        </h1>
        <form className="flex flex-col items-center self-center py-4 pr-5 pl-5 mt-4 text-lg font-medium text-black bg-white rounded-lg shadow-md w-full">
          <div className="flex flex-col items-center gap-4">
            {inputFields.map((field, index) => (
              <InputPassword key={index} label={field.label} type={field.type} />
            ))}
          </div>
          <CheckboxField />
          <button
            type="submit"
            className="px-8 py-4 mt-4 w-32 font-semibold leading-tight text-white bg-teal-600 rounded-lg"
          >
            CHANGE
          </button>
        </form>
      </div>
    </main>
  );
}

export default ChangePassword;