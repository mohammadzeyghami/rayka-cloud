import CloudIcon from "../Icons/CloudIcon";
import DocumentsIcon from "../Icons/DocumentsIcon";
import SettingIcon from "../Icons/SettingIcon";
import UsersIcon from "../Icons/UsersIcon";
import ChartsIcon from "../Icons/chartsIcon";
import ChartCard from "../components/ChartCard";
import Card from "../components/Molecules/Card";
import SugCard from "../components/Molecules/SugCard";
import SystemCard from "../components/SystemCard";

const Home = () => {
  const data4 = [
    { name: "Group A", value: 390 },
    { name: "Group B", value: 500 },
  ];
  return (
    <div className="flex flex-col h-full max-w-[1550px]  gap-[25px] overflow-y-auto px-[50px]">
      <div className="flex justify-center gap-[20px] rounded-md bg-white items-center flex-wrap py-[20px]">
        <SugCard>
          <div className="flex justify-center items-center gap-[10px] flex-col">
            <CloudIcon width="42" height="40" color="#14A784" />
            <h3>Cloud</h3>
          </div>
        </SugCard>
        <SugCard>
          <div className="flex justify-center gap-[10px] items-center flex-col">
            <UsersIcon width="40" height="40px" />
            <h3>Users</h3>
          </div>
        </SugCard>
        <SugCard>
          <div className="flex justify-center gap-[10px] items-center flex-col">
            <ChartsIcon height="40px" width="40px" />
            <h3>Charts</h3>
          </div>
        </SugCard>
        <SugCard>
          <div className="flex justify-center  gap-[10px] items-center flex-col">
            <SettingIcon width="40px" height="40px" />
            <h3>Settings</h3>
          </div>
        </SugCard>
      </div>
      <div className="flex flex-wrap 2xl:flex-nowrap justify-center gap-[20px] h-full ">
        <Card>
          <div className="flex flex-col  justify-start h-full w-full p-[20px]">
            <h5 className="border-b-[1px] opacity-60 border-[#000] border-opacity-20 pb-[10px]">
              {" "}
              میزان فروش
            </h5>
            <div className="pt-[10px]">
              <div className="mb-[20px] ">
                <SystemCard data={data4} color="#0E8165" />
              </div>
              <ChartCard color="#0E8165" />
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col justify-start h-full w-full p-[20px]">
            <h5 className="border-b-[1px] border-[#000] opacity-60 border-opacity-20 pb-[10px]">
              {" "}
              کیف پول
            </h5>
            <div className="pt-[10px] flex flex-col gap-[10px] h-full">
              <div className="w-full h-[50%] rounded-md bg-opacity-5 p-[10px] text-green-light font-bold bg-gray">
                مصرف این ماه :
                <div className="w- full h-full flex justify-center text-[25px] items-center">
                  {" "}
                  0 ریال
                </div>
              </div>

              <div className="w-full h-[50%] rounded-md bg-opacity-5 p-[10px] text-green-light font-bold bg-gray">
                {" "}
                <span>اعتبار باقی مانده :</span>
                <div className="w- full h-full flex justify-center text-[25px] items-center">
                  {" "}
                  0 ریال
                </div>
              </div>
            </div>
          </div>
        </Card>
        <div className="flex 3xl:max-w-[440px] 2xl:max-w-[1000px] flex-col   justify-center gap-[20px] h-full w-full">
          <div className="flex w-full justify-center h-full items-center ">
            <Card>
              <div className="flex flex-col min-w-[300px]  justify-start h-full w-full flex-2  p-[20px]">
                <h5 className="border-b-[1px] border-[#000] opacity-60 border-opacity-20 pb-[10px]">
                  {" "}
                  اسناد
                </h5>
                <div className="w-full h-full cursor-pointer flex justify-center items-center">
                  <div className="flex w-full justify-center flex-1 min-w-[180px]">
                    در دست توسعه ...
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="flex w-full h-full  gap-[20px]">
            <Card>
              <div className="flex w-full justify-center flex-1 min-w-[180px]">
                در دست توسعه ...
              </div>
            </Card>
            <Card>
              {" "}
              <div className="flex w-full justify-center flex-1 min-w-[180px]">
                در دست توسعه ...
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
