import React from 'react';
import CardPhoto from './CardProducts';
import CardProducts from './CardProducts';

const GlobalDataFetch = async () => {
    const res = await fetch("https://coder-two-neon.vercel.app/all-course.json");
    const courses = await res.json();
    console.log(courses);

    return (
        <div className='my-6'>
            <div className='my-10'>
                <h2>All Courses</h2>
            </div>
            <div className='grid grid-cols-4 gap-3'>
                {
                    courses.map((course) => <CardProducts key={course.id} course={course}></CardProducts>)
                }
            </div>

        </div>
    );
};

export default GlobalDataFetch;