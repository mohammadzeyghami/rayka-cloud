import ChartCard from "../components/ChartCard";
import SystemCard from "../components/SystemCard";

const Home = () => {
  const data1 = [
    { name: "Group A", value: 100 },
    { name: "Group B", value: 5000 },
  ];
  const data2 = [
    { name: "Group A", value: 64 },
    { name: "Group B", value: 128 },
  ];
  const data3 = [
    { name: "Group A", value: 32 },
    { name: "Group B", value: 128 },
  ];
  const data4 = [
    { name: "Group A", value: 390 },
    { name: "Group B", value: 500 },
  ];
  return (
    <div className="flex flex-col  gap-[25px] overflow-y-auto">
      <div className="flex w-full flex-wrap justify-center gap-[24.5px] 3xl:justify-between overflow-hidden ">
        <SystemCard data={data4} title="حافظه داخلی" color="#FF630B" />
        <SystemCard data={data3} title="رم" color="#7056E8" />
        <SystemCard data={data2} title="پردازنده" color="#14A784" />
        <SystemCard data={data1} title="ترافیک" color="#EE0B0B" />
      </div>
      <div className="flex justify-center flex-wrap gap-[24.5px] mb-[150px] 3xl:mb-[0]  3xl:justify-between">
        <ChartCard color="#EE0B0B" />
        <ChartCard color="#14A784" />
        <ChartCard color="#7056E8" />
        <ChartCard color="#FF630B" />
      </div>
    </div>
  );
};

export default Home;
