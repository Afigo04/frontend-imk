"use client";

import React from 'react';
import { useState } from 'react';
import Headers from '../(components)/Headers';
import Makanan from './Makanan';
import Minuman from './Minuman';
import Dessert from './Dessert';
import Snacks from './Snacks';
import Footer from '../(components)/Footer';

type ContentId = 'makanan' | 'minuman' | 'dessert' | 'snacks';

const MenuPage = () => {

    const [activeContentId, setActiveContentId] = useState<ContentId>('makanan');

    const handleToggleVisibility = (id: ContentId) => {
        // setActiveContentId((prev) => prev === 'makanan' ? 'minuman' : 'makanan');
        setActiveContentId(id);
    }
    return (
        <div className='bg-white'>
            {/* headers */}
            <Headers />
            {/* headers end */}

            {/* main content */}

            <div className='w-11/12 mx-auto pt-30 text-black space-y-2'>
                <p className='text-3xl font-bold text-center'>Katalog Menu Kami</p>
                <p className='text-center'>Pilih hidangan favorit Anda dari daftar menu terbaik kami.</p>

                {/* navigation */}
                <div className='flex justify-center mt-6 text-slate-500  text-lg font-medium border-b border-slate-200'>
                    <button onClick={() => handleToggleVisibility('makanan')} className={`
                        py-3 px-6 hover:text-amber-500 transition cursor-pointer ${
                            activeContentId === 'makanan' ? 'border-b-2 border-amber-500' : ''
                        }
                        `}>Makanan</button>

                    <button onClick={() => handleToggleVisibility('minuman')} className={`
                        py-3 px-6 hover:text-amber-500 transition cursor-pointer ${
                            activeContentId === 'minuman' ? 'border-b-2 border-amber-500' : ''
                        }
                        `}>Minuman</button>

                    <button onClick={() => handleToggleVisibility('dessert')} className={`
                        py-3 px-6 hover:text-amber-500 transition cursor-pointer ${
                            activeContentId === 'dessert' ? 'border-b-2 border-amber-500' : ''
                        }
                        `}>Hidangan Penutup</button>
                    
                    <button onClick={() => handleToggleVisibility('snacks')} className={`
                        py-3 px-6 hover:text-amber-500 transition cursor-pointer ${
                            activeContentId === 'snacks' ? 'border-b-2 border-amber-500' : ''
                        }
                        `}>Camilan</button>
                </div>
                {/* navigation end */}
                
                {/* menu items */}
                <div className='py-10'>
                    {activeContentId === 'makanan' && <Makanan />}

                    {activeContentId === 'minuman' && <Minuman />} {}

                    {activeContentId === 'dessert' && <Dessert />}

                    {activeContentId === 'snacks' && <Snacks />}
                </div>

            </div>

            {/* main content end */}

            {/* Footer */}
            <Footer />
            {/* Footer end */}
        </div>
    ) 
}

export default MenuPage;