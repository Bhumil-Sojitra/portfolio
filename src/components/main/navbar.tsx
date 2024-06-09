import { Socials } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-white/5  backdrop-blur-sm z-50  ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto hidden flex-row items-center lg:flex"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-spin hidden sm:block"
          />
          <span className="text-2xl font-bold ml-[10px] hidden md:block text-white">
            Portfolio
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-12 border border-bdcolor bg[#0300145e] mr-[15px] sm:mr-0 px-[20px] py-[20px] rounded-full  font-bold ">
            <a
              href="#about-me"
              className="cursor-pointer text-white hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-500 to-cyan-500"
            >
              About Me
            </a>
            <a
              href="#skills"
              className="cursor-pointer text-white hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-500 to-cyan-500"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer text-white hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-500 to-cyan-500"
            >
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5 pr-4">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="hidden md:block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
