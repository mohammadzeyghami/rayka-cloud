const Navbar = () => {
  return (
    <div className="w-full  flex justify-between">
      <div className="flex flex-col justify-end gap-[15px]">
        {/* you must show txt here with  */}
        <h2 className="text-[41px] font-bold ">صفحه ی اصلی</h2>
        <h4 className="text-gray text-[22px]">
          <span className="text-green-dark">خوش امدید </span>
          ازاینجا میتوانید یک دورنگاه از وضعیت سرور خود داشته باشید!
        </h4>
      </div>
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
