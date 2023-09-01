import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDetails, addPlanName } from "../../../features/AddDatas";

const CreateServerNetwork = () => {
  const [serverName, setServerName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-between h-full">
      <div className=" mx-auto mt-[70px] flex flex-col w-[500px]  items-center ">
        <div className="flex justify-start  mr-[-400px] mb-[10px]">
          <h3 className="text-start text-[18px] font-bold">نام سرور</h3>
        </div>
        <input
          value={serverName}
          onChange={(e) => setServerName(e.target.value)}
          className="bg-green-lightest h-[55px] px-[20px] rounded-md bg-opacity-20 w-full"
        />
        <div className="flex justify-start mr-[-400px] mb-[10px]">
          <h3 className=" text-[18px]  font-bold mt-[43px]">توضیحات</h3>
        </div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-green-lightest bg-opacity-20 px-[20px] py-[20px] rounded-md min-h-[157px] min-w-full "
        />
      </div>
      <div className="flex justify-center gap-[10px] mt-[50px] ">
        <Link
          to={"/cloud/create-server/plan"}
          className="rounded-md w-[184px] h-[54px] flex justify-center items-center  border-green-light border-[1px] text-green-light  text-[16px]"
        >
          مرحله قبل
        </Link>
        <Link
          onClick={() => {
            dispatch(addPlanName(serverName));
            dispatch(addDetails(description));
          }}
          to={"/cloud/create-server/security"}
          className={`rounded-md w-[184px] h-[54px] flex justify-center  items-center bg-green-dark text-white text-[16px] ${
            description && description ? "" : "hidden"
          }`}
        >
          گام بعدی
        </Link>
      </div>
    </div>
  );
};

export default CreateServerNetwork;
