import React, { useState } from 'react';
import Header from './Header.jsx'; 
import TopCategories from './TopCategories.jsx'; 
import GigList from './GigList.jsx'; 

const GigPool = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const resetSelectedCategory = () => {
    setSelectedCategory('');
  };

  return (
    <div className="flex flex-col h-screen">
      <Header onSearch={handleSearch} />
      <div className="flex flex-row h-full">
        <aside className="fixed top-0 left-0 w-[250px] h-full bg-white z-10 mt-[250px] max-md:hidden">
          <TopCategories setSelectedCategory={setSelectedCategory} />
        </aside>
        <main className="flex-1 ml-[250px] mt-[200px] max-w-[1382px] max-md:ml-0">
          <div className="mt-[80px] flex flex-col gap-5">
            <GigList selectedCategory={selectedCategory} searchTerm={searchTerm} setSearchTerm={setSearchTerm} resetSelectedCategory={resetSelectedCategory} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default GigPool;
