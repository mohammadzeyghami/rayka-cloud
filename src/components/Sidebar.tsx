import { useState } from "react";
import LogoActive from "./LogoActive";
import HomeIcon from "../Icons/HomeIcon";
import { Link } from "react-router-dom";
import CloudIcon from "../Icons/CloudIcon";
import HomeSidebar from "./HomeSidebar";
import CloudSidebar from "./CloudSidebar";

const Sidebar = () => {
  enum SidebarItems {
    home,
    cloud,
  }
  const [sActive, setSactive] = useState<boolean>(false);
  const [sideBarItem, setSideBarItem] = useState<SidebarItems>(
    SidebarItems.cloud
  );
  return (
    <div className="w-full h-full bg-green-light rounded-bl-[50px] rounded-tl-[50px] pr-[90px]  relative ">
      {/* sidebar 1 */}
      <div
        onClick={() => setSactive(!sActive)}
        className={`z-20 absolute right-0 duration-200 h-full ease-in-out bg-green-dark  ${
          !sActive ? "w-[80px]" : "w-full"
        }`}
      >
        <div className="w-full h-full flex flex-col py-[55px] px-[20px] relative">
          {/* Logo */}
          <div className={`${!sActive ? "mb-[133px]" : "mb-[50px]"}`}>
            <LogoActive sActive={sActive} />
          </div>
          {/* title */}
          {sActive ? (
            <h3 className="text-green-light mb-[50px] whitespace-nowrap ">
              گزینه های اصلی
            </h3>
          ) : (
            ""
          )}
          {/* home page */}
          <Link to={"/"} className="flex  items-center mb-[25px]">
            <div className="h-full flex items-center mt-[-10px] ">
              <HomeIcon
                color={sideBarItem === SidebarItems.home ? "#fff" : "#1DC9A0"}
              />
            </div>
            {sActive ? (
              <div className="flex flex-col justify-center items-center mr-[25px]">
                <h2 className="text-[white] whitespace-nowrap">Home Page</h2>
                <h2 className="whitespace-nowrap">صفحه اصلی</h2>
              </div>
            ) : (
              ""
            )}
          </Link>
          {/* cloud server */}
          <Link to={"/"} className="flex  items-center mb-[25px] ">
            <div className="h-full flex items-center">
              <CloudIcon
                color={sideBarItem === SidebarItems.cloud ? "#fff" : "#1DC9A0"}
              />
            </div>
            {sActive ? (
              <div className="flex flex-col justify-center items-center mr-[25px] ">
                <h2 className="text-[white] whitespace-nowrap">Cloud Server</h2>
                <h2 className="whitespace-nowrap">سرور ابری</h2>
              </div>
            ) : (
              ""
            )}
          </Link>

          <div
            className={`w-[18px] h-[67px] cursor-pointer flex text-green-dark font-bold text-[18px]
          justify-center items-center absolute left-0 bottom-0 bg-white mb-5  ${
            !sActive
              ? "ml-[-18px] rounded-tl-md rounded-bl-md"
              : " rounded-tr-md rounded-br-md"
          }`}
          >
            {sActive ? `<` : ">"}
          </div>
        </div>
      </div>
      {sideBarItem === SidebarItems.home && <HomeSidebar />}
      {sideBarItem === SidebarItems.cloud && <CloudSidebar />}
    </div>
  );
};

export default Sidebar;
