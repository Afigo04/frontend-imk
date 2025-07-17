"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomeMenuCard = () => {
    return (
        <section className='bg-gray-100'>

            <div className='w-11/12 mx-auto py-10'>
                <div className="text-black text-center">
                    <p className="text-3xl font-bold">Menu Unggulan Kami</p>
                    <p>Cicipi hidangan yang paling disukai oleh pelanggan kami.</p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-10 md:grid-cols-3 md:gap-4">
                    
                    <div className='rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300'>
                        
                        <Image src={"/dummy-menu/bakso.jpg"} width={200} height={200} alt='bakso' className='w-full rounded-t-xl' />

                        <div className='text-black'>
                            <div className='p-4'> 
                                <p className=' font-bold text-xl'>Bakso Daging Sapi</p>
                                <p className='mt-2'>Bola daging sapi yang kenyal dan gurih berpadu nikmat dalam semangkuk kuah kaldu panas yang kaya rasa, lengkap dengan mie dan taburan bawang goreng renyah.</p>
                                <p className='font-bold text-amber-600 mt-2'>Rp 55.000</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className='rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300'>
                        
                        <Image src={"/dummy-menu/nasgor.jpg"} width={200} height={200} alt='bakso' className='w-full rounded-t-xl' />

                        <div className='text-black'>
                            <div className='p-4'> 
                                <p className=' font-bold text-xl'>Nasi Goreng Seafood</p>
                                <p className='mt-2'>Nasi goreng dengan isian udang segar, cumi, dan sayuran pilihan.</p>
                                <p className='font-bold text-amber-600 mt-2'>Rp 48.000</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300'>

                        <Image src={"/dummy-menu/sate.jpg"} width={200} height={200} alt='bakso' className='w-full rounded-t-xl' />

                        <div className='text-black'>
                            <div className='p-4'> 
                                <p className=' font-bold text-xl'>Sate Ayam Madura</p>
                                <p className='mt-2'>10 tusuk sate ayam dengan bumbu kacang khas Madura yang lezat.</p>
                                <p className='font-bold text-amber-600 mt-2'>Rp 35.000</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* button to menu */}
                <div>
                    <Link href={'menu'} className='flex justify-center my-8'>
                        <button className=' bg-slate-800 font-bold text-lg px-4 py-2 rounded-full hover:bg-slate-700 transition cursor-pointer'>
                            Lihat Menu Lainnya
                        </button>
                    </Link>
                </div>
                {/* button to menu end */}
            </div>
        </section>
        
    );
};

export default HomeMenuCard;