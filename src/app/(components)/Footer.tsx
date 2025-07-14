import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone } from "react-feather";

const Footer = () => {
    return (
        <footer className="bg-slate-900 py-10">
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* title */}
                <div className="space-y-2">
                    <p className="text-xl text-amber-500 font-bold">Kuliner Kita</p>
                    <p className="text-slate-400">Menyajikan hidangan terbaik dengan pelayanan sepenuh hati sejak 1963.</p>
                </div>
                {/* title end */}

                {/* navigation */}
                <div className="">
                    <p className="text-white text-xl font-bold">Navigasi</p>
                    <ul className="text-slate-400 space-y-2 mt-2">
                        <li>
                            <Link href={"menu"} className="hover:text-amber-600 transition">Menu</Link>
                        </li>
                        <li>
                            <Link href={"galeri"} className="hover:text-amber-600 transition">Galeri</Link>
                        </li>
                    </ul>
                </div>
                {/* navigation end */}

                {/* social media */}
                <div>
                    <p className="text-white text-xl font-bold mb-4">Ikuti Kami</p>
                    <div className="flex gap-4 mt-2">
                        <Link href={"https://www.facebook.com"} target="_blank">
                            <Instagram size={28} className="text-slate-400 hover:text-amber-600 transition" />
                        </Link>
                        <Link href={"https://www.instagram.com"} target="_blank">
                            <Facebook size={28} className="text-slate-400 hover:text-amber-600 transition" />
                        </Link>
                        <Link href={"https://www.twitter.com"} target="_blank">
                            <Twitter size={28} className="text-slate-400 hover:text-amber-600 " />
                        </Link>
                    </div>
                    {/* social media end */}

                </div>
                {/* sosial media end */}
                {/* contact */}
                <div>
                    <p className="text-white text-xl font-bold mb-4">Kontak Kami</p>
                    <div className="text-slate-400 mt-2 grid grid-cols-1 gap-6">
                        <div>
                            <Mail size={28} className="inline mr-2" />
                            <span className="border border-slate-400 p-1 rounded-md">info@kulinerkita.com</span>
                        </div>
                        <div>
                            <Phone size={28} className="inline mr-2" />
                            <span className="border border-slate-400 p-1 rounded-md">082123456789</span>
                        </div>
                    </div>
                </div>
                {/* contact end */}

                
            </div>

            <div className="w-11/12 mx-auto border-t border-slate-700 mt-8 pt-6 text-center text-slate-500 text-sm">
                <p>&copy; 1963 Kuliner Kita. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;