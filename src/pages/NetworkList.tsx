import { useLocation } from "react-router-dom";

const NetworkList = () => {
  const test = useLocation();
  console.log(test);
  return (
    <div className="w-full h-full justify-center pb-[50px] px-[50px]  ">
      <div className="w-full h-[calc(100%-150px)] bg-white overflow-y-auto rounded-2xl p-[18px]">
        <div className="h-[45px] bg-black w-full flex justify-between"> </div>
        <div> </div>
      </div>
    </div>
  );
};

export default NetworkList;
