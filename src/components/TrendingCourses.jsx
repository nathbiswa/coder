// app/(main)/trending/page.jsx

import CardProducts from "@/components/CardProducts";

const TrendingCourses = async () => {
    const res = await fetch("https://coder-two-neon.vercel.app/all-course.json", {
        cache: "no-store",
    });

    const courses = await res.json();


    const trending = courses.slice(6, 12);

    return (
        <div className="my-16">
            <h2 className="text-3xl font-bold text-center mb-6">
                Trending Courses
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {trending.map((course) => (
                    <CardProducts key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default TrendingCourses;