import React, { useState } from 'react';
import JobDetailsCard from '../../../components/DetailCard/JobDetailCard'; // Import the JobDetailsCard component

const GigCard = ({jobId,providerId, title, company, shift, duration, pay, imageUrl,description ,role,time,type,location}) => {
  const [isOpen, setIsOpen] = useState(false);
  const UserId = localStorage.getItem('userId'); // State to control the details modal

  // Open the job details modal
  const openDetails = () => {
    setIsOpen(true);
  };

  // Close the job details modal
  const closeDetails = () => {
    setIsOpen(false);
  };

  return (
    <>
      <article className="flex flex-col grow shrink-0 my-auto min-w-[240px] max-w-[240px] shadow-md mt-[0px] rounded-[30px] ml-[50px] mb-[30px]">
        <div className="flex flex-col items-start px-[20px] py-[20px] w-full bg-neutral-100 rounded-[30px] md:pl-2">
          <div className="flex gap-[1px]">
          {imageUrl && (
            <img
              loading="lazy"
              src={imageUrl}
              alt={`${title} gig`}
              className="flex-shrink-0 h-[40px] w-[40px] rounded-full border border-black bg-transparent"
            />
          )}
            {/* <div className="flex-shrink-0 h-[40px] w-[40px] rounded-full border border-black bg-zinc-300" /> */}
            <div className="flex flex-col justify-center">
              <h3 className="text-base font-semibold ml-[15px]">{title}</h3>
              <p className="mt-1 text-sm text-gray-700">{company}</p>
            </div>
          </div>
          <p className="mt-6 text-sm">
            Type: <span className="font-medium">{type}</span>
          </p>
          <p className="mt-6 text-sm">
            Shift: <span className="font-medium">{shift}</span>
          </p>
          <p className="mt-4 text-sm">
            Duration: <span className="font-semibold">{duration}</span>
          </p>
          <p className="mt-4 text-sm">
            Pay: <span className="font-semibold">{pay}</span>
          </p>
          <button
            aria-label="View details"
            className="self-center px-6 py-2 mt-6 text-sm font-semibold text-white bg-gray-800 rounded-full"
            onClick={openDetails}
          >
            Details
          </button>
        </div>
      </article>

      {/* JobDetailsCard component for showing the gig details */}
      {isOpen && (
        <JobDetailsCard
          job={{
            id:jobId,
            providerId:providerId,
            title: title,
            role : role,
            location: location, // or any other field you want
            salary: pay,
            shift : shift,
            time:time,
            contact: 'contact@company.com',
            description : description // Add actual contact info
          }}
          onClose={closeDetails}
          seekerId={UserId}
        />
      )}
    </>
  );
};

export default GigCard;
