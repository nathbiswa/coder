import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMdHeart } from 'react-icons/io';
import { MdFileDownload } from 'react-icons/md';

const CardProducts = ({ course }) => {
    const courses = course;
    console.log(courses, "courses");

    return (
        <Card className='border rounded-xl'>
            <div className='relative w-full aspect-square'>
                <Image src={courses?.image}
                    fill
                    alt={courses.title}
                    className='rounded-xl object-cover'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                />
                <Chip className='absolute top-3 right-3'>{courses.category}</Chip>
            </div>

            <div>
                <h2>{courses.title}</h2>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <IoMdHeart />
                    {courses.rating}
                </div>
                <div className='flex items-center gap-2'>
                    <MdFileDownload />
                </div>

            </div>
            <Link href={`/all-photos/${courses.id}`}><button className='w-full border cursor-pointer'>View</button></Link>

        </Card>
    );
};

export default CardProducts;