/* eslint-disable */
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../stores/store";
const CreateServerLastStep = () => {
  const data = useSelector((state: RootState) => state.data);
  console.log(data);

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="h-full w-full flex justify-center mt-[45px] ">
        <div className="flex  w-full max-w-[1050px] flex-wrap p-[30px]  rounded-md h-[292px]  border-[1px] border-green-light">
          <div className="flex w-full ">
            <h2 className="ml-[40px] whitespace-nowrap font-semibold">
              نام سرور :{" "}
              <span className="text-green-light">{data.serverName}</span>
            </h2>
            <h2 className="ml-[40px] whitespace-nowrap font-semibold">
              {" "}
              توضیحات: <span className="text-green-light"> {data.details}</span>
            </h2>
          </div>
          <h2 className="ml-[40px] whitespace-nowrap font-semibold">
            {" "}
            نام پلن :<span className="text-green-light">{data.planName}</span>
          </h2>
          <h2 className="ml-[40px] whitespace-nowrap font-semibold">
            {" "}
            مقدار رم :<span className="text-green-light">{data.ram}</span>
          </h2>
          <h2 className="ml-[40px] whitespace-nowrap font-semibold">
            {" "}
            مقدار حافظه :{" "}
            <span className="text-green-light">{data.memory}</span>
          </h2>
          <h2 className="ml-[40px] whitespace-nowrap font-semibold">
            {" "}
            تعداد پردازنده :<span className="text-green-light">
              {data.cpu}
            </span>{" "}
          </h2>
          <h2 className="ml-[40px] whitespace-nowrap font-semibold">
            {" "}
            نوع شبکه :
            <span className="text-green-light">{data.networkType}</span>{" "}
          </h2>
          <h2 className="ml-[40px] whitespace-nowrap font-semibold">
            {" "}
            سیستم عامل :
            <span className="text-green-light">{data.systemType}</span>
          </h2>

          <h2 className="ml-[40px] whitespace-nowrap font-semibold">
            {" "}
            رمز عبور:<span className="text-green-light"> {data.password}</span>
          </h2>
          <div className="w-full items-center mt-[30px] flex flex-col">
            <h5 className="text-[18px] text-green-light opacity-50">
              قیمت نهایی
            </h5>
            <h2 className="text-[25px] text-green-light font-bold">
              {data.price}/ماهیانه
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-[10px] mt-[50px] ">
        <Link
          to={"/cloud/create-server/password"}
          className="rounded-md w-[184px] h-[54px] flex justify-center items-center  border-green-light border-[1px] text-green-light  text-[16px]"
        >
          مرحله قبل
        </Link>
        <Link
          to={"/"}
          className="rounded-md w-[184px] h-[54px] flex justify-center  items-center bg-green-dark text-white text-[16px]"
        >
          گام بعدی
        </Link>
      </div>
    </div>
  );
};

export default CreateServerLastStep;
