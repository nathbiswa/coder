import React from 'react';
import CardPhoto from './CardProducts';
import CardProducts from './CardProducts';
import Link from 'next/link';

const GlobalDataFetch = async () => {
    const res = await fetch("https://coder-two-neon.vercel.app/all-course.json");
    const courses = await res.json();
    console.log(courses);

    return (
        <div className='my-6'>
            <div className='my-10 flex justify-between items-center'>
                <h2 className='font-bold text-3xl'>Populer Courses</h2>
                <Link href={`/all-courses`}> <button className='text-white btn px-4 py-2 border rounded-full bg-amber-400'>See all courses</button></Link>

            </div>
            <div className='grid grid-cols-3 gap-3'>
                {
                    courses.slice(0, 6).map((course) => <CardProducts key={course.id} course={course}></CardProducts>)
                }
            </div>

        </div>
    );
};

export default GlobalDataFetch;