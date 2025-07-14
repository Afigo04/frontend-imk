import React from "react";
import Image from "next/image";

const Makanan = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-4">
                
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

                    <Image src={"/dummy-menu/bakso.jpg"} width={200} height={200} alt='bakso' className='w-full rounded-t-xl' />

                    <div className='text-black'>
                        <div className='p-4'> 
                            <p className=' font-bold text-xl'>Sate Ayam Madura</p>
                            <p className='mt-2'>10 tusuk sate ayam dengan bumbu kacang khas Madura yang lezat.</p>
                            <p className='font-bold text-amber-600 mt-2'>Rp 35.000</p>
                        </div>
                    </div>
                </div>
                
                <div className='rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300'>

                    <Image src={"/dummy-menu/ayam-penyet.jpg"} width={200} height={200} alt='bakso' className='w-full rounded-t-xl' />

                    <div className='text-black'>
                        <div className='p-4'> 
                            <p className=' font-bold text-xl'>Ayam Penyet</p>
                            <p className='mt-2'>Ayam goreng empuk dan gurih yang dipenyet di atas cobek bersama sambal dadak super pedas, disajikan dengan lalapan segar yang renyah.</p>
                            <p className='font-bold text-amber-600 mt-2'>Rp 55.000</p>
                        </div>
                    </div>
                </div>
                
                <div className='rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300'>

                    <Image src={"/dummy-menu/mi-ayam.jpg"} width={200} height={200} alt='bakso' className='w-full rounded-t-xl' />

                    <div className='text-black'>
                        <div className='p-4'> 
                            <p className=' font-bold text-xl'>Mie Ayam</p>
                            <p className='mt-2'>Untaian mi kenyal yang diaduk dengan minyak bawang gurih, disajikan dengan topping ayam kecap manis yang lembut dan sawi hijau renyah dalam satu mangkuk yang menggugah selera.</p>
                            <p className='font-bold text-amber-600 mt-2'>Rp 17.000</p>
                        </div>
                    </div>
                </div>
                
                <div className='rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300'>

                    <Image src={"/dummy-menu/rawon.webp"} width={200} height={200} alt='bakso' className='w-full rounded-t-xl' />

                    <div className='text-black'>
                        <div className='p-4'> 
                            <p className=' font-bold text-xl'>Rawon Daging Sapi</p>
                            <p className='mt-2'>Sup legendaris Jawa Timur dengan kuah hitam pekat dari bumbu kluwek yang medok. Berisi potongan daging sapi empuk yang dimasak lama hingga bumbunya meresap sempurna. Disajikan dengan tauge pendek, sambal, dan kerupuk udang.</p>
                            <p className='font-bold text-amber-600 mt-2'>Rp 28.000</p>
                        </div>
                    </div>
                </div>
                
                <div className='rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300'>

                    <Image src={"/dummy-menu/sup-iga.jpg"} width={200} height={200} alt='bakso' className='w-full rounded-t-xl' />

                    <div className='text-black'>
                        <div className='p-4'> 
                            <p className=' font-bold text-xl'>Sup Iga Sapi</p>
                            <p className='mt-2'>Potongan iga sapi empuk yang lepas dari tulang berpadu dalam kuah kaldu bening yang kaya akan rempah seperti pala dan cengkeh, disajikan panas dengan taburan daun bawang dan bawang goreng.</p>
                            <p className='font-bold text-amber-600 mt-2'>Rp 55.000</p>
                        </div>
                    </div>
                </div>

                
                <div className='rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300'>

                    <Image src={"/dummy-menu/burger.jpg"} width={200} height={200} alt='bakso' className='w-full rounded-t-xl' />
                    
                    <div className='text-black'>
                        <div className='p-4'> 
                            <p className=' font-bold text-xl'>Burger Sapi</p>
                            <p className='mt-2'>Patty daging tebal dan juicy yang dipanggang sempurna, berpadu dengan keju lumer, sayuran segar, dan saus spesial dalam tangkupan roti bun yang lembut dan empuk.</p>
                            <p className='font-bold text-amber-600 mt-2'>Rp 55.000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Makanan;