import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const CreateServerLastStep = () => {
  const data = useSelector((state) => state.data);

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="h-full w-full flex justify-center mt-[45px] ">
        <div className="flex  w-full max-w-[1050px] flex-wrap p-[30px]  rounded-md h-[292px]  border-[1px] border-green-light">
          <div className="flex w-full ">
            <h2 className="ml-[40px] whitespace-nowrap font-semibold">
              نام سرور :{" "}
              <span className="text-green-dark">{data.serverName}</span>
            </h2>
            <h2 className="ml-[40px] whitespace-nowrap font-semibold">
              {" "}
              توضیحات: <span className="text-green-dark"> {data.details}</span>
            </h2>
          </div>
          <h2 className="ml-[40px] whitespace-nowrap font-semibold">
            {" "}
            نام پلن :<span className="text-green-dark">{data.plan}</span>
          </h2>
          <h2 className="ml-[40px] whitespace-nowrap font-semibold">
            {" "}
            مقدار رم :<span className="text-green-dark">{data.ram}</span>
          </h2>
          <h2 className="ml-[40px] whitespace-nowrap font-semibold">
            {" "}
            مقدار حافظه : <span className="text-green-dark">{data.memory}</span>
          </h2>
          <h2 className="ml-[40px] whitespace-nowrap font-semibold">
            {" "}
            تعداد پردازنده :<span className="text-green-dark">
              {data.cpu}
            </span>{" "}
          </h2>
          <h2 className="ml-[40px] whitespace-nowrap font-semibold">
            {" "}
            نوع شبکه :
            <span className="text-green-dark">{data.networkType}</span>{" "}
          </h2>
          <h2 className="ml-[40px] whitespace-nowrap font-semibold">
            {" "}
            سیستم عامل :<span className="text-green-dark">{data.system}</span>
          </h2>
          <h2 className="ml-[40px] whitespace-nowrap font-semibold">
            {" "}
            نوع شبکه :
            <span className="text-green-dark">{data.passwordType}</span>
          </h2>
          <h2 className="ml-[40px] whitespace-nowrap font-semibold">
            {" "}
            رمز عبور:<span className="text-green-dark"> {data.password}</span>
          </h2>
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
