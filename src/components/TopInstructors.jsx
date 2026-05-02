"use client";

import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { MdOutlineMessage } from 'react-icons/md';
import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const card = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

const TopInstructors = () => {
    return (
        <div className='my-30 border shadow-2xl'>

            <div className='space-y-2 w-6/12 mx-auto text-center my-4'>
                <h1 className='text-3xl font-bold'>Our Top Instructors</h1>
                <p className='text-sm text-gray-400'>The most populer trainer will train you</p>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className='grid grid-cols-1 md:grid-cols-3 gap-3'
            >

                {/* Card 1 */}
                <motion.div variants={card} whileHover={{ scale: 1.05, y: -10 }}>
                    <Card>
                        <div className='relative w-full aspect-square'>
                            <Image src={'/instructor-1.jpg'} fill alt="image" className='rounded-xl object-cover' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-bold'>Asly Queen</h1>
                            <div className='bg-green-200 flex gap-2 px-2 rounded-2xl'>
                                <MdOutlineMessage /> Email
                            </div>
                        </div>
                        <div>
                            <ul className='text-gray-500 text-md'>
                                <li className='flex items-center gap-2'> <FaCircle /> <span>UI/UX Expart</span></li>
                                <li className='flex items-center gap-2'> <FaCircle /> <span>10+ Years of Experiens</span> </li>
                            </ul>
                        </div>
                    </Card>
                </motion.div>

                {/* Card 2 */}
                <motion.div variants={card} whileHover={{ scale: 1.05, y: -10 }}>
                    <Card>
                        <div className='relative w-full aspect-square'>
                            <Image src={'/instructor-2.jpg'} fill alt="image" className='rounded-xl object-cover' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-bold'>keen Pter</h1>
                            <div className='bg-green-200 flex gap-2 px-2 rounded-2xl'>
                                <MdOutlineMessage /> Email
                            </div>
                        </div>
                        <div>
                            <ul className='text-gray-500 text-md'>
                                <li className='flex items-center gap-2'> <FaCircle /> <span>Python Dev</span></li>
                                <li className='flex items-center gap-2'> <FaCircle /> <span>7+ Years of Experiens</span> </li>
                            </ul>
                        </div>
                    </Card>
                </motion.div>

                {/* Card 3 */}
                <motion.div variants={card} whileHover={{ scale: 1.05, y: -10 }}>
                    <Card>
                        <div className='relative w-full aspect-square'>
                            <Image src={'/instructor-3.jpg'} fill alt="image" className='rounded-xl object-cover' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-bold'>Alison Breekes</h1>
                            <div className='bg-green-200 flex gap-2 px-2 rounded-2xl'>
                                <MdOutlineMessage /> Email
                            </div>
                        </div>
                        <div>
                            <ul className='text-gray-500 text-md'>
                                <li className='flex items-center gap-2'> <FaCircle /> <span>JavaScript Expart</span></li>
                                <li className='flex items-center gap-2'> <FaCircle /> <span>15+ Years of Experiens</span> </li>
                            </ul>
                        </div>
                    </Card>
                </motion.div>

            </motion.div>

            <div className='flex justify-center my-10'>
                <Link href={'/all-courses'}>
                    <button className="bg-yellow-400 text-white rounded-full px-4 py-2 cursor-pointer">
                        Explore Courses
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default TopInstructors;