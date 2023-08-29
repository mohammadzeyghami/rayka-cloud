import { Link } from "react-router-dom";
import ArrowIcon from "../Icons/ArrowIcon";
import CloudIcon from "../Icons/CloudIcon";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const CloudSidebar = () => {
  const location = useLocation();
  let currentLocation = location.pathname;

  console.log(currentLocation);
  const [activeServer, setActiveServer] = useState<boolean>(false);
  const [activeShabake, setActiveShabake] = useState<boolean>(false);
  return (
    <div className="flex flex-col py-[30px]  px-[32px]">
      <div className="flex gap-3">
        <CloudIcon color="#fff" />
        <div className="flex-col">
          <h3 className=" text-[white] whitespace-nowrap text-[18px]">
            Cloud Server
          </h3>
          <h5 className="text-green-lightest text-[18px]">سرور ابری</h5>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="bg-white w-[75px] h-[1px] my-[25px]" />
      </div>
      <div
        onClick={() => setActiveServer(!activeServer)}
        className=" duration-300 ease-in-out mb-[20px]"
      >
        <div className="flex items-center gap-2 cursor-pointer ">
          <div className={`${activeServer ? "" : "rotate-180"} `}>
            <ArrowIcon />
          </div>
          <p className="text-[18px] text-[white]">سرور مجازی</p>
        </div>
        {activeServer && (
          <div className={`flex flex-col mr-[10px] `}>
            <Link
              to="/cloud/list"
              className={`text-[white] rounded-md px-[10px] mt-[10px] ${
                currentLocation === "/cloud/list" ? "bg-green-dark" : ""
              }`}
            >
              لیست سرور ها
            </Link>
            <Link
              to="/cloud/create-server"
              className={`text-[white] rounded-md px-[10px] mt-[10px] ${
                currentLocation === "/cloud/create-server"
                  ? "bg-green-dark"
                  : ""
              }`}
            >
              ساخت سرور جدید
            </Link>
          </div>
        )}
      </div>
      <div
        onClick={() => setActiveShabake(!activeShabake)}
        className="duration-300  ease-in-out"
      >
        <div className="flex items-center gap-2 cursor-pointer">
          <div className={`${activeServer ? "" : "rotate-180"} `}>
            <ArrowIcon />
          </div>
          <p className="text-[18px] text-[white]">شبکه</p>
        </div>
        {activeShabake && (
          <div className={`flex flex-col mr-[10px] duration-300  `}>
            <Link
              to="/cloud/list"
              className={`text-[white] rounded-md px-[10px] mt-[10px] ${
                currentLocation === "/cloud/list" ? "bg-green-dark" : ""
              }`}
            >
              لیست سرور ها
            </Link>
            <Link
              to="/cloud/create-server"
              className={`text-[white] rounded-md px-[10px] mt-[10px] ${
                currentLocation === "/cloud/create-server"
                  ? "bg-green-dark"
                  : ""
              }`}
            >
              ساخت سرور جدید
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CloudSidebar;
