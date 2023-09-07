import React from "react";
interface CardProps {
  children?: React.ReactNode;
  style?: string;
}
const Card = ({ children, style }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-md flex justify-center max-w-[1500px]   3xl:max-w-[480px] p-[10px] w-full h-full items-center ${style}`}
    >
      {children}
    </div>
  );
};

export default Card;
