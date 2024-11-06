import React from 'react';
import InputField from './InputField';
import CheckboxField from './CheckboxField';

const inputFields = [
  { label: 'NAME', type: 'text' },
  { label: 'EMAIL ID', type: 'email' },
  { label: 'User ID', type: 'text' },
  { label: 'Address', type: 'text' },
  { label: 'Skills', type: 'text' },
  { label: 'Location', type: 'text' },
  { label: 'phONE-No', type: 'tel' },
//   { label: 'Password', type: 'password' },
//   { label: 'Conform Password', type: 'password' },
];

function UserRegistration() {
  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-16 pb-72 bg-gray-800 max-md:px-5 max-md:pb-24">
      <div className="flex flex-col ml-6 w-full max-w-[1120px] max-md:max-w-full">
        <h1 className="text-4xl font-semibold text-white max-md:max-w-full">
          Change Your Account details!
        </h1>
        <form className="flex flex-col items-center self-center py-20 pr-20 pl-9 mt-16 max-w-full text-xl font-medium text-black bg-white rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[656px] max-md:px-5 max-md:mt-10">
          <div className="flex flex-wrap gap-0.5 items-start self-stretch h-[807px] max-md:max-w-full">
            <h2 className="grow shrink text-2xl font-semibold text-center text-teal-600 w-[518px] max-md:max-w-full"
            style={{ marginTop: '-1cm' }}>
              CHANGE HERE :)
            </h2>
            {inputFields.map((field, index) => (
              <InputField key={index} label={field.label} type={field.type} />
            ))}
          </div>
          <CheckboxField />
          <button
            type="submit"
            className="px-16 py-8 mt-16 w-48 max-w-full font-semibold leading-tight text-white whitespace-nowrap bg-teal-600 rounded-[30px] max-md:px-5 max-md:mt-10"
            style={{ marginTop: '-0.1cm' }}>
            CHANGE
          </button>
        </form>
      </div>
    </main>
  );
}

export default UserRegistration;