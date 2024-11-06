import React, { useState } from 'react';
import axios from 'axios'; // Make sure to import axios
import JobDetailsCardDisplay from '../../../components/DetailCard/JobDetailCardDisplay';

function JobCard({ jobId, title, company, location, pay, shift, time, role, description, onApplicationCancelled }) {
  const [isOpen, setIsOpen] = useState(false);
  const userId = localStorage.getItem('userId');
  const [isChecked, setIsChecked] = useState(false); // Manage checkbox state here
  const [loading, setLoading] = useState(false); // Manage loading state here

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
      <div className="flex flex-col w-auto max-md:mt-10">
        <div className="py-5 px-6 bg-white border border-pink-800 rounded-2xl shadow-md">
          <div className="flex gap-5 items-center max-md:flex-col">
            {/* Job Info Section */}
            <div className="flex flex-col w-4/5 max-md:w-full">
              <div className="flex items-center gap-5 max-md:flex-col">
                <div
                  className="flex-shrink-0 rounded-full bg-zinc-300 h-[77px] w-[77px]"
                  aria-hidden="true"
                />
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold text-black">{title}</h3>
                  <p className="mt-2 text-xl text-black text-opacity-90">
                    {company}
                  </p>
                  <button
                    className="mt-4 text-base text-blue-600 hover:underline"
                    aria-label={`See more details about ${title} at ${company}`}
                    onClick={openDetails}
                  >
                    See more...
                  </button>
                </div>
              </div>
            </div>

            {/* Location Info Section */}
            <div className="flex flex-col items-center w-1/5 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3be050e6e89b7cab7a13f2288a2f74f115c994fa3cff6fee43a4752cf99ff3b4?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab"
                alt="Location icon"
                className="w-7 h-7 object-contain"
              />
              <div className="mt-2 text-base text-black text-opacity-90">
                {location}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JobDetailsCard component for showing the gig details */}
      {isOpen && (
        <JobDetailsCardDisplay
          job={{
            jobId: jobId, // Pass jobId to use in cancellation
            title: title,
            role: role,
            location: location,
            salary: pay,
            shift: shift,
            time: time,
            contact: 'contact@company.com',
            description: description,
          }}
          onClose={closeDetails}
          onCancel={() => {
            // Cancel application logic
            if (!isChecked) return; // Ensure the checkbox is checked
            setLoading(true); // Start loading
            axios
              .delete(`/api/applicationscancel/${jobId}`, { data: { userId } })
              .then(response => {
                console.log('Application cancelled:', response.data);
                closeDetails(); // Close the modal
                
                // Option 1: Refresh the entire page
                window.location.reload();

                // Option 2: Call a function passed down from parent to re-fetch applications
                // if (onApplicationCancelled) {
                //   onApplicationCancelled(); // Invoke the function to refresh data
                // }
              })
              .catch(error => {
                console.error('Error cancelling application:', error);
              })
              .finally(() => {
                setLoading(false); // Stop loading
              });
          }}
          showCancel={true}
          isChecked={isChecked} // Pass the checkbox state
          setIsChecked={setIsChecked} // Pass the function to set checkbox state
          loading={loading} // Pass the loading state
        />
      )}
    </>
  );
}

export default JobCard;
