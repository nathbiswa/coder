"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = href === pathname;
    return (
        <Link href={href} className={`${isActive ? "rounded-full text-white md:py-2 bg-amber-300" : ""}`}>
            {children}
        </Link>
    );
};

export default Navlink;