import React from "react";

function ActionButtons({ handlePost }) {
  return (
    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto text-xl leading-tight max-md:mt-10">
        <button 
          type="button" // Button to prevent form submission
          onClick={handlePost} // Call the handlePost function when clicked
          className="px-14 py-6 font-bold text-white bg-teal-600 rounded-[30px] hover:bg-teal-700 transition duration-200 max-md:px-5"
        >
          Post It!
        </button>
      </div>
    </div>
  );
}

export default ActionButtons;
