"use client";

import React from 'react';
import Headers from '../(components)/Headers';
import Footer from '../(components)/Footer';
import { useState } from 'react';
import AllImage from './AllImage';
import Menu from './Menu';
import Vibe from './Vibe';

type ContentId = 'semua' | 'makanan' | 'suasana';

const Galeri = () => {
    const [activeContentId, setActiveContentId] = useState<ContentId>('semua');

    const handleToggleVisibility = (id: ContentId) => {
        setActiveContentId(id);
    }
    return (
        <section className='bg-white min-h-screen'>
            {/* headers */}
            <Headers />
            {/* headers end */}

            {/* main content */}
            <div className='w-11/12 mx-auto pt-30 text-black space-y-2'>
                <div className='text-center my-6'>
                    <p className='text-3xl font-bold'>Galeri Restoran Kami</p>
                    <p>Lihat momen, hidangan, dan suasana hangat di restoran kami.</p>
                </div>

                {/* filter button */}
                <div className='flex justify-center gap-2 font-medium'>
                    <button onClick={() => handleToggleVisibility('semua')} className={`
                        px-5 py-2 rounded-full ${
                            activeContentId === 'semua' ? 'bg-amber-500 text-white' : 'hover:bg-amber-100 transition'
                        }
                        `}>Semua</button>

                    <button onClick={() => handleToggleVisibility('makanan')} className={`
                        px-5 py-2 rounded-full ${
                            activeContentId === 'makanan' ? 'bg-amber-500 text-white' : 'hover:bg-amber-100 transition'
                        }
                        `}>Menu</button>

                    <button onClick={() => handleToggleVisibility('suasana')} className={`
                        px-5 py-2 rounded-full ${
                            activeContentId === 'suasana' ? 'bg-amber-500 text-white' : 'hover:bg-amber-100 transition'
                        }
                        `}>Suasana</button>
                </div>
                {/* filter button end */}

                {/* galeri images */}
                <div className='mb-12'>
                    {activeContentId === 'semua' && <AllImage />}
                    {activeContentId === 'makanan' && <Menu />}
                    {activeContentId === 'suasana' && <Vibe />}
                </div>
                {/* galeri images end */}
            </div>
            {/* main content end */}

            {/* footer */}
            <Footer />
            {/* footer end */}
        </section>
    ) 
}

export default Galeri;