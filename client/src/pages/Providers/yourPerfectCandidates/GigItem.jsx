import React from 'react';
import { IoIosPeople, IoMdArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';

function GigItem({ title, applicants, jobId, userId }) {
  return (
    <article className="py-8 px-10 mt-8 bg-white border border-gray-300 rounded-xl shadow-lg w-full max-w-[1200px] max-md:px-5 ml-[20px]">
      <div className="flex gap-8 max-md:flex-col justify-between items-center">
        
        {/* Title Section */}
        <div className="flex flex-col justify-center w-[20%] max-md:w-full">
          <h2 className="text-4xl font-semibold text-gray-800">{title}</h2>
        </div>

        {/* Applicants Section */}
        <div className="flex items-center gap-3 text-2xl font-semibold text-orange-600">
          <IoIosPeople className="text-5xl text-gray-800" />
          <div>
            {applicants} <span className="text-gray-600">applicants</span>
          </div>
        </div>

        {/* More Details Section */}
        <div className="flex items-center gap-2 text-xl text-blue-600 font-medium hover:underline">
          <Link to={`/perfectcandidates/${userId}/${jobId}`} className="flex items-center">
            More details
            <IoMdArrowDropright className="text-4xl ml-2" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default GigItem;
