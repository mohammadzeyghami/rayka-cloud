interface Iprops {
  color?: string;
}
const RefreshIcon = ({ color }: Iprops) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
    >
      <path
        d="M13.9438 8.34637C13.7904 9.51609 13.3215 10.622 12.5873 11.5455C11.8532 12.4689 10.8815 13.1751 9.7765 13.5883C8.67151 14.0015 7.47487 14.1062 6.31493 13.891C5.15499 13.6758 4.07551 13.1489 3.19226 12.3668C2.30901 11.5848 1.65531 10.577 1.30126 9.45166C0.947214 8.32631 0.906182 7.12581 1.18256 5.97891C1.45895 4.83201 2.04232 3.78198 2.87011 2.94143C3.6979 2.10088 4.73889 1.50153 5.88143 1.20764C9.04869 0.39531 12.3272 2.02565 13.5376 5.06376"
        stroke={color}
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9982 1.00208V5.06371H9.93652"
        stroke={color}
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RefreshIcon;
