import React from "react";

// components
import RouteList from "./RouteList";

// contect
import { useGlobalContext } from "../context/globalContext";

const SideNav = () => {
  return (
    <>
      <style jsx>{`
        @media (min-width: 1024px) {
          .test {
            height: calc(100vh - 57px);
          }
        }
      `}</style>
      <div className="hidden lg:inline sticky top-[57px] w-[22rem] overflow-y-scroll test">
        <div className="z-50 sticky top-0 pointer-events-none">
          {/* <div className="bg-white dark:bg-black h-12">
            <div className="h-full w-full dark:bg-blue-900/[30%]"></div>
          </div> */}
          {/* <div className="bg-white dark:bg-black">
            <div className="dark:bg-blue-900/[30%] lg:pl-10 xl:pl-14 pr-10 w-full">
              <div
                className="select-none pointer-events-auto w-full h-9 rounded-md border border-gray-300 hover:border-gray-400 dark:border-black/0 dark:bg-slate-700/60 dark:hover:bg-slate-700 cursor-pointer text-gray-400"
                onClick={() => setShowSearch(true)}
              >
                <div className="h-full flex items-center">
                  <div className="ml-4">
                    <i className="fa-solid fa-magnifying-glass" />
                  </div>
                  <div className="ml-4 flex-1">Quick search...</div>
                  <div className="mr-4 text-xs font-bold">Ctrl K</div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="h-10 w-full bg-gradient-to-b from-white dark:from-black to-transparent">
            <div className="h-full w-full bg-gradient-to-b dark:from-blue-900/[30%]"></div>
          </div>
        </div>
        <div className="lg:pl-10 xl:pl-14 pr-10 pb-8">
          <RouteList />
        </div>
      </div>
    </>
  );
};

export default SideNav;
