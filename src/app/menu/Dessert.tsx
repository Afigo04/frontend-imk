import React from "react";
import Image from "next/image";

const Dessert = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-4">
                
                <div className='rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300'>
                    
                    <Image src={"/dummy-menu/roti-bakar.jpg"} width={200} height={200} alt='bakso' className='w-full rounded-t-xl' />

                    <div className='text-black'>
                        <div className='p-4'> 
                            <p className=' font-bold text-xl'>Roti Bakar</p>
                            <p className='mt-2'>Lembaran roti lembut yang dipanggang hingga renyah keemasan, siap disantap dengan berbagai olesan manis atau gurih sesuai selera, menciptakan sarapan atau camilan yang praktis dan memuaskan.</p>
                            <p className='font-bold text-amber-600 mt-2'>Rp 15.000</p>
                        </div>
                    </div>
                </div>

                
                <div className='rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300'>

                    <Image src={"/dummy-menu/piscok.jpg"} width={200} height={200} alt='bakso' className='w-full rounded-t-xl' />

                    <div className='text-black'>
                        <div className='p-4'> 
                            <p className=' font-bold text-xl'>Pisang Coklat</p>
                            <p className='mt-2'>Pisang goreng hangat (isi 4) dengan isian coklat dan topping susu kental manis coklat.</p>
                            <p className='font-bold text-amber-600 mt-2'>Rp 12.000</p>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className='rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300'>

                    <Image src={"/dummy-menu/puding.webp"} width={200} height={200} alt='bakso' className='w-full rounded-t-xl' />

                    <div className='text-black'>
                        <div className='p-4'> 
                            <p className=' font-bold text-xl'>Puding Coklat Fla Vanilla</p>
                            <p className='mt-2'>Puding coklat lembut disajikan dengan saus vanila yang creamy.</p>
                            <p className='font-bold text-amber-600 mt-2'>Rp 25.000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Dessert;