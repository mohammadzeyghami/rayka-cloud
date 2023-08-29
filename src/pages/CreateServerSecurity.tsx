import { Link } from "react-router-dom";
import EarthIcon from "../Icons/EarthIcon";
import PrivateIcon from "../Icons/PrivateIcon";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNetworkType } from "../features/AddDatas";

const CreateServerSecurity = () => {
  const [activeSecurity, setActiveSecurity] = useState<string>("");

  const dispatch = useDispatch();
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="h-full flex justify-center gap-[20px] pt-[100px]">
        <div
          onClick={() => {
            setActiveSecurity("private");
          }}
          className={`${
            activeSecurity === "private" ? "opacity-100" : "opacity-50"
          } flex flex-col items-center justify-center border-[1px] h-[208.338px] w-[155.4px] rounded-md border-green-dark`}
        >
          <PrivateIcon />
          <h3 className="mt-[30px] text-green-dark">Private</h3>
        </div>
        <div
          onClick={() => {
            setActiveSecurity("public");
          }}
          className={`${
            activeSecurity === "public" ? "opacity-100" : "opacity-50"
          } flex flex-col items-center justify-center border-[1px] h-[208.338px] w-[155.4px] rounded-md border-green-dark`}
        >
          <EarthIcon />
          <h3 className="mt-[30px] text-green-dark">Public</h3>
        </div>
      </div>
      <div className="flex justify-center gap-[10px] mt-[50px] ">
        <Link
          to={"/cloud/create-server/network"}
          className="rounded-md w-[184px] h-[54px] flex justify-center items-center  border-green-light border-[1px] text-green-light  text-[16px]"
        >
          مرحله قبل
        </Link>
        <Link
          onClick={() => {
            dispatch(addNetworkType(activeSecurity));
          }}
          to={"/cloud/create-server/password"}
          className={`rounded-md w-[184px] h-[54px] flex justify-center  items-center bg-green-dark text-white text-[16px] ${
            activeSecurity ? "" : "hidden"
          }`}
        >
          گام بعدی
        </Link>
      </div>
    </div>
  );
};

export default CreateServerSecurity;
