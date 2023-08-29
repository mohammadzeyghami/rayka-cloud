import { Link } from "react-router-dom";
import AlarmIcon from "../Icons/AlarmIcon";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addCpu,
  addMemory,
  addPlanName,
  addPrice,
  addRam,
} from "../features/AddDatas";
interface DataType {
  name: string;
  ram: string;
  memory: string;
  cpu: string;
  price: string;
  details: string;
}
const simpleData: DataType[] = [
  {
    name: "اقتصادی",
    ram: "4GB",
    memory: "40GB SSD",
    cpu: "2",
    price: "210،000 تومان",
    details: "",
  },
];

const CreateServerPlan = () => {
  const dispatch = useDispatch();
  const [activePlan, setActivePlan] = useState<any>();
  return (
    <div className="flex flex-col justify-between  h-full">
      <div
        className="w-[95%] mx-auto mt-[20px] h-full  items-center 
      border-[1px] rounded-[20px]   border-green-light  border-opacity-25"
      >
        <table className="w-full  h-[90px] ">
          <thead>
            <tr className="w-full text-green-light mb-[30px] h-[50px] border-b-[1px] border-opacity-20 border-green-light">
              <th>نام پلن</th>
              <th>مقدار رم</th>
              <th>مقدار حافظه</th>
              <th>تعداد پردازنده ها</th>
              <th> قیمت (ماهیانه)</th>
              <th>جزعیات</th>
            </tr>
          </thead>

          <tbody>
            {simpleData.map((item, index) => (
              <tr
                key={index}
                onClick={() => {
                  setActivePlan({
                    name: item.name,
                    ram: item.ram,
                    memory: item.memory,
                    cpu: item.cpu,
                    price: item.price,
                    details: item.details,
                  });
                }}
                className="w-full h-[80px] cursor-pointer  py-[20px] "
              >
                <td className=" relative">
                  <div className="rounded-full flex absolute top-8  right-5 justify-center items-center border-green-dark gap-[10px] w-[15px] h-[15px] border-[1px] ">
                    {activePlan?.name === item.name && (
                      <div className="bg-green-dark inline w-[11px]   rounded-full h-[11px]" />
                    )}
                  </div>
                  <p className="text-center">{item.name}</p>
                </td>
                <td className="flex justify-center items-center h-full text-center">
                  {item.ram}
                </td>
                <td className="text-center">{item.memory}</td>
                <td className="text-center">{item.cpu}</td>
                <td className="text-center">{item.price}</td>
                <td className="text-center w-full flex justify-center">
                  <AlarmIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center gap-[10px] mt-[50px] ">
        <Link
          to={"/cloud/create-server/"}
          className="rounded-md w-[184px] h-[54px] flex justify-center items-center  border-green-light border-[1px] text-green-light  text-[16px]"
        >
          مرحله قبل
        </Link>
        <Link
          onClick={() => {
            dispatch(addPlanName(activePlan.name));
            dispatch(addRam(activePlan.ram));
            dispatch(addCpu(activePlan.cpu));
            dispatch(addPrice(activePlan.price));
            dispatch(addMemory(activePlan.memory));
          }}
          to={"/cloud/create-server/network"}
          className={`rounded-md w-[184px] h-[54px] flex justify-center  items-center ${
            activePlan ? "bg-green-dark" : "hidden"
          } text-white text-[16px]`}
        >
          گام بعدی
        </Link>
      </div>
    </div>
  );
};

export default CreateServerPlan;
