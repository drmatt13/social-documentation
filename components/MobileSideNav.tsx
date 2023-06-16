import { useEffect, useRef, useCallback } from "react";

// components
import RouteList from "./RouteList";

// context
import { useGlobalContext } from "../context/globalContext";

const MobileSideNav = () => {
  const mobileSideNavRef = useRef<HTMLDivElement>(null);
  const { mobile, showMobileSideNav, setShowMobileSideNav } =
    useGlobalContext();

  const resize = useCallback(() => {
    const pageWidth = window.innerWidth;
    if (pageWidth > 1023) {
      setShowMobileSideNav(false);
    }
  }, [setShowMobileSideNav]);

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;
    if (showMobileSideNav) {
      document.body.style.overflow = "hidden";
      mobileSideNavRef!.current!.style.overflowY = "scroll";
      if (!mobile) document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      mobileSideNavRef!.current!.style.overflowY = "hidden";
      if (!mobile) document.body.style.paddingRight = "0";
    }
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [showMobileSideNav, mobile, resize]);

  return (
    <div
      ref={mobileSideNavRef}
      className="z-20 fixed top-0 left-0 w-screen h-screen lg:hidden pointer-events-none"
    >
      <div
        className={`${
          showMobileSideNav
            ? "backdrop-blur-sm bg-black/20 dark:bg-black/10"
            : "hidden"
        } absolute top-0 left-0 h-full w-full pointer-events-auto`}
        onClick={() => setShowMobileSideNav(false)}
      />
      <div
        className={`${
          showMobileSideNav
            ? "linear duration-300"
            : "-translate-x-full linear duration-200"
        } pointer-events-auto bg-white dark:bg-slate-800 absolute top-0 left-0 w-80 max-w-[80vw] h-screen transition-transform`}
      >
        <div className="pt-6 pl-6 overflow-y-scroll h-full">
          <RouteList />
        </div>
      </div>
    </div>
  );
};

export default MobileSideNav;
