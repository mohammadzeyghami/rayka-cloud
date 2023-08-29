interface Iprops {
  color?: string;
}
const FormIcon = ({ color = "#000" }: Iprops) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M12.2445 2.70032C14.057 2.71032 15.0386 2.79115 15.6786 3.43115C16.4111 4.16366 16.4111 5.342 16.4111 7.69867V12.6987C16.4111 15.0562 16.4111 16.2345 15.6786 16.967C14.947 17.6987 13.7678 17.6987 11.4111 17.6987H6.41113C4.05447 17.6987 2.8753 17.6987 2.14363 16.967C1.41113 16.2337 1.41113 15.0562 1.41113 12.6987V7.69867C1.41113 5.342 1.41113 4.16366 2.14363 3.43115C2.78363 2.79115 3.7653 2.71032 5.5778 2.70032"
        stroke={color}
        strokeWidth="1.25"
      />
      <path
        d="M7.6613 11.032H13.078M4.74463 11.032H5.1613M4.74463 8.11536H5.1613M4.74463 13.9487H5.1613M7.6613 8.11536H13.078M7.6613 13.9487H13.078"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M5.57764 2.28199C5.57764 1.95047 5.70933 1.63252 5.94375 1.3981C6.17817 1.16368 6.49612 1.03198 6.82764 1.03198H10.9943C11.3258 1.03198 11.6438 1.16368 11.8782 1.3981C12.1126 1.63252 12.2443 1.95047 12.2443 2.28199V3.11533C12.2443 3.44685 12.1126 3.76479 11.8782 3.99921C11.6438 4.23363 11.3258 4.36533 10.9943 4.36533H6.82764C6.49612 4.36533 6.17817 4.23363 5.94375 3.99921C5.70933 3.76479 5.57764 3.44685 5.57764 3.11533V2.28199Z"
        stroke={color}
        strokeWidth="1.25"
      />
    </svg>
  );
};

export default FormIcon;
