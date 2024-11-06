import React, { useState, useEffect } from 'react';

function TopProviders() {
  const [visible, setIsVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1200); // Start with image animation first

    const imgTimer = setTimeout(() => {
      setIsImageVisible(true);
    }, 400); // Ensure image animation starts after text

    return () => {
      clearTimeout(textTimer);
      clearTimeout(imgTimer);
    };
  }, []);

  return (
    <section className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
        <div className="ml-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
              <h3
                className={`transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'} self-stretch my-auto text-5xl tracking-tight text-white leading-[52px] max-md:mt-10 max-md:text-4xl max-md:leading-10`}
              >
                Our top gig providers
              </h3>
            </div>
            <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17a270e478aaf375ec167ca7c7100a3b56d8987e642fc9ac740439bc0c080efd?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab"
                alt="Top gig provider showcase"
                className={`transition-transform duration-700 ease-out ${isImageVisible ? 'scale-100 w-[1200px] h-auto rounded-[50px] opacity-100' : 'scale-50 w-[100px] h-auto rounded-full'} max-md:mt-7 opacity-0`}
                style={{
                  transformOrigin: 'center',
                }}
              />
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/839d7b6a91eb82203482c68f8f738affdbe0f59fc67f909bd4e0639232a61259?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab"
          alt="Additional gig provider information"
          className={`transition-transform duration-700 ease-out ${isImageVisible ? 'scale-100 w-[472px] h-auto rounded-[50px] opacity-100' : 'scale-50 w-[100px] h-auto rounded-full'} max-md:mt-7 opacity-0`}
                style={{
                  transformOrigin: 'center',
                }}
        />
      </div>
    </section>
  );
}

export default TopProviders;
