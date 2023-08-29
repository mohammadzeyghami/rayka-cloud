import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ArrowIcon from "../Icons/ArrowIcon";

const data = [
  {
    name: "شهریور",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "شهریور",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "مرداد",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "تیر",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "خرداد",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "اردیبهشت",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "فروردین",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
interface Iprops {
  color: string;
}

const ChartCard = ({ color }: Iprops) => {
  return (
    <div className="max-w-[721px] w-full h-[261px] rounded-[22px] flex justify-center items-center relative  sysCard bg-white">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="pv"
            stroke={color}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <button className="z-20 absolute top-5 left-5  flex items-center justify-center gap-2 bg-[#F7F6FB] px-[5px] py-[8px]">
        <ArrowIcon color="#000" />
        <h2>مــــاهـــیانه</h2>
      </button>
    </div>
  );
};

export default ChartCard;
