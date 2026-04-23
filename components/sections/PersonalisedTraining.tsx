import { memo } from "react";
import Image from "next/image";
import { Zap } from "lucide-react";
import Text from "../ui/Text";
import { trainingPrograms } from "../../constants/constant";

export const Training = memo(() => {
  return (
    <section className="w-full px-6 py-12 lg:px-16 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 lg:gap-24">
        {trainingPrograms.map((program) => (
          <div
            key={program.title}
            className={`flex flex-col gap-12 lg:gap-12 lg:flex-row ${
              program.imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-start`}
          >
            {/* Text Content */}
            <div className="flex flex-col gap-6 lg:w-1/2">
              <Text
                variant="h2"
                className="font-bold text-[24px] md:text-[32px] lg:text-[40px] text-[#151515]"
              >
                {program.title}
              </Text>

              <Text
                variant="secondary"
                className="text-[#151515]/80 leading-relaxed"
              >
                {program.description}
              </Text>

              {/* Image — shows here on mobile only */}
              <div className="relative w-full h-[220px] sm:h-[280px] rounded-2xl overflow-hidden lg:hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* List */}
              <ul className="flex flex-col gap-2 mt-2">
                {program.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Zap
                      size={16}
                      className=" fill-[#EF4353] text-[#EF4353] flex-shrink-0"
                    />
                    <Text variant="subtitle" className="text-[#151515]">
                      {item}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image — desktop only */}
            <div className="hidden lg:block relative lg:w-1/2 h-[320px] xl:h-[380px] rounded-2xl overflow-hidden flex-shrink-0">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
