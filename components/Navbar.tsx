import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

// context
import { useGlobalContext } from "../context/globalContext";

interface Props {
  setShowMobileSideNav: (value: boolean) => void;
  setShowMobileMenuOptions: (value: boolean) => void;
}

const Navbar = ({ setShowMobileSideNav, setShowMobileMenuOptions }: Props) => {
  const { darkMode, toggleDarkMode } = useGlobalContext();
  const navRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [darkBackground, setDarkBackground] = useState(false);
  const [transition, setTransition] = useState(false);

  const handleScroll = useCallback(() => {
    window.scrollY > 25
      ? setDarkBackground(() => true)
      : setDarkBackground(() => false);
  }, [setDarkBackground]);

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
    return () => {
      window.removeEventListener("scroll", () => handleScroll());
    };
  }, [handleScroll]);

  useEffect(() => {
    if (darkMode) {
      setTimeout(() => {
        setTransition(() => true);
      }, 250);
    } else {
      setTransition(() => false);
    }
  }, [darkMode, setTransition]);

  return (
    <nav
      ref={navRef}
      className={`${
        darkBackground
          ? "bg-white dark:bg-black/40"
          : "bg-white dark:bg-black/0"
      } ${
        transition ? "transition-colors" : ""
      } z-20 sticky top-0 dark:backdrop-blur border-b border-b-gray-900/20 dark:border-b-white/10 ease-out flex justify-center`}
    >
      {/* <div className="hidden transition-colors" /> */}
      <div className="w-full flex flex-col max-w-[100rem] transition-none duration-[0]">
        <div className="w-full h-14 px-5 lg:px-10 xl:px-14">
          <div className="h-full flex items-center justify-between">
            <Link href="/">
              <div className="select-none flex items-center hover:cursor-pointer pointer-events-auto">
                <div className="text-xl hidden md:inline font-[400]">
                  Banned Social - documentation
                </div>
                <div className="inline text-xl md:hidden font-[400]">
                  Banned Social
                </div>
              </div>
            </Link>
            <div className="flex text-slate-900 dark:text-gray-300 [&>div>div>i]:w-6 [&>div>div>i]:h-6 [&>div>div>i]:flex [&>div>div>i]:justify-center [&>div>div>i]:items-center">
              <div className="hidden lg:flex text-slate-900 dark:text-gray-300">
                <div className="pr-6 hover:text-sky-400 dark:hover:text-white cursor-pointer">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://portfolio-min.vercel.app"
                  >
                    Portfolio
                  </a>
                </div>
                <div className="pr-6 hover:text-sky-400 dark:hover:text-white cursor-pointer">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/drmatt13/responsive-ui-example"
                  >
                    Github
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex">
                <div className="pl-6 border-l border-gray-900/20 dark:border-white/10">
                  <i
                    className={`cursor-pointer fa-solid ${
                      darkMode ? "fa-moon" : "fa-sun"
                    } hover:text-sky-400 dark:hover:text-white cursor-pointer`}
                    onClick={toggleDarkMode}
                  />
                </div>
              </div>
              <div className="flex lg:hidden">
                <div className="mr-1">
                  <i
                    className="fa-solid fa-ellipsis-vertical cursor-pointer hover:text-sky-400 dark:hover:text-white"
                    onClick={() => setShowMobileMenuOptions(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden h-14 px-5 lg:px-10 xl:px-14">
          <div className="font-thin text-sm sm:text-base text-slate-900 dark:text-gray-300 w-full h-full flex items-center border-t border-gray-900/20 dark:border-white/10">
            <div className="ml-2 text-lg">
              <i
                onClick={() => setShowMobileSideNav(true)}
                className="fa-solid fa-bars cursor-pointer hover:text-sky-400 dark:hover:text-white"
              />
            </div>
            {/* <div className="ml-5">
              {router.asPath === "/" ? (
                <div className="font-semibold">home</div>
              ) : (
                <div className="font-thin">
                  {router.asPath.split("/")[1].split("-").join(" ")}
                </div>
              )}
            </div>
            {router.asPath === "/" ? (
              <></>
            ) : (
              <>
                <div className="ml-2.5 sm:ml-3">
                  <i className="fa-solid fa-chevron-right text-[.6rem] text-gray-600" />
                </div>
                <div className="ml-2.5 sm:ml-3 font-semibold text-black/90 dark:text-gray-300/90">
                  {router.asPath.split("/")[2].split("-").join(" ")}
                </div>
              </>
            )} */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
