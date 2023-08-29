/* eslint-disable */
/* tslint:disable */
import { PieChart, Pie, Cell } from "recharts";

interface Iprops {
  title?: string;
  des?: string;
  data?: any;
  color?: string;
}
const SystemCard = ({ title, des, data, color = "#EE0B0B" }: Iprops) => {
  const COLORS = [color, "#F0EFF3"];
  return (
    <div className="w-[336px] h-[200px] flex justify-center items-center relative syscard bg-[#fff] rounded-[22px]">
      {/* description */}
      <div className="flex flex-col justify-center items-center absolute right-[20px]  ">
        <h3 className="text-[20px]">{title}</h3>
        <p className="text-gray">
          {data[0].value}GB / {data[1].value} GB
        </p>
        <p>{des}</p>
      </div>
      {/* chart */}
      <div>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={120}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry: any, index: number) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default SystemCard;
