"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { useEffect, useRef } from "react"
import gsap from "gsap"



const Banner = () => {
    const titleRef = useRef()
    const descRef = useRef()
    const btnRef = useRef()
    const imgRef = useRef()

    useEffect(() => {
        gsap.from(titleRef.current, { y: 80, opacity: 0, duration: 1 })
        gsap.from(descRef.current, { y: 40, opacity: 0, delay: 0.3 })
        gsap.from(btnRef.current, { scale: 0.8, opacity: 0, delay: 0.6 })
        gsap.from(imgRef.current, { scale: 1.2, opacity: 0, duration: 1 })
    }, [])

    return (
        <div className='bg-gray-800 relative'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center p-10'>
                <div className='text-white space-y-2 p-3 order-2 md:order-1'>
                    <h3 className='font-semibold text-[12px] md:text-xl'>LEARNING EXCELLENCE</h3>
                    <h1 ref={titleRef} className='font-bold text-xl md:text-4xl'>The Best Propuler Online <br /> Courses Of All Time</h1>
                    <p ref={descRef} className='text-[12px] md:text-md text-gray-500'>
                        Start Your Learning Journey Today
                        Discover high-quality courses and build the future you deserve.
                        Learn in-demand skills with expert-led courses designed to
                        boost your career and future success.</p>

                    <div className='flex gap-4 mt-10'>
                        <Link href={'/all-courses'}>
                            <button ref={btnRef} className='text-[12px] md:text-md border bg-amber-300 text-white px-4 py-2 rounded-full'>Explore Course</button>
                        </Link>

                        <div>
                            <button ref={btnRef} className='text-[12px] md:text-md border px-4 py-2 rounded-full flex items-center gap-0.5'> <CiPlay1 className='text-white' /><span>Video Watch</span></button>
                        </div>

                    </div>
                </div>
                <div className='w-full h-full md:w-[300px] md:relative mx-auto order-1 md:order-2'>
                    <Image ref={imgRef}
                        src={"/banner-pic.png"}
                        alt="logo"
                        loading="eager"
                        width={300}
                        height={300}
                        className="object-cover rounded-t-xl bg-yellow-300 md:absolute md:-bottom-15  "
                    />
                </div>
                <div className='hidden md:block w-[200px] h-[100px] z-50 rounded-xl bg-white absolute -bottom-5 left-160'>

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