import React from 'react';
import Image from 'next/image';

const HomeGalery = () => {
    return (
        <section className='w-11/12 mx-auto py-10'>
            <div className="text-black text-center">
                <p className="text-3xl font-bold">Galery Restoran</p>
                <p>Lihat momen dan suasana di restoran kami.</p>
            </div>

            {/* gallery content */}
            <div className='grid grid-cols-2 gap-2 mt-10 md:grid-cols-4 md:gap-4'>

                {/* div img 1 */}
                <div className='flex flex-col gap-4'>
                    <Image src={"/dummy-vibe/suasana-1.jpg"} alt='' width={200} height={200} className='rounded-2xl w-full transition-transform duration-300 hover:scale-95' />

                    <Image src={"/dummy-menu/bakso.jpg"} alt='' width={200} height={200} className='rounded-2xl w-full transition-transform duration-300 hover:scale-95'/>

                    <Image src={"/dummy-menu/cireng.jpg"} alt='' width={200} height={200} className='rounded-2xl w-full transition-transform duration-300 hover:scale-95'/>

                    <Image src={"/dummy-menu/es-campur.jpg"} alt='' width={200} height={200} className='rounded-2xl w-full transition-transform duration-300 hover:scale-95' />
                </div>
                {/* div img 1 end */}

                {/* div img 2 */}
                <div className='flex flex-col gap-4'>
                    <Image src={"/dummy-menu/jamu.jpg"} alt='' width={200} height={200} className='rounded-2xl w-full transition-transform duration-300 hover:scale-95' />

                    <Image src={"/dummy-vibe/suasana-5.jpeg"} alt='' width={200} height={200} className='rounded-2xl w-full transition-transform duration-300 hover:scale-95'/>

                    <Image src={"/dummy-menu/es-jeruk.jpg"} alt='' width={200} height={200} className='rounded-2xl w-full transition-transform duration-300 hover:scale-95'/>

                    <Image src={"/dummy-menu/jus.jpg"} alt='' width={200} height={200} className='rounded-2xl w-full transition-transform duration-300 hover:scale-95' />
                </div>
                {/* div img 2 end */}

                {/* div img 3 */}
                <div className='hidden md:flex md:flex-col md:gap-4'>
                    <Image src={"/dummy-menu/image.png"} alt='' width={200} height={200} className='rounded-2xl w-full transition-transform duration-300 hover:scale-95' />

                    <Image src={"/dummy-menu/es-kopi.jpg"} alt='' width={200} height={200} className='rounded-2xl w-full transition-transform duration-300 hover:scale-95'/>

                    <Image src={"/dummy-menu/es-teh.jpg"} alt='' width={200} height={200} className='rounded-2xl w-full transition-transform duration-300 hover:scale-95'/>

                    <Image src={"/dummy-vibe/suasana-4.jpg"} alt='' width={200} height={200} className='rounded-2xl w-full transition-transform duration-300 hover:scale-95' />
                </div>
                {/* div img 3 end */}

                {/* div img 4 */}
                <div className='hidden md:flex md:flex-col md:gap-4'>
                    <Image src={"/dummy-menu/nasgor.jpg"} alt='' width={200} height={200} className='rounded-2xl w-full transition-transform duration-300 hover:scale-95' />

                    <Image src={"/dummy-menu/onion-ring.webp"} alt='' width={200} height={200} className='rounded-2xl w-full transition-transform duration-300 hover:scale-95'/>

                    <Image src={"/dummy-vibe/suasana-3.jpg"} alt='' width={200} height={200} className='rounded-2xl w-full transition-transform duration-300 hover:scale-95'/>

                    <Image src={"/dummy-menu/brownies.webp"} alt='' width={200} height={200} className='rounded-2xl w-full transition-transform duration-300 hover:scale-95' />
                </div>
                {/* div img 4 end */}
            </div>
        </section>
    ) 
}

export default HomeGalery;