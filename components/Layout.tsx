import { ReactNode, useState, useEffect } from "react";
import Image from "next/image";

// components
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import MobileSideNav from "./MobileSideNav";
import MobileMenuOptions from "./MobileMenuOptions";

// context
import { useGlobalContext } from "../context/globalContext";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { setShowMobileSideNav } = useGlobalContext();
  const [showMobileMenuOptions, setShowMobileMenuOptions] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-black dark:text-white text-black/75">
        <div className="relative w-full dark:bg-blue-900/[30%] min-h-screen h-full">
          <div className="absolute w-full flex justify-center overflow-hidden">
            <div className="h-[40rem] max-h-screen w-[80rem] shrink-0 opacity-90 translate-x-12 pointer-events-none select-none">
              <Image
                priority={true}
                className="h-full w-full"
                src="/docs-dark@30.77f062b5fd90f0d2cd4752cd9a8649c8.avif"
                alt="test"
                width={2880}
                height={1232}
              ></Image>
            </div>
          </div>
          <div className="mx-auto h-full w-full flex justify-center">
            <div className="h-full w-full">
              <Navbar
                setShowMobileSideNav={setShowMobileSideNav}
                setShowMobileMenuOptions={setShowMobileMenuOptions}
              />
              <div className="px-5 lg:px-0 lg:pr-10 xl:pr-14 mx-auto h-full max-w-[100rem]">
                <div className="w-full h-full flex">
                  <SideNav />
                  <MobileSideNav />
                  <MobileMenuOptions
                    showMobileMenu={showMobileMenuOptions}
                    setShowMobileMenu={setShowMobileMenuOptions}
                  />
                  <div className="flex-1 py-6 lg:py-10 lg:pl-12 pointer-events-auto z-10 overflow-hidden text-black dark:text-gray-100">
                    <>{children}</>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
