interface Iprops {
  color?: string;
}
const LastForm = ({ color = "#14A784" }: Iprops) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M1.1145 8.89124C1.1145 5.12004 1.1145 3.23444 2.2857 2.06244C3.4585 0.891235 5.3433 0.891235 9.1145 0.891235C12.8857 0.891235 14.7713 0.891235 15.9425 2.06244C17.1145 3.23524 17.1145 5.12004 17.1145 8.89124C17.1145 12.6624 17.1145 14.548 15.9425 15.7192C14.7721 16.8912 12.8857 16.8912 9.1145 16.8912C5.3433 16.8912 3.4577 16.8912 2.2857 15.7192C1.1145 14.5488 1.1145 12.6624 1.1145 8.89124Z"
        fill="#14A784"
        fillOpacity="0.2"
        stroke={color}
        strokeWidth="1.2"
      />
      <path
        d="M4.31445 11.9312L5.22885 12.8912L7.51445 10.4912M4.31445 6.33124L5.22885 7.29124L7.51445 4.89124"
        fill={color}
        fillOpacity="0.2"
      />
      <path
        d="M4.31445 11.9312L5.22885 12.8912L7.51445 10.4912M4.31445 6.33124L5.22885 7.29124L7.51445 4.89124"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.91455 6.49121H13.9146H9.91455ZM9.91455 12.0912H13.9146H9.91455Z"
        fill={color}
        fillOpacity="0.2"
      />
      <path
        d="M9.91455 6.49121H13.9146M9.91455 12.0912H13.9146"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LastForm;
