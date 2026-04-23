import Image from "next/image";
import { memo } from "react";
import Button from "../ui/Button";
import Text from "../ui/Text";

export const Herosection = memo(() => {
  return (
    <div className="relative w-full min-h-[300px] aspect-[16/5]">
      <Image
        src="/herobg.jpg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 md:gap-6 text-center px-4 md:px-12 py-6 md:py-3">
        {/* Badge */}
        <span className="bg-white/20 text-white text-xs md:text-sm font-semibold tracking-widest uppercase px-6 md:px-12 py-2 md:py-3 rounded-full backdrop-blur-sm">
          WHAT WE DO
        </span>

        {/* Heading */}
        <Text
          variant="hero"
          className="text-white text-[28px] md:text-[40px] lg:text-[56px] leading-tight"
        >
          Training and Development
        </Text>

        {/* Subtitle */}
        <Text
          variant="subtitle"
          className="text-white/90 max-w-[90%] md:max-w-[700px] lg:max-w-[1077px] text-sm md:text-base sm:block"
        >
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward <br />{" "}
          in today's ever-evolving landscape.
        </Text>

        {/* CTA Button */}
        <Button
          variant="medium"
          className="bg-[#571244] mt-1 md:mt-2 px-6 md:px-10 h-10 md:h-12"
        >
          <Text variant="subtitle" className="text-white text-sm md:text-base">
            Book a Consultation
          </Text>
        </Button>
      </div>
    </div>
  );
});
