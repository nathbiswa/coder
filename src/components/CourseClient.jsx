"use client";

import { useState } from "react";
import CardProducts from "@/components/CardProducts";

const CoursesClient = ({ courses }) => {
    const [search, setSearch] = useState("");

    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='my-10'>
            <div className="flex justify-between my-4">
                <h2 className="text-3xl font-bold">All Courses</h2>

                <input
                    onChange={(e) => setSearch(e.target.value)}
                    className='border p-2 rounded-full text-xl'
                    type="text"
                    placeholder='Search your courses'
                />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    filteredCourses.map((course) => (
                        <CardProducts key={course.id} course={course} />
                    ))
                }
            </div>
        </div>
    );
};

export default CoursesClient;