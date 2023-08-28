import { Link } from "react-router-dom";

const CreateServerPassword = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className=" mt-[50px] flex items-center justify-center">
        <div className="flex flex-col  w-full max-w-[395px]">
          <h2 className=" font-bold mt-[15px] mb-[8px]">رمز عبور</h2>
          <input className="w-full h-[43px] text-green-light px-[20px]  rounded-md bg-green-light bg-opacity-25" />
          <h2 className=" font-bold mt-[15px] mb-[8px]">تکرار رمز</h2>
          <input className="w-full h-[43px] text-green-light  px-[20px] rounded-md bg-green-light bg-opacity-25" />
          <h2 className="text-green-light font-bold mt-[15px] ">
            استفاده از SHH برای امنیت بیشتر
          </h2>
        </div>
        <div className="h-[90px] mt-[25px] mx-[30px] w-[1px] bg-gray" />
        <div>{/* messages */}</div>
      </div>
      {/* Buttons */}
      <div className="flex justify-center gap-[10px] mt-[50px] ">
        <Link
          to={"/cloud/create-server/security"}
          className="rounded-md w-[184px] h-[54px] flex justify-center items-center  border-green-light border-[1px] text-green-light  text-[16px]"
        >
          مرحله قبل
        </Link>
        <Link
          to={"/cloud/create-server/last-step"}
          className="rounded-md w-[184px] h-[54px] flex justify-center  items-center bg-green-dark text-white text-[16px]"
        >
          گام بعدی
        </Link>
      </div>
    </div>
  );
};

export default CreateServerPassword;
