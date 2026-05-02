"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { MdFormatAlignJustify } from "react-icons/md";

const Navbar = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    const [isActive, setIsActive] = useState(false);

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    return (
        <div className="border-b px-2">
            <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

                <Link href={"/"} className="flex gap-2 items-center">
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

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-7 text-sm">
                    <li>
                        <Navlink href={"/"}>
                            <button className="cursor-pointer border rounded-full px-4 py-2">Home</button>
                        </Navlink>
                    </li>
                    <li>
                        <Navlink href={"/all-courses"}>
                            <button className="cursor-pointer border rounded-full px-4 py-2">Courses</button>
                        </Navlink>
                    </li>
                    <li>
                        <Navlink href={"/profile"}>
                            <button className="cursor-pointer border rounded-full px-4 py-2">My Profile</button>
                        </Navlink>
                    </li>
                </ul>

                {/* Right Side */}
                <div className="flex gap-4 items-center">

                    {/* Desktop Auth */}
                    {!user && (
                        <ul className="hidden md:flex items-center gap-4 text-md">
                            <li>
                                <Navlink href={"/signin"}>
                                    <button className="hover:bg-gray-200 cursor-pointer border rounded-full px-4 py-2">SignIn</button>
                                </Navlink>
                            </li>
                            <li>
                                <Navlink href={"/signup"}>
                                    <button className="hover:bg-amber-200 cursor-pointer border rounded-full px-4 py-2">SignUp</button>
                                </Navlink>
                            </li>
                        </ul>
                    )}

                    {user && (
                        <div className="hidden md:flex gap-3 items-center">
                            <span>Welcome! {user?.name}</span>
                            <Avatar>
                                <Avatar.Image
                                    alt="user"
                                    src={user?.image}
                                    referrerPolicy="no-referrer"
                                />
                                <Avatar.Fallback>
                                    {user?.name?.charAt(0)}
                                </Avatar.Fallback>
                            </Avatar>
                            <button
                                onClick={handleSignOut}
                                className="bg-red-500 px-4 py-2 rounded-full text-white cursor-pointer"
                            >
                                LogOut
                            </button>
                        </div>
                    )}

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsActive(!isActive)}
                        className="md:hidden border px-3 py-1 rounded"
                    >
                        {/* ☰ */}
                        <MdFormatAlignJustify />

                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isActive && (
                <div className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm">

                    <Navlink href={"/"}>
                        <button className="border rounded-full px-4 py-2 w-full text-left">
                            Home
                        </button>
                    </Navlink>

                    <Navlink href={"/all-courses"}>
                        <button className="border rounded-full px-4 py-2 w-full text-left">
                            Courses
                        </button>
                    </Navlink>

                    <Navlink href={"/profile"}>
                        <button className="border rounded-full px-4 py-2 w-full text-left">
                            My Profile
                        </button>
                    </Navlink>

                    {!user && (
                        <>
                            <Navlink href={"/signin"}>
                                <button className="border rounded-full px-4 py-2 w-full text-left">
                                    SignIn
                                </button>
                            </Navlink>

                            <Navlink href={"/signup"}>
                                <button className="border rounded-full px-4 py-2 w-full text-left">
                                    SignUp
                                </button>
                            </Navlink>
                        </>
                    )}

                    {user && (
                        <button
                            onClick={handleSignOut}
                            className="bg-red-500 text-white px-4 py-2 rounded-full"
                        >
                            LogOut
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;