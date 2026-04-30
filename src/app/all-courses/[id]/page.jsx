import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import { GiWatch } from "react-icons/gi";
import { IoMdHeart } from "react-icons/io";


const CourseDetailesPage = async ({ params }) => {
    const { id } = await params;
    console.log(id, "Params Id");
    const res = await fetch("https://coder-two-neon.vercel.app/all-course.json");
    const courses = await res.json();
    console.log(courses);
    const resPectCourse = courses.find(c => c.id == id);
    console.log(resPectCourse, "Respected Course");
    return (
        <div>
            <div className="text-center mt-20">
                <h1 className="text-3xl font-bold text-shadow-gray-600">Read details course summary!</h1>
            </div>
            <div className="max-w-6/12 mx-auto border shadow-xl mt-4 rounded-xl">
                <Card className="">
                    <div className='relative w-full h-[350px] aspect-square'>
                        <Image src={resPectCourse?.image}
                            fill
                            alt={resPectCourse.title}
                            className='rounded-xl object-cover'
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                        />
                        <Chip className='absolute top-3 right-3 bg-yellow-400'>{resPectCourse.category}</Chip>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold">Instructor: {resPectCourse.instructor}</h1>
                        <h3 className="text-xl font-sm">Courses name: <span className="text-yellow-400">{resPectCourse.title}</span></h3>
                    </div>
                    <div>
                        <p className=" text-gray-500">{resPectCourse.description}</p>
                    </div>
                    <hr className="my-2" />
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <IoMdHeart />
                            {resPectCourse.rating}
                        </div>
                        <div className='flex items-center gap-2'>
                            <GiWatch />
                            {resPectCourse.duration}
                        </div>

                    </div>
                </Card>
            </div>
        </div>

    );
};

export default CourseDetailesPage;