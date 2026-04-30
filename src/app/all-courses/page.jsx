import CardProducts from '@/components/CardProducts';
import React from 'react';

const AllCourses = async () => {
    const res = await fetch("https://coder-two-neon.vercel.app/all-course.json");
    const courses = await res.json();
    console.log(courses);

    return (
        <div className='my-10'>
            <div className="text-center mx-auto my-4">
                <h2 className="text-3xl font-bold">All Courses</h2>
            </div>
            <div className='grid grid-cols-3 gap-3'>
                {
                    courses.map((course) => <CardProducts key={course.id} course={course}></CardProducts>)
                }
            </div>
        </div>
    );
};

export default AllCourses;