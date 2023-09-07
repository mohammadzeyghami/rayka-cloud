import VirtualTable from "../../components/Templates/VirtualTable";
import { testData } from "../../MockDatas/Table";
const Users = () => {
  return (
    <div className="w-full h-full justify-center">
      <VirtualTable Data={testData} />
    </div>
  );
};

export default Users;
