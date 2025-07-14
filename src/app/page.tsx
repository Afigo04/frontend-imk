import Headers from "./(components)/Headers";
import HomeMenuCard from "./(components)/HomeMenuCard";
import HomeGalery from "./(components)/HomeGalery";
import Reservation from "./(components)/Reservation";
import Footer from "./(components)/Footer";
import React from "react";
import Image from "next/image";

const Page = () => {
    return (
        <div>
            <Headers />

            {/* home content */}
            <div className="bg-white">

              <div className="relative">
                {/* hero section */}
                {/* Container dibuat 'relative' sebagai acuan untuk elemen 'absolute' di dalamnya */}
                <div className="relative w-full h-[60vh] md:h-[80vh]">
                  {/* Gambar Hero */}
                  <Image 
                    src={"/dummy-vibe/hero-image.jpeg"} 
                    alt="Suasana nyaman di restoran Kuliner Kita" 
                    layout="fill" 
                    objectFit="cover" 
                    className="brightness-75" // Sedikit meredupkan gambar agar teks terbaca
                  />

                  {/* Lapisan Teks Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                    <h1 
                      className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
                      style={{ textShadow: '3px 3px 10px rgba(0, 0, 0, 0.6)' }} // Bayangan teks untuk kontras
                    >
                      Kuliner Kita
                    </h1>
                    <p 
                      className="text-white text-lg sm:text-xl md:text-2xl mt-4 max-w-2xl"
                      style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}
                    >
                      Cita Rasa Autentik, Kenangan Tak Terlupakan
                    </p>
                  </div>
                </div>
                {/* hero section end */}
              </div>

              {/* main content */}
              <div>
                {/* menu card */}
                <HomeMenuCard />
                {/* menu card end */}
              </div>

              {/* gallery section */}
              <div>
                <HomeGalery />
              </div>
              {/* gallery section end */}

              {/* reservation section */}
              <div>
                <Reservation /> 
              </div>
              {/* reservation section end */}

              {/* main content end */}

              {/* footer */}
              <div>
                <Footer />
              </div>
            </div>

        </div>
    );
};

export default Page;