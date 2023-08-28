import React from "react";

interface Iprops {
  color?: string;
}
const TurnOffIcon = ({ color = "#F8F8F8" }: Iprops) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M4.16666 3.50167C3.05418 4.44105 2.25721 5.69957 1.88364 7.10686C1.51006 8.51416 1.57793 10.0023 2.07804 11.3697C2.57816 12.7372 3.48637 13.9179 4.67973 14.7521C5.87309 15.5864 7.29396 16.0337 8.75 16.0337C10.206 16.0337 11.6269 15.5864 12.8203 14.7521C14.0136 13.9179 14.9218 12.7372 15.422 11.3697C15.9221 10.0023 15.9899 8.51416 15.6164 7.10686C15.2428 5.69957 14.4458 4.44105 13.3333 3.50167M8.75 1.66833V9.00167"
        stroke={color}
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TurnOffIcon;
