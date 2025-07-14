"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// 1. Definisikan data untuk gambar SUASANA
const imageColumns = [
  [
    { src: "/dummy-vibe/suasana-2.jpg", alt: "Suasana Restoran" },
    { src: "/dummy-vibe/suasana-3.jpg", alt: "Sudut Favorit" },
  ],
  [
    { src: "/dummy-vibe/suasana-4.jpg", alt: "Interior Restoran" },
    { src: "/dummy-vibe/suasana-5.jpeg", alt: "Tampak Depan" },
  ],
];

const Vibe = () => {
  // 2. State dan useEffect untuk memicu animasi
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  let imageCounter = 0;

  return (
    <section>
      <div className='grid grid-cols-2 gap-4 mt-10 md:grid-cols-2 md:gap-4'>
        {imageColumns.map((column, columnIndex) => (
          <div key={columnIndex} className='flex flex-col gap-4'>
            {column.map((image) => {
              const delay = imageCounter * 100;
              imageCounter++;
              return (
                <div
                  key={image.src}
                  className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={500}
                    // 3. Tambahkan class hover di sini
                    className="w-full h-auto object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-95"
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vibe;