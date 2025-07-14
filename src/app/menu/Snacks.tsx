import React from "react";
import Image from "next/image";

function Snacks() {
    return (
        <div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-4">
                
                <div className='rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300'>
                    
                    <Image src={"/dummy-menu/udang-keju.jpg"} width={200} height={200} alt='bakso' className='w-full rounded-t-xl' />

                    <div className='text-black'>
                        <div className='p-4'> 
                            <p className=' font-bold text-xl'>Udang Keju</p>
                            <p className='mt-2'>Udang segar yang dibalut adonan renyah dan gurih, kemudian digoreng hingga keemasan dengan lelehan keju di dalamnya yang memberikan cita rasa creamy dan nikmat.</p>
                            <p className='font-bold text-amber-600 mt-2'>Rp 15.000</p>
                        </div>
                    </div>
                </div>

                
                <div className='rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300'>

                    <Image src={"/dummy-menu/onion-ring.webp"} width={200} height={200} alt='bakso' className='w-full rounded-t-xl' />
                    
                    <div className='text-black'>
                        <div className='p-4'> 
                            <p className=' font-bold text-xl'>OnionRing</p>
                            <p className='mt-2'>Pisang goreng hangat (isi 4) dengan isian coklat dan topping susu kental manis coklat.</p>
                            <p className='font-bold text-amber-600 mt-2'>Rp 12.000</p>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className='rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300'>

                    <Image src={"/dummy-menu/image.png"} width={200} height={200} alt='bakso' className='w-full rounded-t-xl' />
                    
                    <div className='text-black'>
                        <div className='p-4'> 
                            <p className=' font-bold text-xl'>Cireng</p>
                            <p className='mt-2'>Camilan gurih khas Sunda yang terbuat dari aci, dengan tekstur unik renyah di luar namun kenyal dan lembut di dalam, paling nikmat disantap hangat bersama cocolan saus rujak yang pedas manis.</p>
                            <p className='font-bold text-amber-600 mt-2'>Rp 25.000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Snacks;
