import { useLocation } from "react-router-dom";
import DefenceIcon from "../Icons/DefenceIcon";
import FormIcon from "../Icons/FormIcon";
import LastForm from "../Icons/LastForm";
import LockIcon from "../Icons/LockIcon";
import PlanIcon from "../Icons/PlanIcon";
import SettingIcon from "../Icons/SettingIcon";
import { useState, useEffect } from "react";

const CreateServerChecker = () => {
  const [activePageN, setActivePageN] = useState<number>(0);
  const allNavPages = [
    "",
    "plan",
    "network",
    "security",
    "password",
    "last-step",
  ];
  const Location = useLocation();
  let location = Location.pathname;
  location = location.slice(21);

  const activePageNumber = () => {
    allNavPages.map((item, index) => {
      if (item === location) {
        return setActivePageN(index);
      }
    });
  };

  useEffect(() => {
    activePageNumber();
  });

  return (
    <div className="flex mt-[20px] items-center">
      {/* details */}
      <div
        className={`w-[50px] h-[50px] rounded-full   flex justify-center items-center ${
          activePageN >= 1 ? "bg-green-dark" : "bg-[#F5F7FA]"
        }`}
      >
        <FormIcon color={`${activePageN >= 1 ? "white" : "#14A784"}`} />
      </div>
      <div className={`w-[82px] h-[2px] mx-[17.5px] bg-green-dark `} />
      {/* system */}
      <div
        className={`w-[50px] h-[50px] rounded-full bg-[#F5F7FA] flex justify-center items-center ${
          activePageN >= 2 ? "bg-green-dark" : "bg-[#F5F7FA]"
        } `}
      >
        <SettingIcon color={`${activePageN >= 2 ? "white" : "#14A784"}`} />
      </div>
      <div className="w-[82px] h-[2px] mx-[17.5px] bg-green-dark" />
      {/* plan */}
      <div
        className={`w-[50px] h-[50px] rounded-full bg-[#F5F7FA] flex justify-center items-center ${
          activePageN >= 3 ? "bg-green-dark" : "bg-[#F5F7FA]"
        } `}
      >
        <PlanIcon color={`${activePageN >= 3 ? "white" : "#14A784"}`} />
      </div>
      <div className="w-[82px] h-[2px] mx-[17.5px] bg-green-dark" />
      {/* network */}
      <div
        className={`w-[50px] h-[50px] rounded-full bg-[#F5F7FA] flex justify-center items-center ${
          activePageN >= 4 ? "bg-green-dark" : "bg-[#F5F7FA]"
        } `}
      >
        <DefenceIcon color={`${activePageN >= 4 ? "white" : "#14A784"}`} />
      </div>
      <div className="w-[82px] h-[2px] mx-[17.5px] bg-green-dark" />
      {/* password */}
      <div
        className={`w-[50px] h-[50px] rounded-full bg-[#F5F7FA] flex justify-center items-center ${
          activePageN >= 5 ? "bg-green-dark" : "bg-[#F5F7FA]"
        } `}
      >
        <LockIcon color={`${activePageN >= 5 ? "white" : "#14A784"}`} />
      </div>
      <div className="w-[82px] h-[2px] mx-[17.5px] bg-green-dark" />
      {/* last step */}
      <div
        className={`w-[50px] h-[50px] rounded-full bg-[#F5F7FA] flex justify-center items-center ${
          activePageN >= 6 ? "bg-green-dark" : "bg-[#F5F7FA]"
        } `}
      >
        <LastForm color={`${activePageN >= 6 ? "white" : "#14A784"}`} />
      </div>
    </div>
  );
};

export default CreateServerChecker;
