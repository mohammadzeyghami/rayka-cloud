interface Iprops {
  children: React.ReactNode;
  render: () => JSX.Element;
}
const VColoumns = ({ render, children }: Iprops) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-[20px]">
      {/* Header */}
      {children}
      {/* Body */}
      <div className="flex w-full justify-start">{render()}</div>
    </div>
  );
};

export default VColoumns;
