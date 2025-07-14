"use client";
import React from "react";
import Image from "next/image";

const Reservation = () => {
    return (
        <section className="bg-gray-100 py-10">
            <div className="text-black text-center my-12">
                <p className="text-3xl font-bold">Hubungi Kami & Reservasi</p>
                <p>Kami siap menyambut Anda. Reservasi meja Anda sekarang!</p>
            </div>

            {/* reservation section */}
            <div className="bg-white w-11/12 text-black p-12 md:max-w-3/5 shadow-xl rounded-xl mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col gap-4">
                        <p className=" text-2xl font-bold">Informasi Kontak</p>
                        <div className="flex items-center gap-2">
                            <Image src={"map-pin.svg"} alt="" height={20} width={20}/>
                            <p>Jl Surya Kencana No. 13, Kali Tengah, Indonesia</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Image src={"phone.svg"} alt="" height={20} width={20} />
                            <p>082123456789</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Image src={"mail.svg"} alt="" height={20} width={20} />
                            <p>info@kulinerkita.com</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Image src={"clock.svg"} alt="" height={20} width={20} />
                            <div>
                                <p>Buka Setiap Hari:</p>
                                <p>10:00 - 22.00</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-2xl font-bold">Buat Reservasi</p>

                        <form action="" className="flex flex-col gap-4 my-4">
                            <div>
                                <label htmlFor="name">
                                    <p>Nama</p>
                                    <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"/>
                                </label>
                            </div>

                            <div>
                                <label htmlFor="phone">
                                    <p>Nomor Telepon</p>
                                    <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"/>
                                </label>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <label htmlFor="date">
                                        <p>Tanggal Reservasi</p>
                                        <input type="date" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"/>
                                    </label>
                                </div>
                                
                                <div className="">
                                    <label htmlFor="people">
                                        <p>Jumlah Orang</p>
                                        <input type="number" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"/>
                                    </label>
                                </div>
                            </div>

                            <input type="button" value={"Kirim Reservasi"} className="bg-amber-500 w-full py-3 rounded-md text-white font-semibold"/>
                        </form>
                    </div>
                </div>
            </div> 
            {/* reservation section end */}
        </section>
    )
}

export default Reservation;