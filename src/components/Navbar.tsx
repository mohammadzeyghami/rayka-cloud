import { useLocation } from "react-router-dom";
import NavbarTitle from "./NavbarTitle";

export interface TitleDatasType {
  flag?: string;
  page?: string;
  description?: string;
  span?: string;
}
const Navbar = () => {
  const location = useLocation();
  let currentLocation = location.pathname;
  currentLocation = currentLocation.slice(1, 6);
  const TitleDatas: TitleDatasType[] = [
    {
      flag: "",
      page: "صفحه اصلی",
      description:
        "اینجا میتونید سرور مجازی جدید بسازید و اون رو شخصی سازی کنید !",
      span: "خوش امدید ",
    },
    {
      flag: "cloud",
      page: "ساخت سرور مجازی",
      description:
        "اینجا میتونید سرور مجازی جدید بسازید و اون رو شخصی سازی کنید !",
    },
  ];

  const currentData = TitleDatas.filter((item) => item.flag == currentLocation);

  return (
    <div className="w-full  flex justify-between">
      <NavbarTitle data={currentData} />
      <div className="flex gap-[15px] justify-center items-center">
        {/* icons here */}

        <img src="../../public/Bell (1).svg" className="cursor-pointer" />
        <img src="../../public/Bell.svg" className="cursor-pointer" />
        <img src="../../public/Ellipse 4.svg" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
