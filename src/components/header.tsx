import { useEffect, useState } from "react";
import { MenuUnfoldOutlined } from "@ant-design/icons";

function Header() {
  return (
    <>
      <div
        className={`w-full h-16 bg-gray-400 bg-opacity-90 fixed flex justify-between select-none`}
      >
        <MenuUnfoldOutlined
          className={`h-full w-16 text-3xl text-white flex items-center justify-center cursor-pointer`}
        />
      </div>
    </>
  );
}

function HomePageHeader() {
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const styles = {
    ":nth-child(1)": {
      top: "25px",
    },
    ":nth-child(2)": {
      animationDelay: "-0.2s",
    },
    ":nth-child(3)": {
      bottom: "25px",
      animationDelay: "-0.4s",
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const clickArrow = () => {
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`w-full h-96 bg-[url('assets/images/pic2.jpg')] bg-cover bg-top fixed select-none`}
        style={{
          opacity: 1 - scrollY / 450,
          height: 550 - scrollY,
        }}
      >
        <div
          className={`w-full h-16 bg-gray-300 bg-opacity-0 flex justify-between`}
        >
          <MenuUnfoldOutlined
            className={`h-full w-16 text-3xl text-white flex items-center justify-center cursor-pointer`}
          />
          {/* <div className={`flex justify-center items-center`}>
            <div
              className={`before:absolute before:h-10 before:w-10 before:border before:rounded-full
             h-10 w-10 mr-4 rounded-full bg-cover bg-[url('assets/images/profile.jpg')] cursor-pointer`}
            ></div>
          </div> */}
        </div>

        <div
          className={`w-full h-56 text-7xl font-bold text-center relative outline-none animate-shrink`}
          style={{
            WebkitBoxReflect:
              "below 5px linear-gradient(transparent, rgba(0, 0, 4,0.6))",
            lineHeight: 5.55,
            color: "#0e3742",
            letterSpacing: 15,
          }}
        >
          GQX's BLOG
        </div>
        <div className={`flex items-center justify-center mt-10`}>
          <div
            className={` relative items-center justify-center cursor-pointer`}
            onClick={clickArrow}
          >
            <div
              className={`relative w-16 h-16 border-r-8 border-b-8 border-white rotate-45 animate-float`}
              style={styles[":nth-child(1)"]}
            ></div>
            <div
              className={`relative w-16 h-16 border-r-8 border-b-8 border-white rotate-45 animate-float`}
              style={styles[":nth-child(2)"]}
            ></div>
            <div
              className={`relative w-16 h-16 border-r-8 border-b-8 border-white rotate-45 animate-float`}
              style={styles[":nth-child(3)"]}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Header, HomePageHeader };
