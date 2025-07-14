"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Headers = () => {
    const handler = () => alert("Pesan Sekarang");

    const pathName = usePathname();

    return (
        <nav className="bg-white fixed shadow-md right-0 left-0 top-0 z-50">
            <div className='flex items-center justify-between w-11/12 mx-auto py-4'>
                <p className='font-bold text-xl text-amber-500'><Link href={"/"}>Kuliner Kita</Link></p>

                {/* navbar menu */}
                <ul className='flex gap-6 ml-4 text-slate-500 font-medium'>
                    <li className={`
                        hover:text-amber-500 transition
                        ${
                            pathName === '/' ? 'text-amber-500' : ''}
                            `}><Link href={"/"}>Beranda</Link></li>

                    <li className={`
                        hover:text-amber-500 transition
                        ${
                            pathName === '/menu' ? 'text-amber-500' : ''}
                            `}><Link href={"menu"}>Menu</Link></li>

                    <li className={`
                        hover:text-amber-500 transition
                        ${
                            pathName === '/galeri' ? 'text-amber-500' : ''}
                            `}><Link href={"galeri"}>Galeri</Link></li>
                </ul>

                {/* navbar menu end */}

                {/* button pesan sekarang */}

                <button onClick={handler} className=' bg-amber-500 px-4 py-2 rounded-full cursor-pointer text-white hover:bg-amber-600 transition'>Pesan Sekarang</button>
            </div>
        </nav>
    )
}

export default Headers;