import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { MdOutlineMessage } from 'react-icons/md';

const TopInstructors = () => {
    return (
        <div className='my-30 border shadow-2xl'>
            <div className='space-y-2 w-6/12 mx-auto text-center my-4'>
                <h1 className='text-3xl font-bold'>Our Top Instructors</h1>
                <p className='text-sm text-gray-400'>The most populer trainer will train you</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                <Card>
                    <div className='relative w-full aspect-square'>
                        <Image src={'/instructor-1.jpg'}
                            fill
                            alt="image"
                            className='rounded-xl object-cover'
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                        />
                    </div>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-2xl font-bold'>Asly Queen</h1>
                        <div className='bg-green-200 flex gap-2 items-center justify-center px-2  rounded-2xl'>
                            <MdOutlineMessage />  <span>Email</span>
                        </div>
                    </div>
                    <div>
                        <ul className='text-gray-500 text-md'>
                            <li className='flex items-center gap-2'> <FaCircle /> <span>UI/UX Expart</span></li>
                            <li className='flex items-center gap-2'> <FaCircle /> <span>10+ Years of Experiens</span> </li>
                        </ul>
                    </div>
                </Card>
                <Card>
                    <div className='relative w-full aspect-square'>
                        <Image src={'/instructor-2.jpg'}
                            fill
                            alt="image"
                            className='rounded-xl object-cover'
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                        />
                    </div>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-2xl font-bold'>keen Pter</h1>
                        <div className='bg-green-200 flex gap-2 items-center justify-center px-2  rounded-2xl'>
                            <MdOutlineMessage />  <span>Email</span>
                        </div>
                    </div>
                    <div>
                        <ul className='text-gray-500 text-md'>
                            <li className='flex items-center gap-2'> <FaCircle /> <span>Python Dev</span></li>
                            <li className='flex items-center gap-2'> <FaCircle /> <span>7+ Years of Experiens</span> </li>
                        </ul>
                    </div>
                </Card>
                <Card>
                    <div className='relative w-full aspect-square'>
                        <Image src={'/instructor-3.jpg'}
                            fill
                            alt="image"
                            className='rounded-xl object-cover'
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                        />
                    </div>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-2xl font-bold'>Alison Breekes</h1>
                        <div className='bg-green-200 flex gap-2 items-center justify-center px-2  rounded-2xl'>
                            <MdOutlineMessage />  <span>Email</span>
                        </div>
                    </div>
                    <div>
                        <ul className='text-gray-500 text-md'>
                            <li className='flex items-center gap-2'> <FaCircle /> <span>JavaScript Expart</span></li>
                            <li className='flex items-center gap-2'> <FaCircle /> <span>15+ Years of Experiens</span> </li>
                        </ul>
                    </div>
                </Card>

            </div>
            <div className='flex justify-center my-10'>
                <Link href={'/all-courses'}> <button className="bg-yellow-400 text-white cursor-pointer border rounded-full px-4 py-2">Explore Couress</button> </Link>
            </div>

        </div>
    );
};

export default TopInstructors;