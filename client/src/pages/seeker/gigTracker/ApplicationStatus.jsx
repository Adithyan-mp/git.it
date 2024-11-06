import React from 'react';

function ApplicationStatus({ status, count, iconSrc }) {
  return (
    <div className={`flex gap-5 px-10 pt-3.5 pb-6 bg-white border border-${status === 'Pending' ? 'red-900' : 'green-700'} border-solid rounded-[50px] max-md:px-5`}>
      <div className="flex-auto text-2xl leading-tight text-center text-black">
        {status} applications
      </div>
      <img loading="lazy" src={iconSrc} alt={`${status} applications icon`} className="object-contain shrink-0 self-start aspect-[1.21] w-[41px]" />
    </div>
  );
}

export default ApplicationStatus;