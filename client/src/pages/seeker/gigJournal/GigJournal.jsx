import React from 'react';
import Header from './GigJournalHeader';
import GigHistorySection from './GigHistorySection';

function GigJournalPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Header />
      <main className="flex flex-col px-12 mt-[250px] w-full leading-tight text-center text-black max-md:px-5 max-md:max-w-full">
        <h2 className="self-start px-14 py-7 text-3xl bg-white border border-teal-600 border-solid rounded-[50px] max-md:px-5">
          Your gig history
        </h2>
        <GigHistorySection />
      </main>
    </div>
  );
}

export default GigJournalPage;