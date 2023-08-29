import { Link } from "react-router-dom";
import CentosIcon from "../Icons/CentosIcon";
import DebainIcon from "../Icons/DebainIcon";
import MoreIcon from "../Icons/MoreIcon";
import RockeIcons from "../Icons/RockeIcons";
import UbuntoIcon from "../Icons/UbuntoIcon";
import WindowsIcon from "../Icons/WindowsIcon";
import { useDispatch } from "react-redux";
import WindowsCard from "../components/WindowsCard";
import { useState } from "react";
import { addSystemType } from "../features/AddDatas";

const CreateServerSetting = () => {
  const [activeCard, setActiveCard] = useState<string>("");

  const dispatch = useDispatch();
  return (
    <>
      <div className=" mx-auto w-full  max-w-[700px] flex flex-wrap justify-center gap-[45px]">
        <WindowsCard
          name="Centos"
          system="Centos"
          activeCard={activeCard}
          version={11}
          setActive={setActiveCard}
        >
          <CentosIcon />
        </WindowsCard>
        <WindowsCard
          name="Ubunto"
          system="Ubunto"
          activeCard={activeCard}
          version={11}
          setActive={setActiveCard}
        >
          <UbuntoIcon />
        </WindowsCard>
        <WindowsCard
          name="Windows"
          system="Windows"
          activeCard={activeCard}
          version={11}
          setActive={setActiveCard}
        >
          <WindowsIcon width="33" height="37px" color="#14A784" />
        </WindowsCard>

        <WindowsCard
          name="More"
          system="More"
          activeCard={activeCard}
          version={11}
          setActive={setActiveCard}
        >
          <MoreIcon color="#14A784" />
        </WindowsCard>
        <WindowsCard
          name="Debain"
          system="Debain"
          activeCard={activeCard}
          version={11}
          setActive={setActiveCard}
        >
          <DebainIcon />
        </WindowsCard>
        <WindowsCard
          name="Rockey"
          system="Rockey"
          activeCard={activeCard}
          version={11}
          setActive={setActiveCard}
        >
          <RockeIcons />
        </WindowsCard>
      </div>
      <div className="flex justify-center gap-[10px] mt-[50px] ">
        <Link
          to={"/cloud/create-server"}
          className="rounded-md w-[184px] h-[54px] flex justify-center items-center  border-green-light border-[1px] text-green-light  text-[16px]"
        >
          مرحله قبل
        </Link>
        <Link
          onClick={() => dispatch(addSystemType(activeCard))}
          to={"/cloud/create-server/plan"}
          className={`rounded-md w-[184px] h-[54px] flex justify-center  items-center bg-green-dark text-white text-[16px] ${
            activeCard ? "" : "hidden"
          }`}
        >
          گام بعدی
        </Link>
      </div>
    </>
  );
};

export default CreateServerSetting;
