import React from "react";
import ArrowIcon from "../Icons/ArrowIcon";

interface Iprops {
  name: string;
  activeCard: string;
  children?: React.ReactNode;
  system: string;
  version: number;
  setActive: (name: string) => void;
}

const WindowsCard = ({
  name,
  activeCard,
  children,
  system = "windows",
  version = 11,
  setActive,
}: Iprops) => {
  return (
    <div
      onClick={() => setActive(name)}
      className={`${
        activeCard == name ? "border-opacity-100" : "border-opacity-25"
      } flex py-[15px] flex-col p-[10px] items-center w-[146px] cursor-pointer  h-[214.379px] border-2 border-green-dark rounded-md`}
    >
      {/*  Icon */}
      <div className="w-full h-[89px] flex rounded-md justify-center items-center card-bg opacity-75">
        {children}
      </div>
      <p className="text-center text-[11px] mt-[10px] text-green-lightest">
        نام سیستم عامل
      </p>
      <h3 className="text-center text-green-dark    ">{system}</h3>
      <p className="text-center mt-[10px] text-[11px] text-green-lightest">
        نسخه سیستم عامل
      </p>
      <button className="mx-auto  rounded-md py-[9px] justify-between w-[80px] px-[11px] card-bg  flex  items-center text-[8px]">
        <ArrowIcon color="#000" />
        <p className="text-center">{version}</p>
      </button>
    </div>
  );
};

export default WindowsCard;
