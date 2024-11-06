import React from 'react';

const AcceptanceButtons: React.FC = () => {
  return (
    <div className="flex gap-5 justify-between self-center mt-6 max-w-full w-[422px]">
      <button 
        className="flex gap-5 px-7 py-3 text-white whitespace-nowrap bg-black rounded-[30px] max-md:px-5"
        style={{ marginTop: '-20px', marginBottom: '50px', marginLeft: '-200px' }} // Move the "Accept" button up and left
      >
        <span className="self-start">Accept</span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/172d9bc425a555e2475a94c4f5d827554d500609371eca09b1730bbce946e5a5?apiKey=2b8e8d0d538b4a70b2c4e5c985b10841&" className="object-contain shrink-0 aspect-[0.85] w-[34px]" alt="" />
      </button>
      <button 
        className="px-8 pt-3.5 pb-8 text-black bg-white border border-black border-solid rounded-[30px] max-md:px-5"
        style={{ height: '68px',width: '150px', marginTop: '-23px',marginBottom: '-25px', position: 'relative', left: '-180px' }} // Adjust margin to move the "Cancel" button
      >
        Cancel
      </button>
    </div>
  );
};

export default AcceptanceButtons;
