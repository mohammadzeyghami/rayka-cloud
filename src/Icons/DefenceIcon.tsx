interface Iprops {
  color?: string;
}
const DefenceIcon = ({ color = "#14A784" }: Iprops) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="19"
      viewBox="0 0 17 19"
      fill="none"
    >
      <path
        d="M0.63916 8.25611C0.63916 5.45786 0.63916 4.05874 0.96991 3.58799C1.29979 3.11811 2.61491 2.66749 5.24604 1.76711L5.74741 1.59561C7.11854 1.12574 7.80366 0.891235 8.51416 0.891235C9.22379 0.891235 9.90979 1.12574 11.2809 1.59561L11.7823 1.76711C14.4134 2.66749 15.7285 3.11811 16.0584 3.58799C16.3892 4.05874 16.3892 5.45873 16.3892 8.25611V9.63336C16.3892 14.5666 12.68 16.9615 10.3525 17.9774C9.72166 18.253 9.40666 18.3912 8.51416 18.3912C7.62166 18.3912 7.30666 18.253 6.67579 17.9774C4.34829 16.9606 0.63916 14.5675 0.63916 9.63336V8.25611Z"
        fill="#14A784"
        fillOpacity="0.2"
        stroke={color}
        strokeWidth="1.21875"
      />
      <path
        d="M12.8892 9.64125C12.8974 10.2209 12.7903 10.7965 12.5742 11.3344C12.358 11.8723 12.0371 12.3619 11.63 12.7748C11.223 13.1876 10.738 13.5154 10.2032 13.7392C9.66835 13.9629 9.09439 14.0781 8.51465 14.0781C7.93491 14.0781 7.36095 13.9629 6.82613 13.7392C6.29131 13.5154 5.80629 13.1876 5.39926 12.7748C4.99223 12.3619 4.67131 11.8723 4.45515 11.3344C4.23898 10.7965 4.13189 10.2209 4.14009 9.64125C4.15634 8.49176 4.62439 7.39486 5.44301 6.58774C6.26163 5.78061 7.36504 5.32812 8.51465 5.32812C9.66425 5.32812 10.7677 5.78061 11.5863 6.58774C12.4049 7.39486 12.873 8.49176 12.8892 9.64125Z"
        stroke={color}
        strokeWidth="1.21875"
      />
      <path
        d="M10.1312 11.3151C10.2187 10.7849 10.2642 10.2161 10.2642 9.64124C10.2642 9.06636 10.2187 8.49761 10.1312 7.96736C10.0554 7.48183 9.92811 7.00577 9.75141 6.54724C9.58953 6.14124 9.39616 5.81924 9.18354 5.59961C8.97179 5.37911 8.74429 5.26624 8.51416 5.26624C8.28404 5.26624 8.05653 5.37999 7.84478 5.59874C7.63216 5.81924 7.43966 6.14124 7.27604 6.54724C7.09963 7.0058 6.97262 7.48187 6.89716 7.96736C6.80966 8.49761 6.76416 9.06636 6.76416 9.64124C6.76416 10.2161 6.80966 10.7849 6.89716 11.3151C6.98466 11.8462 7.11416 12.3284 7.27691 12.7352C7.43879 13.1412 7.63216 13.4632 7.84478 13.6829C8.05653 13.9034 8.28404 14.0162 8.51416 14.0162C8.74429 14.0162 8.97179 13.9025 9.18354 13.6837C9.39616 13.4632 9.58866 13.1412 9.75229 12.7344C9.92863 12.2761 10.0556 11.8003 10.1312 11.3151Z"
        stroke={color}
        strokeWidth="1.21875"
      />
      <path
        d="M4.13916 9.64124H12.8892"
        stroke={color}
        strokeWidth="1.21875"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DefenceIcon;
