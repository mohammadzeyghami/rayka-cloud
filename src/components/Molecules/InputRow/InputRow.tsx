import React from "react";
import Input from "../../Atoms/Input/Input";
interface Iprops {
  title?: string;
  data: string;
  setData: (item: any) => void;
}
const InputRow = ({ title, setData, data }: Iprops) => {
  return (
    <div className="flex justify-center items-center gap-[20px]">
      <Input setData={setData} data={data} />
      <h2 className="font-bold mt-[10px] text-[18px]">: {title} </h2>
    </div>
  );
};

export default InputRow;
