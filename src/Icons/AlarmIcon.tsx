interface Iprops {
  color?: string;
}
const AlarmIcon = ({ color = "#14A784" }: Iprops) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 14.5V9.10004"
        stroke={color}
        strokeWidth="1.7625"
        strokeLinecap="round"
      />
      <path
        d="M9.99985 5.49999C10.4969 5.49999 10.8999 5.90293 10.8999 6.39999C10.8999 6.89704 10.4969 7.29999 9.99985 7.29999C9.5028 7.29999 9.09985 6.89704 9.09985 6.39999C9.09985 5.90293 9.5028 5.49999 9.99985 5.49999Z"
        fill="#14A784"
      />
      <path
        opacity="0.5"
        d="M1 10C1 5.7574 1 3.6361 2.3176 2.3176C3.637 1 5.7574 1 10 1C14.2426 1 16.3639 1 17.6815 2.3176C19 3.637 19 5.7574 19 10C19 14.2426 19 16.3639 17.6815 17.6815C16.3648 19 14.2426 19 10 19C5.7574 19 3.6361 19 2.3176 17.6815C1 16.3648 1 14.2426 1 10Z"
        stroke={color}
        strokeWidth="1.7625"
      />
    </svg>
  );
};

export default AlarmIcon;
