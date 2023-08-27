interface Iprops {
  sActive: boolean;
}

const LogoActive = ({ sActive }: Iprops) => {
  return (
    <div>
      {sActive ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="224"
          height="34"
          viewBox="0 0 224 34"
          fill="none"
        >
          <path
            d="M8.9933 14.5135C7.11619 14.9855 5.47616 16.1264 4.38135 17.7217C3.28658 19.3171 2.81234 21.2571 3.04775 23.1772C3.2832 25.0974 4.2121 26.8655 5.65994 28.1495C7.10778 29.4334 8.97488 30.1448 10.9105 30.1499H32.7421C34.1434 30.1489 35.5285 29.8514 36.8066 29.2768C38.0843 28.7023 39.2259 27.8638 40.1563 26.8164C41.0867 25.7691 41.7843 24.5368 42.2039 23.2005C42.6231 21.8642 42.7547 20.4544 42.5898 19.0636C42.4244 17.6729 41.9667 16.3329 41.2461 15.1318C40.5255 13.9307 39.5584 12.8958 38.409 12.0951C37.2592 11.2944 35.9529 10.7461 34.576 10.4864C33.199 10.2266 31.7826 10.2613 30.42 10.588M30.42 10.588L27.7804 11.3061M30.42 10.588C29.7417 7.9034 28.0673 5.57704 25.7364 4.08046C23.4055 2.58392 20.5923 2.02913 17.8673 2.52861C15.1423 3.02813 12.7093 4.54446 11.0615 6.77034C9.4136 8.99621 8.67427 11.765 8.9933 14.5155C8.9933 14.5155 9.29695 16.265 9.91816 17.2567"
            stroke="white"
            stroke-width="4.18998"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M74.0892 27.0943H69.928L68.0139 22.5447C67.7366 21.8974 67.3945 21.4166 66.9875 21.1022C66.599 20.7878 66.0071 20.6305 65.212 20.6305H62.7708V27.0943H58.554V7.34236H66.0441C67.2833 7.34236 68.4301 7.65676 69.4843 8.28557C70.5567 8.89588 71.3985 9.73737 72.0086 10.8101C72.6376 11.8642 72.952 13.0201 72.952 14.2777C72.952 15.3874 72.7021 16.3861 72.2028 17.2738C71.7221 18.1431 71.0471 18.8643 70.1779 19.4377C70.8621 19.9 71.4444 20.7045 71.9256 21.8512L74.0892 27.0943ZM62.7708 17.357H65.7391C66.5527 17.357 67.2555 17.0519 67.8475 16.4416C68.4394 15.8313 68.7352 15.11 68.7352 14.2777C68.7352 13.4455 68.4394 12.7242 67.8475 12.1139C67.2555 11.5036 66.5527 11.1984 65.7391 11.1984H62.7708V17.357ZM90.8998 12.7797V27.0943H87.4322V25.1802C86.3595 26.6782 84.8523 27.4272 82.9104 27.4272C81.5419 27.4272 80.2842 27.0851 79.1377 26.4008C77.9908 25.7165 77.0753 24.801 76.391 23.6544C75.7253 22.5077 75.3924 21.2594 75.3924 19.9093C75.3924 18.5777 75.7253 17.3386 76.391 16.1919C77.0753 15.0453 77.9908 14.139 79.1377 13.4732C80.2842 12.7889 81.5419 12.4468 82.9104 12.4468C84.8523 12.4468 86.3595 13.1958 87.4322 14.6939V12.7797H90.8998ZM83.1602 23.4879C84.1403 23.4879 84.9724 23.1458 85.6567 22.4615C86.3595 21.7772 86.7109 20.9357 86.7109 19.937C86.7109 18.9383 86.3595 18.0968 85.6567 17.4125C84.9724 16.7097 84.1403 16.3584 83.1602 16.3584C82.1613 16.3584 81.3198 16.7097 80.6356 17.4125C79.9513 18.0968 79.6092 18.9383 79.6092 19.937C79.6092 20.9357 79.9513 21.7772 80.6356 22.4615C81.3198 23.1458 82.1613 23.4879 83.1602 23.4879ZM107.238 12.7797L102.217 28.9807C101.847 30.3863 101.107 31.533 99.9972 32.4207C98.9059 33.3269 97.6301 33.78 96.1689 33.78H93.284V29.7575H95.8638C96.4187 29.7575 96.8995 29.6003 97.3065 29.2859C97.7316 28.99 98.0274 28.5831 98.1938 28.0653L98.4993 27.0943H96.2245L92.1464 12.7797H96.3909L99.5257 23.7931L102.965 12.7797H107.238ZM122.952 27.0943H118.042L114.38 21.6292L113.215 22.9054V27.0943H108.998V6.53786H113.215V17.1074L117.32 12.7797H122.481L117.265 18.4945L122.952 27.0943ZM139.637 12.7797V27.0943H136.169V25.1802C135.097 26.6782 133.59 27.4272 131.648 27.4272C130.279 27.4272 129.021 27.0851 127.875 26.4008C126.728 25.7165 125.813 24.801 125.129 23.6544C124.462 22.5077 124.13 21.2594 124.13 19.9093C124.13 18.5777 124.462 17.3386 125.129 16.1919C125.813 15.0453 126.728 14.139 127.875 13.4732C129.021 12.7889 130.279 12.4468 131.648 12.4468C133.59 12.4468 135.097 13.1958 136.169 14.6939V12.7797H139.637ZM131.897 23.4879C132.877 23.4879 133.71 23.1458 134.394 22.4615C135.097 21.7772 135.448 20.9357 135.448 19.937C135.448 18.9383 135.097 18.0968 134.394 17.4125C133.71 16.7097 132.877 16.3584 131.897 16.3584C130.899 16.3584 130.057 16.7097 129.373 17.4125C128.689 18.0968 128.346 18.9383 128.346 19.937C128.346 20.9357 128.689 21.7772 129.373 22.4615C130.057 23.1458 130.899 23.4879 131.897 23.4879ZM156.631 27.4827C154.856 27.4827 153.219 27.0203 151.721 26.0956C150.223 25.1709 149.03 23.9225 148.143 22.3505C147.274 20.7785 146.839 19.0585 146.839 17.1906C146.839 15.3412 147.274 13.6304 148.143 12.0584C149.03 10.4864 150.223 9.23804 151.721 8.31333C153.219 7.38858 154.856 6.92625 156.631 6.92625C158.129 6.92625 159.526 7.25914 160.82 7.92494C162.134 8.59074 163.243 9.51545 164.149 10.6991C165.074 11.8642 165.712 13.1866 166.064 14.6661L162.457 15.1655C162.069 13.9079 161.357 12.8814 160.321 12.0862C159.304 11.2909 158.166 10.8933 156.909 10.8933C155.855 10.8933 154.874 11.1799 153.968 11.7533C153.08 12.3081 152.368 13.0664 151.832 14.0281C151.314 14.9898 151.055 16.044 151.055 17.1906C151.055 18.3372 151.314 19.4007 151.832 20.3809C152.368 21.3426 153.08 22.1101 153.968 22.6834C154.856 23.2383 155.836 23.5157 156.909 23.5157C158.166 23.5157 159.304 23.118 160.321 22.3228C161.357 21.5275 162.069 20.5011 162.457 19.2435L166.064 19.6873C165.712 21.1669 165.074 22.4985 164.149 23.6821C163.243 24.8658 162.134 25.7997 160.82 26.484C159.526 27.1498 158.129 27.4827 156.631 27.4827ZM173.481 27.0943C172.611 27.0943 171.798 26.8816 171.039 26.4563C170.3 26.0309 169.708 25.4576 169.264 24.7363C168.839 23.9965 168.626 23.1828 168.626 22.295V6.53786H172.815V22.5447C172.815 22.7297 172.871 22.8776 172.981 22.9886C173.111 23.0995 173.277 23.155 173.481 23.155H173.953V27.0943H173.481ZM183.317 27.4272C181.893 27.4272 180.58 27.0943 179.378 26.4285C178.194 25.7442 177.251 24.8288 176.548 23.6821C175.864 22.5355 175.522 21.2779 175.522 19.9093C175.522 18.5592 175.864 17.3108 176.548 16.1642C177.251 15.0175 178.194 14.1113 179.378 13.4455C180.58 12.7797 181.893 12.4468 183.317 12.4468C184.723 12.4468 186.008 12.7797 187.173 13.4455C188.357 14.1113 189.291 15.0175 189.975 16.1642C190.678 17.3108 191.029 18.5592 191.029 19.9093C191.029 21.2779 190.678 22.5355 189.975 23.6821C189.291 24.8288 188.357 25.7442 187.173 26.4285C186.008 27.0943 184.723 27.4272 183.317 27.4272ZM183.29 23.4879C184.27 23.4879 185.102 23.1458 185.786 22.4615C186.489 21.7772 186.84 20.9357 186.84 19.937C186.84 18.9383 186.489 18.0968 185.786 17.4125C185.102 16.7097 184.27 16.3584 183.29 16.3584C182.291 16.3584 181.449 16.7097 180.765 17.4125C180.081 18.0968 179.739 18.9383 179.739 19.937C179.739 20.9357 180.081 21.7772 180.765 22.4615C181.449 23.1458 182.291 23.4879 183.29 23.4879ZM206.341 12.7797V27.0943H202.873V25.3743C202.392 26.0216 201.809 26.5302 201.125 26.9001C200.46 27.2515 199.701 27.4272 198.85 27.4272C197.722 27.4272 196.705 27.1313 195.799 26.5395C194.893 25.9477 194.181 25.1524 193.663 24.1537C193.145 23.155 192.886 22.0639 192.886 20.8802V12.7797H197.075V20.7415C197.075 21.4258 197.325 22.0176 197.824 22.517C198.323 23.0163 198.925 23.266 199.627 23.266C200.312 23.266 200.904 23.0163 201.403 22.517C201.902 22.0176 202.152 21.4258 202.152 20.7415V12.7797H206.341ZM224 6.51013V27.0943H220.505V25.1802C219.432 26.6782 217.925 27.4272 215.983 27.4272C214.614 27.4272 213.357 27.0851 212.21 26.4008C211.063 25.7165 210.148 24.801 209.464 23.6544C208.798 22.5077 208.465 21.2594 208.465 19.9093C208.465 18.5777 208.798 17.3386 209.464 16.1919C210.148 15.0453 211.063 14.139 212.21 13.4732C213.357 12.7889 214.614 12.4468 215.983 12.4468C217.518 12.4468 218.785 12.9184 219.784 13.8616V6.51013H224ZM216.233 23.4879C217.213 23.4879 218.045 23.1458 218.729 22.4615C219.432 21.7772 219.784 20.9357 219.784 19.937C219.784 18.9383 219.432 18.0968 218.729 17.4125C218.045 16.7097 217.213 16.3584 216.233 16.3584C215.252 16.3584 214.411 16.7097 213.708 17.4125C213.024 18.0968 212.682 18.9383 212.682 19.937C212.682 20.9357 213.024 21.7772 213.708 22.4615C214.411 23.1458 215.252 23.4879 216.233 23.4879Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="29"
          viewBox="0 0 39 29"
          fill="none"
        >
          <path
            d="M7.84724 12.7463C6.22175 13.155 4.80155 14.143 3.8535 15.5245C2.90547 16.906 2.4948 18.5859 2.69866 20.2487C2.90255 21.9115 3.70693 23.4426 4.9607 24.5544C6.21446 25.6663 7.83129 26.2823 9.50743 26.2867H28.4126C29.6261 26.2859 30.8255 26.0282 31.9323 25.5307C33.0387 25.0331 34.0274 24.307 34.833 23.4001C35.6387 22.4932 36.2428 21.426 36.6061 20.2689C36.9692 19.1117 37.0831 17.8908 36.9403 16.6865C36.7971 15.4822 36.4007 14.3218 35.7767 13.2817C35.1527 12.2416 34.3153 11.3454 33.3199 10.652C32.3242 9.95869 31.1931 9.48392 30.0007 9.25897C28.8083 9.03403 27.5818 9.06404 26.4018 9.34699M26.4018 9.34699L24.116 9.9688M26.4018 9.34699C25.8144 7.02223 24.3645 5.0077 22.346 3.71173C20.3275 2.41579 17.8915 1.93537 15.5318 2.3679C13.172 2.80046 11.0651 4.11354 9.63817 6.04105C8.2112 7.96855 7.57097 10.3662 7.84724 12.748C7.84724 12.748 8.11019 14.263 8.64813 15.1218"
            stroke="white"
            stroke-width="3.62834"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default LogoActive;
