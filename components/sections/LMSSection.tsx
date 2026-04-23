import { memo } from "react";
import Text from "../ui/Text";
import Image from "next/image";
import { courses } from "../../constants/constant";
import Button from "../ui/Button";
import { ArrowUpRight } from "lucide-react";

export const LMS = memo(() => {
  return (
    <div className="bg-gray-100 mt-6 w-full px-6 py-12 lg:px-16 lg:py-20">
      <div className="max-w-7xl mx-auto py-5">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          {/* Heading — top on mobile, hidden here on desktop */}
          <Text
            variant="h2"
            className="text-[#571244] font-bold text-[24px] lg:text-[40px] md:hidden text-left w-full"
          >
            Learning Management System
          </Text>

          {/* Left: Circular Image */}
          <div className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px] flex-shrink-0 mx-auto md:mx-0">
            <Image
              src="/lms.jpg"
              alt="Learning Management System"
              fill
              className="object-cover rounded-full"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-4 lg:gap-6 text-left">
            {/* Heading — hidden on mobile, shown on desktop */}
            <Text
              variant="h2"
              className="text-[#571244] font-bold text-[24px] lg:text-[40px] hidden md:block"
            >
              Learning Management System
            </Text>

            <div className="bg-gray-300 p-6">
              {/* Description */}
              <Text
                variant="subtitle"
                className="sm:text-[14px] md:text-[18px]"
              >
                TG Academy is a hub of knowledge and skill-building resources
                designed to empower tech talents on their learning journey. From
                technical courses covering the latest programming languages and
                development frameworks to soft skills training in leadership,
                effective communication and project management, TG Academy
                offers a wide range of courses to cater to diverse learning
                needs. With accessible and interactive learning materials,
                individuals can enhance their skills and stay ahead in today's
                competitive tech landscape.
              </Text>

              {/* Courses */}
              <div className="flex flex-col gap-3 mt-4">
                <Text variant="body" className="text-[#571244] font-bold">
                  Some of our courses include:
                </Text>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-3 max-w-[900px]">
                  {courses.map((course) => (
                    <div key={course} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                      <Text
                        variant="body"
                        className="text-[14px] md:text-[16px]"
                      >
                        {course}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* CTA */}
            <Button variant="medium" className="bg-[#571244] w-fit mt-2">
              <Text variant="subtitle" className="text-white">
                Learn More
              </Text>
              <ArrowUpRight color="white" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});
