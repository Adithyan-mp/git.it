import React from 'react';

function CheckboxField() {
  return (
    <div className="flex gap-10 items-start mt-32 max-w-full w-[480px] max-md:mt-10">
      <input
        type="checkbox"
        id="terms"
        className="flex shrink-0 mt-4 border border-black border-solid bg-zinc-100 h-[39px] w-[41px]"
      />
      <label htmlFor="terms" className="flex-auto w-[388px]">
        By confirming you have been agreed to our terms
      </label>
    </div>
  );
}

export default CheckboxField;