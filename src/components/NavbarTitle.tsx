const NavbarTitle = ({ data }: any) => {
  return (
    <div className="flex flex-col justify-end gap-[15px]">
      {/* you must show txt here with  */}
      <h2 className="text-[41px] font-bold ">{data[0].page}</h2>
      <h4 className="text-gray text-[22px]">
        <span className="text-green-dark">{data[0].span}</span>
        {data[0].description}
      </h4>
    </div>
  );
};

export default NavbarTitle;
