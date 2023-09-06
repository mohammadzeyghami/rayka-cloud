import { FixedSizeList as List } from "react-window";
import { useRef, useState, useEffect } from "react";

const Users = () => {
  const [wrapperHeight, setWrapperHeight] = useState<number>(500);
  const [wrapperWidth, setWrapperWidth] = useState<number>(500);
  const Row = ({ index, style }) => <div style={style}>Column {index}</div>;
  const test = useRef();
  useEffect(() => {
    setWrapperHeight(test?.current?.clientHeight);
    setWrapperWidth(test?.current?.clientWidth);
  }, [test]);

  console.log(test?.current?.clientHeight);
  return (
    <div className="w-full h-full justify-center">
      <div
        className="w-full h-[calc(100%-150px)] bg-white overflow-y-auto rounded-2xl p-[18px]"
        ref={test}
      >
        {/* <div className="h-[66px] bg-[#EEEEEE] p-[10px] rounded-[22px] w-full flex justify-between">
          <div></div>
          <Link
            to={"/cloud/create-server"}
            className="items-center flex px-[17px] bg-green-light rounded-md"
          >
            <p className="text-white"> افزودن کاربر +</p>
          </Link>
        </div>
        <div>
          <table className="w-[95%] mx-auto mt-[20px]  items-center h-[90px] ">
            <thead>
              <tr className="w-full text-green-light mb-[30px] border-b-[1px] border-opacity-20 border-green-light">
                <th>نام </th>
                <th>نام خانوادگی</th>
                <th>شماره ی تلفن</th>
                <th>آیپی شناور</th>
                <th>تاریخ تولد </th>
                <th>سمت</th>
                <th>تنظیمات</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" w-full h-[80px] py-[20px] ">
                <td className="text-center">Anom</td>
                <td className="flex justify-center items-center h-full text-center">
                  <WindowsIcon />
                </td>
                <td className="text-center">184.231.115.24</td>
                <td className="text-center">-</td>
                <td className="text-center">خاموش</td>
                <td className="text-center">2 ساعت قبل</td>
                <td className="flex gap-[10px] justify-center ">
                  <button className="rounded-[6px] p-[10px] bg-orange w-[34.5px] flex justify-center h-[32px] items-center">
                    <MoreIcon color="#000" />
                  </button>

                  <button className="rounded-[6px] p-[10px] bg-red w-[34.5px] flex justify-center h-[32px] items-center">
                    <RemoveIcon color="#000" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}

        {/* react window */}

        <List
          height={wrapperHeight}
          itemCount={1000}
          itemSize={35}
          width={wrapperWidth}
        >
          {Row}
        </List>
      </div>
    </div>
  );
};

export default Users;
