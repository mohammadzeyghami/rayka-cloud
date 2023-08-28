import { Link } from "react-router-dom";
const CreateServerLastStep = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="h-full w-full flex "></div>
      <div className="flex justify-center gap-[10px] mt-[50px] ">
        <Link
          to={"/cloud/create-server/password"}
          className="rounded-md w-[184px] h-[54px] flex justify-center items-center  border-green-light border-[1px] text-green-light  text-[16px]"
        >
          مرحله قبل
        </Link>
        <Link
          to={"/cloud/create-server/"}
          className="rounded-md w-[184px] h-[54px] flex justify-center  items-center bg-green-dark text-white text-[16px]"
        >
          گام بعدی
        </Link>
      </div>
    </div>
  );
};

export default CreateServerLastStep;
