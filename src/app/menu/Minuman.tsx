import React from "react";
import Image from "next/image";

const Minuman = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap- md:grid-cols-3 md:gap-4">
                
                <div className='rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300'>

                    <Image src={"/dummy-menu/es-campur.jpg"} width={200} height={200} alt='bakso' className='w-full rounded-t-xl' />

                    <div className='text-black'>
                        <div className='p-4'> 
                            <p className=' font-bold text-xl'>Es Campur</p>
                            <p className='mt-2'>Gunungan es serut lembut dengan isian aneka buah, jeli, dan cincau yang menyegarkan, disiram dengan sirup manis dan susu kental untuk menciptakan ledakan rasa di setiap suapan.</p>
                            <p className='font-bold text-amber-600 mt-2'>Rp 5.000</p>
                        </div>
                    </div>
                </div>

                <div className='rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300'>

                    <Image src={"/dummy-menu/es-teh.jpg"} width={200} height={200} alt='bakso' className='w-full rounded-t-xl' />

                    <div className='text-black'>
                        <div className='p-4'> 
                            <p className=' font-bold text-xl'>Es Teh Manis/Tawar</p>
                            <p className='mt-2'>Pelepas dahaga paling pas dan pendamping setia setiap masakan. Dibuat dari seduhan teh berkualitas dengan pilihan manis atau tawar sesuai selera Anda.</p>
                            <p className='font-bold text-amber-600 mt-2'>Rp 5.000</p>
                        </div>
                    </div>
                </div>

                
                <div className='rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300'>

                    <Image src={"/dummy-menu/jamu.jpg"} width={200} height={200} alt='bakso' className='w-full rounded-t-xl' />

                    <div className='text-black'>
                        <div className='p-4'> 
                            <p className=' font-bold text-xl'>Jamu</p>
                            <p className='mt-2'>Minuman herbal warisan leluhur yang diracik dari aneka rempah alami seperti kunyit dan kencur untuk menjaga kesehatan, menyegarkan badan, dan memelihara vitalitas tubuh secara turun-temurun.</p>
                            <p className='font-bold text-amber-600 mt-2'>Rp 55.000</p>
                        </div>
                    </div>
                </div>

                
                <div className='rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300'>

                    <Image src={"/dummy-menu/wedang-jahe.jpg"} width={200} height={200} alt='bakso' className='w-full rounded-t-xl' />

                    <div className='text-black'>
                        <div className='p-4'> 
                            <p className=' font-bold text-xl'>Wedang-Jahe</p>
                            <p className='mt-2'>Minuman tradisional panas dari jahe bakar yang digeprek, berpadu dengan manisnya gula aren dan aroma rempah untuk memberi sensasi hangat yang seketika meredakan tenggorokan dan mengusir hawa dingin.</p>
                            <p className='font-bold text-amber-600 mt-2'>Rp 12.000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Minuman;