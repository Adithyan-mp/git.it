import React from 'react';
import axios from 'axios'; // Import axios for making API requests

const JobDetailsCard = ({ job, onClose, seekerId }) => {
  if (!job) return null;

  // Function to handle the apply action
  const applyForJob = async () => {
    try {
      const applicationData = {
        jobId: job.id,  // Assuming job.id is the unique identifier for the job
        seekerId: seekerId, // Pass seeker ID from props
        providerId: job.providerId, // Make sure job object contains providerId
        status: 'pending', // Initial status
      };

      // Send POST request to your backend API
      const response = await axios.post('/api/applications', applicationData);
      console.log('Application submitted:', response.data);
      // Optionally, you can close the modal or show a success message
      onClose();
      window.location.reload();
    } catch (error) {
      console.error('Error applying for job:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Close Button */}
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={onClose}>
          &times;
        </button>
        {/* Job Title */}
        <h2 className="text-2xl font-semibold mb-4">{job.title}</h2>
        {/* Job Description */}
        <p className=" mb-2 text-gray-700"><strong>Role : </strong>{job.role}</p>
        {/* Additional Details */}
        <p className="mb-2"><strong>Location:</strong> {job.location}</p>
        <p className="mb-2"><strong>Shift:</strong> {job.shift}</p>
        <p className="mb-2"><strong>Time:</strong> {job.time}</p>
        <p className="mb-2"><strong>Salary:</strong> {job.salary}</p>
        <p className="mb-4"><strong>Contact:</strong> {job.contact}</p>
        <p className='mb-2'><strong>Job Description:</strong></p>
        <p className='mb-4'>{job.description}</p>
        {/* Apply Button */}
        <button 
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={applyForJob} // Call applyForJob on button click
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobDetailsCard;
