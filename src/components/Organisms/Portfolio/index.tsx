// this is portfolio Icon
interface Iprops {
  children?: React.ReactNode;
  width?: string;
  height?: string;
}
const Portfolio = ({ children, width = "50px", height = "50px" }: Iprops) => {
  return (
    <div className={`w-[${width}] h-[${height}] rounded-full`}>{children}</div>
  );
};

export default Portfolio;
