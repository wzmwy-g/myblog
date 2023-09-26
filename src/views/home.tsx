import { Header, HomePageHeader } from "../components/header";
import { useEffect, useState } from "react";

function Home() {
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // 在组件卸载时移除滚动事件监听，以避免内存泄漏
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {scrollY > 350 ? <Header /> : <HomePageHeader />}
      <div className="w-full h-full fixed bg-cover bg-[url('/src/assets/images/pic3.jpg')] opacity-50 -z-50 backdrop-blur-3xl"></div>
      <div className="w-full ">
        <div className={`w-full`} style={{height:"430px"}}></div>
        <div className={`w-full`}>
          
          <div className="h-96">111</div>
          <div className="h-96">111</div>
          <div className="h-96">111</div>
          <div className="h-96">111</div>
          <div className="h-96">111</div>
        </div>
      </div>
    </>
  );
}

export default Home;
