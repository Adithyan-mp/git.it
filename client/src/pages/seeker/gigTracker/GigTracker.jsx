import React, { useEffect, useState } from 'react';
import GigTrackerHeader from './GigTrackerHeader';
import ApplicationStatus from './ApplicationStatus';
import JobCard from './JobCard';
import ApprovedJobCard from './ApprovedJobCard';
import axios from 'axios';

function GigTracker() {
  const userId = localStorage.getItem('userId'); 
  const [pendingJobs, setPendingJobs] = useState([]);
  const [approvedJobs, setApprovedJobs] = useState([]);

  useEffect(() => {
    // Function to fetch pending and approved jobs from the API
    const fetchData = async () => {
      try {
        if (userId) {
          const response = await axios.get(`/api/status`, { params: { userid: userId } });
          
          setApprovedJobs(response.data.approvedJobs || []);
          setPendingJobs(response.data.pendingJobs || []);
          console.log('Fetched Pending Jobs:', response.data.pendingJobs);
          console.log('Fetched Approved Jobs:', response.data.approvedJobs); 
        }
      } catch (error) {
        console.error('Error fetching job data:', error); 
      }
    };
    
    fetchData(); // Fetch data on component mount
  }, []);

  // Function to handle application cancellation
  // const handleApplicationCancelled = (jobId) => {
  //   // Remove the cancelled job from pendingJobs
  //   setPendingJobs((prevJobs) => prevJobs.filter((job) => job.jobId !== jobId));
  // };

  return (
    <div className="flex flex-col items-center bg-white">
      <GigTrackerHeader />
      <main className="w-full max-w-[1279px] mt-[200px]">
        {/* Pending and Approved Jobs Section */}
        <section className="flex justify-between gap-5 mt-9 w-full max-w-[1279px] mx-auto mr-[100px]">
          {/* Pending Jobs */}
          <aside className="w-1/2 bg-white p-4 fixed top-[200px] bottom-0 overflow-auto">
            <div className="flex flex-col gap-4 w-[500px] ">
              <ApplicationStatus
                status="Pending"
                count={pendingJobs.length}
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/26ced1833dca9cc0765ba02e194eb98eca00a60a7a57c806f7829e954b45e7b8?apiKey=b1b7c46b698f4e75aa8360aa33741bab"
              />
              {pendingJobs.map((job) => (
                <JobCard 
                  key={job.id} 
                  {...job} 
                  // onApplicationCancelled={handleApplicationCancelled} // Pass the handler
                />
              ))}
            </div>
          </aside>

          {/* Approved Jobs */}
          <div className="w-1/2 bg-white p-4 fixed top-[200px] bottom-0 right-0 overflow-auto">
            <div className="flex flex-col gap-4 w-[500px] ml-[100px]">
              <ApplicationStatus
                status="Approved"
                count={approvedJobs.length}
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6cc4294013bfc02cebabadb6757b1f61ba87eedd5a510593bbb9635ebab02aa0?apiKey=b1b7c46b698f4e75aa8360aa33741bab"
              />
              {approvedJobs.map((job) => (
                <ApprovedJobCard key={job.id} {...job} userId={userId} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default GigTracker;
