import React from "react";
interface Iprops {
  className?: string;
  setData: (item: any) => void;
  data: string;
}
const Input = ({ className, setData, data }: Iprops) => {
  return (
    <input
      value={data}
      onChange={(e) => setData(e.target.value)}
      className={`mt-[10px] text-[16px] rounded-md px-[10px]  font-bold bg-green-dark bg-opacity-25 ${className}`}
    />
  );
};

export default Input;
