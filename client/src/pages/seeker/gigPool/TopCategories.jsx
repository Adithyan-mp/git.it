import React from 'react';

const TopCategories = ({ setSelectedCategory }) => {
  const categories = ['Daily wage', 'Tutoring', 'Hospitality'];

  return (
    <aside className="flex flex-col w-full md:w-[250px] mt-10 md:mt-0 bg-white">
      <div className="flex flex-col items-center text-center text-black p-4">
        <h2 className="w-full px-4 py-2 text-2xl font-bold border border-teal-600 bg-stone-50 rounded-[30px] mb-6">
          Top Categories
        </h2>
        {categories.map((category, index) => (
          <div key={index} className="w-full max-md:w-48 mt-5">
            <button
              aria-label={`Category: ${category}`}
              className="px-6 py-3 w-full bg-stone-50 rounded-full shadow-md hover:bg-teal-500 hover:text-white transition-colors"
              onClick={() => setSelectedCategory(category)} // Set selected category on click
            >
              {category}
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default TopCategories;
