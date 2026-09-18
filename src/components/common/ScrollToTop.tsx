
import { useState, useEffect } from "react";
import UseSticky from "@/hooks/UseSticky";

const ScrollToTop = () => {
  const { sticky }: { sticky: boolean } = UseSticky();

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    const shouldShow = window.scrollY > 400;
    setShowScroll(shouldShow);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []); // empty deps fine as we use functional update

  return (
    <>
      {/* <!-- back-to-top-start  --> */}
      {showScroll && (
        <button onClick={scrollTop} className={`scroll-top scroll-to-target ${sticky && "open"}`} data-target="html">
          <i className="far fa-angle-double-up"></i>
        </button>
      )}
      {/* <!-- back-to-top-end  --> */}
    </>
  );
};

export default ScrollToTop;
