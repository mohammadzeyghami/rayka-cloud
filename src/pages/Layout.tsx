import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="flex w-[100vw] h-[100vh] bg-main-gray ">
      {/* leftbar */}
      <div className=" h-full w-[330px] bg-blue-700 rounded-tl-[50px] rounded-bl-[50px]">
        <Sidebar />
      </div>
      <div className="w-full h-full px-[50px] pt-[52px] ">
        {/* navbar */}
        <Navbar />
        <div className="mt-[40px]">
          <Outlet />
        </div>
      </div>
      {/* rightbar */}
    </div>
  );
};

export default Layout;
