import React, { useEffect, useState } from "react";
import Portfolio from "../../components/Organisms/Portfolio";

import InputRow from "../../components/Molecules/InputRow/InputRow";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/store";

const Settings = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state);
  const [name, setName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  useEffect(() => {}, []);
  console.log(data);
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="w-full flex flex-col   gap-[10px] justify-start   h-full">
        {/* Image */}
        <div className="flex justify-center pl-[80px] items-center">
          <Portfolio width="200px" height="200px">
            {" "}
            <img
              src="../../Ellipse 4.svg"
              className="cursor-pointer w-full h-full"
            />
          </Portfolio>
        </div>
        <div className="flex flex-col items-center justify-center  p-[20px]  rounded-md ">
          <div className=" flex flex-col   h-full items-start justify-center gap-[20px]">
            <InputRow data={name} setData={setName} title="نام" />
            <InputRow
              data={lastname}
              setData={setLastName}
              title="نام خوانواگی"
            />
            <InputRow data={job} setData={setJob} title="شغل" />
            <InputRow data={country} setData={setCountry} title="کشور" />
          </div>
        </div>
        <div className="flex gap-5 w-full  pl-[80px]  items-center justify-center">
          <button className="w-[100px] h-[40px]  text-[white] rounded-md bg-green-dark">
            انصراف
          </button>
          <button className="w-[100px] h-[40px] text-[white] rounded-md bg-green-dark">
            ثبت
          </button>
        </div>

        {/*Content*/}
      </div>
    </div>
  );
};

export default Settings;
