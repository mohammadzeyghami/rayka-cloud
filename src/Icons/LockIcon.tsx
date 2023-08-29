interface Iprops {
  color: string;
}
const LockIcon = ({ color = "#14A784" }: Iprops) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M0.876709 11.9825C0.876709 9.7201 0.876709 8.58809 1.57991 7.88569C2.28231 7.18249 3.41431 7.1825 5.67671 7.1825H12.0767C14.3391 7.1825 15.4711 7.18249 16.1735 7.88569C16.8767 8.58809 16.8767 9.7201 16.8767 11.9825C16.8767 14.2449 16.8767 15.3769 16.1735 16.0793C15.4711 16.7825 14.3391 16.7825 12.0767 16.7825H5.67671C3.41431 16.7825 2.28231 16.7825 1.57991 16.0793C0.876709 15.3769 0.876709 14.2449 0.876709 11.9825Z"
        fill={color}
        fillOpacity="0.2"
        stroke={color}
        strokeWidth="1.35"
      />
      <path
        d="M4.07666 7.18247V5.58247C4.07666 4.30943 4.58237 3.08853 5.48255 2.18836C6.38272 1.28818 7.60362 0.782471 8.87666 0.782471C10.1497 0.782471 11.3706 1.28818 12.2708 2.18836C13.1709 3.08853 13.6767 4.30943 13.6767 5.58247V7.18247"
        fill={color}
        fillOpacity="0.2"
      />
      <path
        d="M4.07666 7.18247V5.58247C4.07666 4.30943 4.58237 3.08853 5.48255 2.18836C6.38272 1.28818 7.60362 0.782471 8.87666 0.782471C10.1497 0.782471 11.3706 1.28818 12.2708 2.18836C13.1709 3.08853 13.6767 4.30943 13.6767 5.58247V7.18247"
        stroke={color}
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M6.47671 11.9825C6.47671 12.1947 6.39242 12.3982 6.24239 12.5482C6.09237 12.6982 5.88888 12.7825 5.67671 12.7825C5.46454 12.7825 5.26105 12.6982 5.11102 12.5482C4.96099 12.3982 4.87671 12.1947 4.87671 11.9825C4.87671 11.7703 4.96099 11.5668 5.11102 11.4168C5.26105 11.2668 5.46454 11.1825 5.67671 11.1825C5.88888 11.1825 6.09237 11.2668 6.24239 11.4168C6.39242 11.5668 6.47671 11.7703 6.47671 11.9825ZM9.67671 11.9825C9.67671 12.1947 9.59242 12.3982 9.44239 12.5482C9.29237 12.6982 9.08888 12.7825 8.87671 12.7825C8.66454 12.7825 8.46105 12.6982 8.31102 12.5482C8.16099 12.3982 8.07671 12.1947 8.07671 11.9825C8.07671 11.7703 8.16099 11.5668 8.31102 11.4168C8.46105 11.2668 8.66454 11.1825 8.87671 11.1825C9.08888 11.1825 9.29237 11.2668 9.44239 11.4168C9.59242 11.5668 9.67671 11.7703 9.67671 11.9825ZM12.8767 11.9825C12.8767 12.1947 12.7924 12.3982 12.6424 12.5482C12.4924 12.6982 12.2889 12.7825 12.0767 12.7825C11.8645 12.7825 11.6611 12.6982 11.511 12.5482C11.361 12.3982 11.2767 12.1947 11.2767 11.9825C11.2767 11.7703 11.361 11.5668 11.511 11.4168C11.6611 11.2668 11.8645 11.1825 12.0767 11.1825C12.2889 11.1825 12.4924 11.2668 12.6424 11.4168C12.7924 11.5668 12.8767 11.7703 12.8767 11.9825Z"
        fill={color}
      />
    </svg>
  );
};

export default LockIcon;
