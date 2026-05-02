"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";




const Navbar = () => {

    const userData = authClient.useSession();
    // console.log(userData, "userdata");
    const user = userData.data?.user;
    // console.log(user, "User");
    const [isActive, setIsActive] = useState(false);

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    return (
        <div className="border-b px-2">
            <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
                <Link href={`/`} className="flex gap-2 items-center">
                    <Image
                        src={"/logo.png"}
                        alt="logo"
                        loading="eager"
                        width={30}
                        height={30}
                        className="object-cover h-auto w-auto rounded-full"
                    />
                    <h3 className="font-black text-lg">Coder</h3>
                </Link>

                <ul className="flex items-center gap-7 text-sm">

                    <li>
                        <Navlink href={"/"}> <button className="cursor-pointer border rounded-full px-4 py-2">Home</button> </Navlink>
                    </li>
                    <li>
                        <Navlink href={"/all-courses"}> <button className="cursor-pointer border rounded-full px-4 py-2">Courses</button></Navlink>
                    </li>
                    <li>
                        <Navlink href={"/profile"}><button className="cursor-pointer border rounded-full px-4 py-2">My Profile</button></Navlink>
                    </li>


                </ul>

                <div className="flex gap-4">
                    {!user && <ul className="flex items-center gap-4  text-md">
                        <li>
                            <Navlink href={"/signin"}><button className="hover:bg-gray-200 cursor-pointer border rounded-full px-4 py-2">SignIn</button></Navlink>

                        </li>
                        <li>
                            <Navlink href={"/signup"}> <button className="hover:bg-amber-200 cursor-pointer border rounded-full px-4 py-2">SignUp</button> </Navlink>
                        </li>
                    </ul>}
                    {
                        user && <div className="flex gap-3 items-center">
                            <span>Welcome!{user?.name}</span>
                            <Avatar>
                                <Avatar.Image alt="user.title"
                                    src={user?.image}
                                    referrerPolicy="no-referrer" />
                                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                            </Avatar>
                            <button onClick={handleSignOut} variant="danger" className="bg-red-500 btn px-4 py-2 rounded-full text-white cursor-pointer">LogOut</button>
                        </div>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;