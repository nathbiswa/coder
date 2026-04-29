// "use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiPlay1 } from 'react-icons/ci';

const Banner = () => {
    return (
        <div className='bg-gray-800 relative'>
            <div className='grid grid-cols-2 justify-between items-center p-10'>
                <div className='text-white space-y-2 p-3 flex-2'>
                    <h3 className='font-semibold text-xl'>LEARNING EXCELLENCE</h3>
                    <h1 className='font-bold text-4xl'>The Best Free Online <br /> Courses Of All Time</h1>
                    <p className='text-md text-gray-500'>
                        Start Your Learning Journey Today
                        Discover high-quality courses and build the future you deserve.
                        Learn in-demand skills with expert-led courses designed to
                        boost your career and future success.</p>

                    <div className='flex gap-4 mt-10'>
                        <Link href={'/all-courses'}>
                            <button className='text-md border bg-amber-300 text-white px-4 py-2 rounded-full'>Explore Course</button>
                        </Link>

                        <div>
                            <button className='text-md border px-4 py-2 rounded-full flex items-center gap-0.5'> <CiPlay1 className='text-white' /><span>Video Watch</span></button>
                        </div>

                    </div>
                </div>
                <div className=' w-[300px] relative mx-auto'>
                    <Image
                        src={"/banner-pic.png"}
                        alt="logo"
                        loading="eager"
                        width={300}
                        height={300}
                        className="object-cover h-[350px] rounded-t-xl bg-yellow-300 absolute -bottom-50  "
                    />
                </div>
                <div className='w-[200px] h-[100px] rounded-xl bg-white absolute -bottom-5 left-160'>

                    <div className='p-3'>
                        <h2 className=' font-bold my-1'>5000+ Cetisfied Students</h2>
                        <div className='flex'>
                            <Image
                                src={"/banner-pic.png"}
                                alt="logo"
                                loading="eager"
                                width={30}
                                height={30}
                                className="object-cover rounded-full "
                            />
                            <Image
                                src={"/dev-1.png"}
                                alt="logo"
                                loading="eager"
                                width={30}
                                height={30}
                                className="object-cover rounded-full "
                            />
                            <Image
                                src={"/dev-2.jpg"}
                                alt="logo"
                                loading="eager"
                                width={30}
                                height={30}
                                className="object-cover rounded-full "
                            />
                            <Image
                                src={"/dev-3.jpg"}
                                alt="logo"
                                loading="eager"
                                width={30}
                                height={30}
                                className="object-cover rounded-full "
                            />
                            <Image
                                src={"/dev-4.jpg"}
                                alt="logo"
                                loading="eager"
                                width={30}
                                height={30}
                                className="object-cover rounded-full "
                            />
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Banner;