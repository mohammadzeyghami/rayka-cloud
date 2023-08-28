interface Iprops {
  color?: string;
}
const CentosIcon = ({ color = "#14A784" }: Iprops) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
    >
      <path
        d="M23.0333 0.714294L18.1285 5.67484H21.4103V18.7166L23.0333 20.3586L24.6385 18.7362V5.76161H28.0237L23.0333 0.714294ZM6.6075 6.74269L6.60828 15.5751L10.2096 12.0094L18.7581 20.4774H20.3535V19.1593L11.8342 10.5371L15.5886 6.74231H6.60828L6.6075 6.74269ZM17.0772 6.74269L13.3266 10.5367L20.3535 17.648V6.74269H17.0772ZM25.6964 6.82561L25.6956 17.6653L32.7408 10.5374L29.0758 6.82561H25.6964ZM30.9025 7.16613L34.2317 10.5374L25.6968 19.1755V20.5627H27.2254L35.7195 11.9666L39.3876 15.6765V7.16613H30.9025ZM35.7195 13.4757L28.7159 20.5627H39.388V17.184L35.7195 13.4757ZM10.2111 13.5023L6.6075 17.0718V20.4778H17.2528L10.2111 13.5023ZM5.55191 18.1157L0.354004 23.2641L5.55191 28.414V24.8167H18.5043L20.0706 23.2633L18.3255 21.5387H5.5523V18.1154L5.55191 18.1157ZM40.4448 18.2534L40.4432 21.6263H27.665L26.0132 23.2953L27.5134 24.8155H40.3538V28.4302L45.4285 23.2953L40.4448 18.2534ZM6.61022 25.8792L6.611 29.4606L10.2115 33.0302L17.4297 25.8792H6.61022ZM18.9357 25.8792L10.21 34.5199L6.61022 30.9535V39.6987H15.2423L11.533 36.0247L20.3535 27.2898V25.8792H18.9357ZM25.6424 25.8792V27.4892L33.8874 35.651L34.262 36.0262L30.9157 39.3412H39.2959V31.0075L36.0934 34.2523L35.7195 34.6252L27.075 25.8788H25.642L25.6424 25.8792ZM28.5639 25.8792L35.7199 33.1165L39.2963 29.4996V25.8792H28.5639ZM22.8989 26.264L21.4134 27.7349V40.7646H17.8249L22.8989 45.7888L27.9736 40.7646H24.5856V27.9358L22.8989 26.264ZM20.3543 28.7834L13.0413 36.0258L16.7518 39.6995H20.3547L20.3543 28.7834ZM25.6424 28.9809V39.7018H29.0455L32.7571 36.0255L25.6424 28.9809Z"
        fill={color}
      />
    </svg>
  );
};

export default CentosIcon;