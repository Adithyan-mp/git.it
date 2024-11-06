import React from 'react';

function ProfileCard({ name, phone, imageUrl }) {
  return (
    <section className="flex flex-col items-center px-20 pt-14 pb-20 w-full leading-tight text-center text-white bg-black border border-teal-600 border-solid rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img loading="lazy" src={imageUrl} alt={`Profile picture of ${name}`} className="object-contain max-w-full rounded-3xl aspect-square w-[108px]" />
      <h2 className="mt-8 text-3xl font-medium">{name}</h2>
      <p className="mt-8 text-3xl">{phone}</p>
    </section>
  );
}

export default ProfileCard;