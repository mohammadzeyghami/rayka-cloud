/* eslint-disable */

import { Link } from "react-router-dom";
import WindowsIcon from "../Icons/WindowsIcon";
import MoreIcon from "../Icons/MoreIcon";
import TurnOffIcon from "../Icons/TurnOffIcon";
import RemoveIcon from "../Icons/RemoveIcon";
import RefreshIcon from "../Icons/RefreshIcon";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { DatasState } from "../features/AddDatas";

const NetworkList = () => {
  const data = useSelector((state: RootState) => state.allDatas);
  console.log(data);
  return (
    <div className="w-full h-full justify-center   ">
      <div className="w-full h-[calc(100%-150px)] bg-white overflow-y-auto rounded-2xl p-[18px]">
        <div className="h-[66px] bg-[#EEEEEE] p-[10px] rounded-[22px] w-full flex justify-between">
          <button className="w-[80px] bg-white h-[45px] flex justify-center items-center rounded-md">
            <RefreshIcon color="#14A784" />
          </button>
          <Link
            to={"/cloud/create-server"}
            className="items-center flex px-[17px] bg-green-light rounded-md"
          >
            <p className="text-white"> افزودن سرور جدید +</p>
          </Link>
        </div>
        <div>
          <table className="w-[95%] mx-auto mt-[20px]  items-center h-[90px] ">
            <thead>
              <tr className="w-full text-green-light mb-[30px] border-b-[1px] border-opacity-20 border-green-light">
                <th>نام سرور</th>
                <th>سیستم عامل</th>
                <th>پردازنده</th>
                <th>حافظه</th>
                <th>وضعیت شبکه</th>
                <th>قیمت</th>
                <th>حافظه رم</th>
                <th> تنظیمات</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((data: any, index: number) => (
                <tr key={index} className=" w-full h-[80px] py-[20px] ">
                  <td className="text-center">{data.serverName}</td>
                  <td className="flex justify-center items-center h-full text-center">
                    <WindowsIcon />
                  </td>
                  <td className="text-center">{data.cpu}</td>
                  <td className="text-center">{data.memory}</td>
                  <td className="text-center">{data.networkType}</td>
                  <td className="text-center">{data.price}</td>
                  <td className="text-center">{data.ram}</td>
                  <td className="flex gap-[10px] justify-center ">
                    <button className="rounded-[6px] p-[10px] bg-orange w-[34.5px] flex justify-center h-[32px] items-center">
                      <MoreIcon color="#000" />
                    </button>
                    <button className="rounded-[6px] p-[10px] bg-green-light w-[34.5px] flex justify-center h-[32px] items-center">
                      <TurnOffIcon color="#000" />
                    </button>
                    <button className="rounded-[6px] p-[10px] bg-red w-[34.5px] flex justify-center h-[32px] items-center">
                      <RemoveIcon color="#000" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NetworkList;
