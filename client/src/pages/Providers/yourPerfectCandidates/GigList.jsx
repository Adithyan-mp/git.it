import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

import GigItem from './GigItem';
import Header from './Header';

function GigList() {
  const { id: userId } = useParams();
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const response = await axios.get('/api/perfectedcandidates', { params: { userId } });
        setGigs(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch gigs');
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchGigs();
    }
  }, [userId]);

  return (
    <section className="flex overflow-hidden flex-col items-center pb-11 bg-white">
      {/* Header positioned at the top */}
      <div className="w-full fixed top-0 left-0 z-10">
        <Header />
      </div>

      {/* Main content area with padding to account for fixed header */}
      <main className="pt-[200px] max-md:pt-[120px] w-full">
        {loading && <p>Loading gigs...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && gigs.map((gig, index) => (
          <GigItem key={index} {...gig} userId={userId} />
        ))}
      </main>
    </section>
  );
}

export default GigList;
