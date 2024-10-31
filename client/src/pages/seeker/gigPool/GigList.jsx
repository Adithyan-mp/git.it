import React, { useState, useEffect } from 'react';
import GigCard from './GigCard';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const GigList = ({ selectedCategory, searchTerm, setSearchTerm, resetSelectedCategory }) => {
  const {id:userId} = useParams();
  const [gigs, setGigs] = useState([]);
  const [filteredGigs, setFilteredGigs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [gigsPerPage] = useState(10); // You can adjust the number of items per page

  // Fetch gigs with pagination
  const fetchGigs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/details', {
        params: { page: currentPage, limit: gigsPerPage ,userId:userId},
      });
      setGigs(response.data.jobs);
      setFilteredGigs(response.data.jobs); 
    } catch (err) {
      setError('Failed to load gigs');
      setFilteredGigs([]);
    } finally {
      setLoading(false);
    }
  };

  // Search logic
  const fetchSearch = async () => {
    if (searchTerm) {
      try {
        const response = await axios.get('/api/search', { 
          params: { searchTerm, page: currentPage, limit: gigsPerPage } 
        });
        setGigs(response.data.jobs);
        setFilteredGigs(response.data.jobs);
        setSearchTerm(''); // Reset searchTerm after fetching results
      } catch (error) {
        setError('Invalid search');
      }
    } else {
      setFilteredGigs(gigs); 
    }
  };

  // Category filter logic
  const fetchCategories = async () => {
    if (selectedCategory) {
      try {
        const response = await axios.get('/api/topCategories', {
          params: { selectedCategory, page: currentPage, limit: gigsPerPage },
        });
        setGigs(response.data.jobs);
        setFilteredGigs(response.data.jobs);
        resetSelectedCategory(); // Reset selected category after fetching results
      } catch (error) {
        setError('No such categories exist.');
      }
    }
  };

  useEffect(() => {
    fetchGigs(); 
  }, [currentPage]);

  useEffect(() => {
    fetchSearch(); 
  }, [searchTerm]);

  useEffect(() => {
    fetchCategories();
  }, [selectedCategory]);

  // Pagination handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <p>Loading gigs...</p>;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center">
        <p>{error}</p>
        <button
          onClick={fetchGigs} // Retry button to fetch gigs again
          className="mt-2 justify-center bg-teal-800 text-white p-2 rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  // Get the total number of pages based on the number of gigs
  const totalPages = Math.ceil(gigs.length / gigsPerPage);

  return (
    <section className="flex flex-col w-full max-md:mt-0">
      <div className="flex flex-wrap gap-4 items-start justify-center leading-tight text-black min-h-[652px] max-md:mt-10">
        {filteredGigs.length > 0 ? (
          filteredGigs.map((gig) => <GigCard key={gig._id} {...gig} />)
        ) : (
          <p>No gigs available...</p>
        )}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-2 px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-teal-800 text-white' : 'bg-gray-300'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default GigList;
