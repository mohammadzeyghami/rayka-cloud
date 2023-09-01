import { Outlet } from "react-router-dom";

import CreateServerChecker from "../../../components/CreateServerChecker";

const CreateServer = () => {
  return (
    <div className="w-full flex flex-col  h-[calc(100%-200px)] bg-white overflow-y-auto rounded-2xl p-[18px]">
      {/* Page falge */}
      <div className="flex mx-auto justify-center items-center mb-[60px]">
        {/* circle Components*/}
        <CreateServerChecker />
      </div>
      <Outlet />
    </div>
  );
};

export default CreateServer;
