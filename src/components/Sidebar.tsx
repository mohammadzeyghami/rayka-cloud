import { useState } from "react";
import LogoActive from "./LogoActive";
import HomeIcon from "../Icons/HomeIcon";
import CloudIcon from "../Icons/CloudIcon";
import HomeSidebar from "./HomeSidebar";
import CloudSidebar from "./CloudSidebar";
import { SidebarItem } from "../constants";
import SidebarItems from "./SidebarItems";
import UsersIcon from "../Icons/UsersIcon";
import ChartsIcon from "../Icons/chartsIcon";

const Sidebar = () => {
  const [sActive, setSactive] = useState<boolean>(false);
  const [sideBarItem, setSideBarItem] = useState<SidebarItem>(SidebarItem.home);

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
            <h3 className="text-green-lightest mb-[50px] whitespace-nowrap ">
              گزینه های اصلی
            </h3>
          ) : (
            ""
          )}
          {/* home page */}

          <SidebarItems
            activeIteam={SidebarItem.home}
            address="/"
            sActive={sActive}
            setSideBarItem={setSideBarItem}
            name="Home"
            nameFarsi="صفحه اصلی"
          >
            <HomeIcon
              color={sideBarItem === SidebarItem.home ? "#fff" : "#1DC9A0"}
            />
          </SidebarItems>
          {/* cloud server */}
          <SidebarItems
            activeIteam={SidebarItem.cloud}
            address="/cloud/list"
            sActive={sActive}
            setSideBarItem={setSideBarItem}
            name="Cloud Server"
            nameFarsi="سرور ابری"
          >
            <CloudIcon
              color={sideBarItem === SidebarItem.cloud ? "#fff" : "#1DC9A0"}
            />
          </SidebarItems>
          {/* users */}
          <SidebarItems
            address="users"
            activeIteam={SidebarItem.users}
            sActive={sActive}
            setSideBarItem={setSideBarItem}
            name="users"
            nameFarsi="کاربران"
          >
            <UsersIcon
              color={sideBarItem === SidebarItem.users ? "#fff" : "#1DC9A0"}
            />
          </SidebarItems>

          {/*charts */}
          <SidebarItems
            address="charts"
            activeIteam={SidebarItem.users}
            sActive={sActive}
            setSideBarItem={setSideBarItem}
            name="charts"
            nameFarsi="نمودار"
          >
            <ChartsIcon
              color={sideBarItem === SidebarItem.charts ? "#fff" : "#1DC9A0"}
            />
          </SidebarItems>

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
      {sideBarItem === SidebarItem.home && <HomeSidebar />}
      {sideBarItem === SidebarItem.cloud && <CloudSidebar />}
    </div>
  );
};

export default Sidebar;
