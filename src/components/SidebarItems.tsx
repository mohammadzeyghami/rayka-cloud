import { Link } from "react-router-dom";
import { SidebarItem } from "../constants";

interface Iprops {
  setSideBarItem: (item: SidebarItem) => void;
  sActive: boolean;
  children: React.ReactNode;
  name: string;
  nameFarsi: string;
  address: string;
  activeIteam: SidebarItem;
}
const SidebarItems = ({
  setSideBarItem,
  sActive,
  children,
  name,
  nameFarsi,
  address,
  activeIteam,
}: Iprops) => {
  return (
    <Link
      to={address}
      onClick={() => {
        setSideBarItem(activeIteam);
      }}
      className="flex  items-center mb-[25px] "
    >
      <div className="h-full flex items-center">{children}</div>
      {sActive ? (
        <div className="flex flex-col justify-center items-center mr-[25px] ">
          <h2 className="text-[white] whitespace-nowrap">{name}</h2>
          <h2 className="whitespace-nowrap text-green-lightest">{nameFarsi}</h2>
        </div>
      ) : (
        ""
      )}
    </Link>
  );
};

export default SidebarItems;
