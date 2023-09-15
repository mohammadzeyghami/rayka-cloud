import { FixedSizeList as List } from "react-window";
import { useRef, useState, useEffect } from "react";
import VColoumns from "../../Organisms/VColoumns/Vcoloumns";
import RefreshIcon from "../../../Icons/RefreshIcon";
import { Link } from "react-router-dom";

interface Iprops {
  Data: any;
}
const VirtualTable = ({ Data }: Iprops) => {
  const [wrapperHeight, setWrapperHeight] = useState<number>(500);
  const [wrapperWidth, setWrapperWidth] = useState<number>(500);
  const Row = ({ index, style, data }: { index: number; style: any }) => {
    console.log(data);
    return (
      <div style={style}>
        <div className="w-full flex justify-between px-[20px] ">
          <div className="flex justify-start w-[100px] font-semibold text-[16px]  ">
            {data[index].Date}
          </div>
          <div className="flex justify-start w-[100px] font-semibold text-end text-[16px]  ">
            {data[index].rank}
          </div>
          <div className="flex justify-start w-[100px] font-semibold text-[16px] ml-[50px]  ">
            {data[index].lastName}
          </div>
          <div className="flex justify-start w-[100px] font-semibold  text-[16px] ">
            {data[index].name}
          </div>
        </div>
      </div>
    );
  };
  const wrapper = useRef();
  useEffect(() => {
    setWrapperHeight(wrapper?.current?.clientHeight - 50);
    setWrapperWidth(wrapper?.current?.clientWidth);
  }, [wrapper]);
  return (
    <div className="w-full h-full justify-center">
      <div
        className="w-full h-[calc(100%-150px)] bg-white overflow-y-hidden items-center flex flex-col rounded-2xl py-[18px] px-[40px]"
        ref={wrapper}
      >
        <div className="h-[66px] bg-[#EEEEEE] p-[10px] mb-[20px] rounded-[22px] w-full flex justify-between">
          <button className="w-[80px] bg-white h-[45px] flex justify-center items-center rounded-md">
            <RefreshIcon color="#14A784" />
          </button>
          <Link
            to={"/cloud/create-server"}
            className="items-center flex px-[17px] bg-green-light rounded-md"
          >
            <p className="text-white"> در دست توسعه ...</p>
          </Link>
        </div>
        {/* react window */}

        <div className="justify-between flex mb-[20px] border-opacity-25 border-green-dark border-b-[1px] w-[calc(100%-50px)] px-[20px]  text-green-dark pb-[10px] ">
          <div className="flex justify-end pl-[5px]  w-[100px] text-green-dark text-[16px] font-bold">
            نام
          </div>
          <div className="flex justify-end mr-[30px]  w-[100px] text-green-dark  text-[16px] font-bold">
            {" "}
            نام خانوادگی
          </div>
          <div className="flex justify-end mr-[50px] w-[100px] text-green-dark text-[16px] font-bold">
            نوع دسترسی
          </div>
          <div className="flex justify-end  w-[100px]  text-green-dark text-[16px] font-bold">
            تاریخ عضویت
          </div>
        </div>
        <div className="flex pb-[50px] w-[calc(100%-50px)]">
          <List
            height={wrapperHeight + 10}
            itemCount={Data.length}
            itemData={Data}
            itemSize={35}
            width={wrapperWidth - 80}
          >
            {Row}
          </List>
        </div>
      </div>
    </div>
  );
};

export default VirtualTable;
