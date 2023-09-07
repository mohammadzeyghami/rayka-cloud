interface SugCard {
  children: React.ReactNode;
  style?: string;
}

const SugCard = ({ children, style }: SugCard) => {
  return (
    <div
      className={`w-[150px] rounded-md cursor-pointer h-[150px] hover:shadow-md flex justify-center items-center ${style}`}
    >
      {children}
    </div>
  );
};

export default SugCard;
