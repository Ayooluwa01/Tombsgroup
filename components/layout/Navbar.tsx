import { memo } from "react";
import Logosvg from "../../assets/svgs/Logo.svg";
import Image from "next/image";
import Button from "../ui/Button";
import Text from "../ui/Text";
import {
  ChevronDown,
  CircleUserRound,
  HardDrive,
  SquareMenu,
} from "lucide-react";
import { Navlinks } from "../../constants/constant";

export const Navbar = memo(() => {
  return (
    <nav className="w-full pt-5 px-6 lg:pt-6 lg:px-16 bg-white relative z-10">
      {" "}
      {/* Top row: Logo + Buttons */}
      <div className="flex justify-between items-center pb-6">
        {/* Logo */}
        <Image
          src="/Logo.png"
          alt="Logo"
          width={166}
          height={64}
          className="h-10 object-contain"
        />

        {/* Buttons */}
        <div className="flex flex-row gap-3">
          <Button variant="small" className="bg-[#571244] hidden lg:flex">
            <CircleUserRound color="white" />
            <Text variant="subtitle" className="text-white">
              Account
            </Text>
            <ChevronDown color="white" />
          </Button>
          <Button variant="medium" className="bg-[#EF4353] hidden lg:flex">
            <Text variant="subtitle" className="text-white">
              Take Assessment
            </Text>
          </Button>

          {/* Hambuger */}
          <div className="lg:hidden">
            <SquareMenu />
          </div>
        </div>
      </div>
      {/* Divider */}
      <hr className="border-t border-gray-200 hidden lg:block" />
      {/* Nav links */}
      <div className=" hidden lg:flex justify-center items-center gap-18 py-5 ">
        {Navlinks.map((link, index) => (
          <Text
            variant="subtitle"
            key={link.name}
            className={`flex flex-row gap-1 items-center cursor-pointer
              ${index === 0 ? "font-bold border-b-2 border-primary pb-1" : ""}
            `}
          >
            {link.name}
            {link.icon && <link.icon width={18} height={18} />}
          </Text>
        ))}
      </div>
    </nav>
  );
});
