import React from 'react';

function StatCard({ label, value }) {
  return (
    <div className="flex gap-10 items-start self-stretch px-7 pt-3 pb-7 my-auto w-full leading-tight text-black bg-white rounded-2xl border border-teal-600 border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10">
      <div className="mt-2.5 text-3xl text-right basis-auto">{label}</div>
      <div className="text-5xl font-bold text-center max-md:text-4xl">{value}</div>
    </div>
  );
}

export default StatCard;