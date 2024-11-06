import React from 'react';

function ActionButton({ text, onClick, isSemiBold = false }) {
  return (
    <button
      onClick={onClick}
      className={`grow px-4 py-2 bg-white rounded-2xl border border-teal-600 border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[200px] max-md:px-5 text-3xl leading-tight text-center text-black ${isSemiBold ? 'font-semibold' : ''}`}
    >
      {text}
    </button>
  );
}

export default ActionButton;