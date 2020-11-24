import rick from "../../img/Rick.png";

export const RickIcon = () => {
  return <img src={rick} alt="Rick" width="50px" height="50px" />;
};

export const PokeIcon = () => {
  return (
    <svg
      enable-background="new 0 0 512 512"
      height="50px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width="50px"
      pace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
    >
      <circle cx="256" cy="256.001" fill="#040403" r="249.766" />
      <g>
        <path
          d="M490.017,254c0,129.243-104.772,234.017-234.017,234.017S21.983,383.243,21.983,254"
          fill="#E0E4E8"
        />
        <path
          d="M21.983,258C21.983,128.756,126.756,23.983,256,23.983S490.017,128.756,490.017,258"
          fill="#E64C3C"
        />
      </g>
      <rect fill="#040404" height="107" width="484" x="14" y="203" />
      <circle cx="256" cy="256" r="123.772" />
      <circle cx="256" cy="256" fill="#E0E4E8" r="75.024" />
      <circle cx="256" cy="256" r="51.025" />
      <circle cx="256" cy="256" fill="#E0E4E8" r="36.026" />
    </svg>
  );
};
