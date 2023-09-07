interface Iprops {
  color: string;
  width: string;
  height: string;
}
const CloudIcon = ({ color, width = "32", height = "30" }: Iprops) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 30"
      fill="none"
    >
      <path
        d="M2 22.4654C2 19.7853 2 18.4467 2.83274 17.614C3.66547 16.7812 5.00411 16.7812 7.68421 16.7812H24.7368C27.4169 16.7812 28.7556 16.7812 29.5883 17.614C30.4211 18.4467 30.4211 19.7853 30.4211 22.4654C30.4211 25.1456 30.4211 26.4842 29.5883 27.3169C28.7556 28.1497 27.4169 28.1497 24.7368 28.1497H7.68421C5.00411 28.1497 3.66547 28.1497 2.83274 27.3169C2 26.4842 2 25.1456 2 22.4654ZM2 6.83387C2 4.15376 2 2.81513 2.83274 1.98239C3.66547 1.14966 5.00411 1.14966 7.68421 1.14966H24.7368C27.4169 1.14966 28.7556 1.14966 29.5883 1.98239C30.4211 2.81513 30.4211 4.15376 30.4211 6.83387C30.4211 9.51397 30.4211 10.8526 29.5883 11.6853C28.7556 12.5181 27.4169 12.5181 24.7368 12.5181H7.68421C5.00411 12.5181 3.66547 12.5181 2.83274 11.6853C2 10.8526 2 9.51397 2 6.83387Z"
        stroke={color}
        strokeWidth="2.13158"
      />
      <path
        opacity="0.5"
        d="M14.7895 6.83386H24.7368M7.6842 6.83386H10.5263M14.7895 22.4654H24.7368M7.6842 22.4654H10.5263"
        stroke={color}
        strokeWidth="2.13158"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CloudIcon;
