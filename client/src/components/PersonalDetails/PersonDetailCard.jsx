import React, { useState } from 'react';
import axios from 'axios';

const JobDetailsCard = ({ person, onClose, jobId, seekerId, providerId }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!person) return null;

  const onApply = async () => {
    setLoading(true);
    try {
      setError(null);
      const response = await axios.post('/api/accepted', { status: "approved", jobId, seekerId, providerId });
      if (response.status === 200) {
        onClose();
        window.location.reload();
      }
    } catch (err) {
      console.error("Error occurred while posting the data:", err);
      setError("Failed to approve. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const onReject = async () => {
    setLoading(true);
    try {
      setError(null);
      const response = await axios.post('/api/rejected', { status: "rejected", jobId, seekerId, providerId });
      if (response.status === 200) {
        onClose();
        window.location.reload();
      }
    } catch (err) {
      console.error("Error occurred while posting the data:", err);
      setError("Failed to reject. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">{person.name}</h2>
        <p className="mb-2 text-gray-700"><strong>Email:</strong> {person.email}</p>
        <p className="mb-2"><strong>Location:</strong> {person.city}</p>
        <p className="mb-2"><strong>Address:</strong> {person.address}</p>
        <p className="mb-2"><strong>Phone:</strong> {person.phone}</p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button 
          disabled={loading}
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-green-600"
          onClick={onApply}
        >
          {loading ? 'Approving...' : 'Approve'}
        </button>
        <button 
          disabled={loading}
          className="mt-[20px] w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-red-600"
          onClick={onReject}
        >
          {loading ? 'Rejecting...' : 'Reject'}
        </button>
      </div>
    </div>
  );
};

export default JobDetailsCard;
