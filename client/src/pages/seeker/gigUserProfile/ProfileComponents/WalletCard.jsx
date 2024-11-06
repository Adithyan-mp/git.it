import React from 'react';

function WalletCard({ balance }) {
  return (
    <div className="grow px-6 py-11 w-full bg-white rounded-2xl border border-teal-600 border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
          <div className="text-4xl leading-tight text-center text-black max-md:mt-10">Your wallet :</div>
        </div>
        <div className="flex flex-col ml-5 w-[100%] max-md:ml-0 max-md:w-full">
          <div className="text-4xl font-semibold leading-tight text-black max-md:mt-10">{balance}</div>
        </div>
      </div>
    </div>
  );
}

export default WalletCard;