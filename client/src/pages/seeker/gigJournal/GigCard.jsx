import React from 'react';

function GigCard({ title, location, address, amount, rating, date, img, status }) {
  return (
    <article className="flex flex-col w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full mb-24 last:mb-0">
      <div className="flex flex-wrap gap-5 justify-between items-start px-9 pt-6 pb-9 w-full bg-white rounded-[30px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-9 mt-3.5">
          {/* Placeholder image for the gig */}
          <img
            className="flex shrink-0 rounded-full border border-black border-solid bg-zinc-300 h-[67px] w-[82px]"
            aria-hidden="true"
            alt="Profile Placeholder"
            src={img}
          />
          <div className="flex flex-col my-auto">
            <h3 className="text-3xl">{title}</h3>
            <p className="self-start mt-3.5 text-2xl">{location}</p>
          </div>
        </div>
        <div className="flex gap-10 items-start text-2xl max-md:max-w-full">
          {/* Address Section */}
          <div className="flex flex-col self-start mt-3.5 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/796c0b73b8a806b090338d7eb1ff4a1a4490b34c8ea7c43d067b4105e2723af4?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab"
              className="object-contain self-center aspect-[1.09] w-[35px]"
              alt="Location Icon"
            />
            <p className="mt-2">{address}</p>
          </div>
          {/* Amount Section */}
          <div className="flex flex-col my-auto font-semibold whitespace-nowrap">
            <img
              loading="lazy"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Indian_Rupee_symbol.svg/135px-Indian_Rupee_symbol.svg.png"
              className="object-contain self-center aspect-[0.65] w-[20px] mt-[10px]"
              alt="Amount Icon"
            />
            <p className="mt-2.5">{amount}</p>
          </div>
          {/* Status Section */}
          <div className="flex flex-col my-auto font-semibold whitespace-nowrap">
            <p className="self-start mt-4">Status <p className={status === 'done' ? 'text-green-600' : status === 'rejected' ? 'text-red-600' : 'text-yellow-600'}>{status}</p></p>
          </div>
          {/* Date Section */}
          <div className="flex flex-col self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8299064db591200bd3dbf941ae2ad7c0f09c50f2b0f6848f5979a42b8adc9522?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab"
              className="object-contain self-center aspect-[1.19] w-[50px]"
              alt="Date Icon"
            />
            <time className="mt-2">{date}</time>
          </div>
        </div>
      </div>
    </article>
  );
}

export default GigCard;
