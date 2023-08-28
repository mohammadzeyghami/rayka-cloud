interface Iprops {
  color?: string;
}
const RockeIcons = ({ color = "#14A784" }: Iprops) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
    >
      <path
        d="M43.7475 29.9194C44.5795 27.5344 45.003 25.026 45 22.5C45 10.0744 34.9256 0 22.5 0C10.0744 0 0 10.0744 0 22.5C0 28.65 2.46563 34.2206 6.46313 38.2819L29.2875 15.4594L34.9219 21.0938L43.7475 29.9194ZM39.6375 37.08L29.2875 26.73L13.0781 42.9375C15.9431 44.2612 19.1344 45 22.5 45C29.3644 45 35.5125 41.925 39.6375 37.08Z"
        fill={color}
      />
    </svg>
  );
};

export default RockeIcons;
