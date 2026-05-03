"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { MdFormatAlignJustify } from "react-icons/md";
import gsap from "gsap";

const Navbar = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    const [isActive, setIsActive] = useState(false);

    const navRef = useRef(null);
    const menuRef = useRef(null);

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    //  Navbar initial animation
    useEffect(() => {
        gsap.from(navRef.current, {
            y: -80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        });
    }, []);

    // Mobile menu animation
    useEffect(() => {
        if (isActive) {
            gsap.fromTo(
                menuRef.current,
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
            );
        }
    }, [isActive]);

    // Scroll shrink effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                gsap.to(navRef.current, {
                    paddingTop: 6,
                    paddingBottom: 6,
                    duration: 0.3,
                });
            } else {
                gsap.to(navRef.current, {
                    paddingTop: 12,
                    paddingBottom: 12,
                    duration: 0.3,
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={navRef}
            className="border-b sticky top-0 z-50 px-2 bg-white/80 backdrop-blur-md"
        >
            <nav className="flex justify-between items-center max-w-5xl md:max-w-7xl mx-auto w-full">

                {/* Logo */}
                <Link href={"/"} className="flex gap-2 items-center">
                    <Image
                        src={"/logo.png"}
                        alt="logo"
                        width={30}
                        height={30}
                        className="object-cover rounded-full"
                    />
                    <h3 className="font-black text-lg">Coder</h3>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-7 text-sm">
                    <li>
                        <Navlink href={"/"}>
                            <button className="border rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 hover:bg-gray-200">
                                Home
                            </button>
                        </Navlink>
                    </li>
                    <li>
                        <Navlink href={"/all-courses"}>
                            <button className="border rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 hover:bg-gray-200">
                                Courses
                            </button>
                        </Navlink>
                    </li>
                    <li>
                        <Navlink href={"/profile"}>
                            <button className="border rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 hover:bg-gray-200">
                                My Profile
                            </button>
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
                                    <button className="border rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 hover:bg-gray-200">
                                        SignIn
                                    </button>
                                </Navlink>
                            </li>
                            <li>
                                <Navlink href={"/signup"}>
                                    <button className="border rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 hover:bg-amber-200">
                                        SignUp
                                    </button>
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
                                    src={user?.image || "/default-user.png"}
                                    referrerPolicy="no-referrer"
                                />
                                <Avatar.Fallback>
                                    {user?.name?.charAt(0)}
                                </Avatar.Fallback>
                            </Avatar>
                            <button
                                onClick={handleSignOut}
                                className="bg-red-500 px-4 py-2 rounded-full text-white transition-all duration-300 hover:scale-105"
                            >
                                LogOut
                            </button>
                        </div>
                    )}

                    {/* Mobile Button */}
                    <button
                        onClick={() => setIsActive(!isActive)}
                        className="md:hidden border px-3 py-1 rounded transition hover:bg-gray-200"
                    >
                        <MdFormatAlignJustify />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isActive && (
                <div
                    ref={menuRef}
                    className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm"
                >
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