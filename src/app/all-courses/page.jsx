
import CourseClient from '@/components/CourseClient';

const AllCourses = async () => {
    const res = await fetch("https://coder-two-neon.vercel.app/all-course.json");
    const courses = await res.json();


    return (<CourseClient courses={courses}></CourseClient>);
};

export default AllCourses;