

const CourseDetailesPage = async () => {
    const res = await fetch("https://coder-two-neon.vercel.app/all-course.json");
    const courses = await res.json();
    console.log(courses);

    return (
        <div>

        </div>
    );
};

export default CourseDetailesPage;