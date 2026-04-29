"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navlink from "./Navlink";




const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="border-b px-2">
            <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-2 items-center">
                    <Image
                        src={"/logo.png"}
                        alt="logo"
                        loading="eager"
                        width={30}
                        height={30}
                        className="object-cover h-auto w-auto rounded-full"
                    />
                    <h3 className="font-black text-lg">Coder</h3>
                </div>

                <ul className="flex items-center gap-7 text-sm">

                    <li>
                        <Navlink href={"/"}> <button className="cursor-pointer border rounded-full px-4 py-2">Home</button> </Navlink>
                    </li>
                    <li>
                        <Navlink href={"/all-courses"}> <button className="cursor-pointer border rounded-full px-4 py-2">Courses</button></Navlink>
                    </li>
                    <li>
                        <Navlink href={"/profile"}><button className="cursor-pointer border rounded-full px-4 py-2">Profile</button></Navlink>
                    </li>


                </ul>

                <div className="flex gap-4">
                    <ul className="flex items-center gap-4  text-md">
                        <li>
                            <Link href={"/signin"}><button className="hover:bg-gray-200 bg-black text-white cursor-pointer border rounded-full px-4 py-2">SignIn</button></Link>

                        </li>
                        <li>
                            <Link href={"/signup"}> <button className="hover:bg-amber-200 cursor-pointer border rounded-full px-4 py-2">SignUp</button> </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;