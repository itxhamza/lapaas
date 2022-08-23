import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
// imgs
import Logo from "../../public/imgs/logoWithName.png";
import Close from "../../public/svgs/close.svg";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

const NavigationMenu = ({ isNavOpen, setIsNavOpen }) => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState("/");

  useEffect(() => {
    setCurrentPage(router.pathname);

    return () => {
      setCurrentPage(router.pathname);
    };
  }, [router.pathname]);

  console.log(currentPage);

  return (
    <div
      className={`${
        isNavOpen ? "top-0" : "-top-full"
      } fixed text-white font-["Poppins"] h-100 left-0 h-screen w-screen bg-transparent ${
        setIsNavOpen ? "z-[20]" : "md:z-[1000]"
      } p-4 transform transition-all duration-1000 `}
    >
      {/* <div className='flex items-start justify-center h-full p-32 border-8 border-white'> */}
      <div className="flex items-start justify-center h-full p-32 bg-black lg:border-8 lg:border-white">
        <div className="flex items-start justify-between h-full w-100 xl:w-full">
          <div className="flex w-full">
            <div className="hidden w-32 xl:block">
              <Image src={Logo} alt="Logo" className="w-full h-full" />
            </div>
            <ul className="flex flex-col gap-8 xl:pl-4 xl:ml-4 xl:border-l-2 xl:border-white">
              <li className="">
                <span className="pb-1 ml-2 text-xl font-bold uppercase border-b-2 w-min">
                  Menu
                </span>
              </li>
              <li>
                <Link href="/" className="">
                  <a
                    className={`uppercase md:text-5xl text-3xl font-bold p-2 ${
                      currentPage == "/" ? "text-white" : "text-white/50"
                    } hover:text-white`}
                    onClick={() => setIsNavOpen(false)}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/marketing">
                  <a
                    className={`uppercase md:text-5xl text-3xl font-bold p-2 ${
                      currentPage == "/marketing"
                        ? "text-white"
                        : "text-white/50"
                    } hover:text-white`}
                    onClick={() => setIsNavOpen(false)}
                  >
                    Marketing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/development">
                  <a
                    className={`uppercase md:text-5xl text-3xl font-bold p-2 ${
                      currentPage == "/development"
                        ? "text-white"
                        : "text-white/50"
                    } hover:text-white`}
                    onClick={() => setIsNavOpen(false)}
                  >
                    Development
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/consultance">
                  <a
                    className={`uppercase md:text-5xl text-3xl font-bold p-2 ${
                      currentPage == "/consultance"
                        ? "text-white"
                        : "text-white/50"
                    } hover:text-white`}
                    onClick={() => setIsNavOpen(false)}
                  >
                    Consultance
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/coursepage">
                  <a
                    className={`uppercase md:text-5xl text-3xl font-bold p-2 ${
                      currentPage == "/coursepage"
                        ? "text-white"
                        : "text-white/50"
                    } hover:text-white`}
                    onClick={() => setIsNavOpen(false)}
                  >
                    Course
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-end w-full max-w-xl">
            <div className="flex flex-col hidden gap-8 pr-4 mr-4 border-r-2 border-white xl:block">
              <ul className="flex flex-col items-end justify-center gap-2 capitalize">
                {/* , ,  */}
                <li>Lapaasindia@Gmail.Com</li>
                <li>+91 95400 65704</li>
                <li className="max-w-xs text-right">
                  455, Ground Floor, Bawana Rd,near Delhi Technical
                  University,Shahbad Daulatpur Village
                </li>
                <li>New Delhi, Delhi</li>
                <li>110042</li>
              </ul>
              <div className="flex flex-row justify-end mt-5 bg-dark align-center">
                <a
                  className="rounded-full"
                  href="https://www.facebook.com/lapaasindia/"
                  target="_blank"
                >
                  <AiFillFacebook size={40} />
                </a>
                <a
                  className="rounded-full"
                  href="https://www.instagram.com/intellectualindies/"
                  target="_blank"
                >
                  <AiFillInstagram size={40} />
                </a>
                <a
                  className="rounded-full"
                  href="https://www.linkedin.com/company/lapaas-digital-marketing-institute-and-company/"
                  target="_blank"
                >
                  <AiFillLinkedin size={40} />
                </a>
                <a
                  className="rounded-full"
                  href="https://www.youtube.com/channel/UC_s0g4QdprLkyyN2MDpef7Q"
                  target="_blank"
                >
                  <AiFillYoutube size={40} />
                </a>
              </div>
            </div>

            <div
              className="w-10 cursor-pointer"
              onClick={() => {
                setIsNavOpen(false);
              }}
            >
              <Image src={Close} alt="Close" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
