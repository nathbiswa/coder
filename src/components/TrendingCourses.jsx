// app/(main)/trending/page.jsx

import CardProducts from "@/components/CardProducts";

const TrendingCourses = async () => {
    const res = await fetch("https://coder-two-neon.vercel.app/new-courses.json", {
        cache: "no-store",
    });

    const courses = await res.json();


    // const trending = courses.slice(0, 6);

    return (
        <div className="my-16">
            <h2 className="text-[14px] md:text-3xl font-bold text-center mb-6">
                Trending Courses & UP Coming soon...
            </h2>
            <p className="text-[10px] md:text-[15px] text-center mb-6">There is very Extaited Feature... <br /> Mind blowing suppor or Guideline.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {courses.map((course) => (
                    <CardProducts key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default TrendingCourses;