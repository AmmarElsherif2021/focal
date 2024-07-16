import React from "react";
import emailIcon from "../../assets/email.svg";
export default function NavIcons() {
  let iconsDivStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
    marginRight: 0,
  };

  let iconStyle = {
    marginLeft: "1.5vw",
    padding: 0,
  };
  return (
    <div style={iconsDivStyle} className="lg: relative">
      {/*email icon */}
      <a
        className="hidden  lg:flex  mr-1 items-center hover:text-gray-200  "
        href="#"
        style={iconStyle}
      >
        <svg
          width="48px"
          height="38px"
          viewBox="0 0 76 76"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          baseProfile="full"
          enable-background="new 0 0 76.00 76.00"
          xml:space="preserve"
          fill="#ffffff"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill="#ffffff"
              fill-opacity="1"
              stroke-width="0.2"
              stroke-linejoin="round"
              d="M 18,23L 58,23L 58,53L 18,53L 18,23 Z M 22,49L 54,49L 54,31L 38,43L 22,31L 22,49 Z M 23,27L 38,38L 53,27L 23,27 Z "
            ></path>{" "}
          </g>
        </svg>
      </a>

      {/*search icon */}
      <a
        className="hidden lg:flex mr-1 hover:text-gray-200"
        href="#"
        style={iconStyle}
      >
        <svg
          width="20px"
          height="20uiTaskpx"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </a>
      {/*profile icon */}
      <a
        className="hidden lg:flex mr-1 items-center hover:text-gray-200"
        href="#"
        style={iconStyle}
      >
        <svg
          fill="#ffffff"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM3,22V18a5.006,5.006,0,0,1,5-5h8a5.006,5.006,0,0,1,5,5v4a1,1,0,0,1-2,0V18a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v4a1,1,0,0,1-2,0Z"></path>
          </g>
        </svg>
      </a>
      {/* bag icon */}
      <a
        className="flex items-center hover:text-gray-200"
        href="#"
        style={iconStyle}
      >
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#ffffff"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>shopping_bag_2_line</title>{" "}
            <g
              id="页面-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              {" "}
              <g
                id="Business"
                transform="translate(-960.000000, 0.000000)"
                fill-rule="nonzero"
              >
                {" "}
                <g
                  id="shopping_bag_2_line"
                  transform="translate(960.000000, 0.000000)"
                >
                  {" "}
                  <path
                    d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                    id="MingCute"
                    fill-rule="nonzero"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M18.0606,3 C19.06399,3 19.9030348,3.74110593 20.040846,4.71894978 L20.0567,4.87524 L20.9317,18.8752 C21.0005696,19.9765391 20.1669484,20.91502 19.0846641,20.9945451 L18.9356,21 L5.06453,21 C3.96104826,21 3.07643699,20.1094034 3.06457634,19.0243078 L3.06843,18.8752 L3.94343,4.87524 C4.006016,3.8738735 4.79802055,3.08269925 5.78255543,3.00608524 L5.93953,3 L18.0606,3 Z M18.0606,5 L5.93953,5 L5.06453,19 L18.9356,19 L18.0606,5 Z M15,7 C15.5523,7 16,7.44772 16,8 C16,10.2091 14.2091,12 12,12 C9.79086,12 8,10.2091 8,8 C8,7.44772 8.44772,7 9,7 C9.55228,7 10,7.44772 10,8 C10,9.10457 10.8954,10 12,10 C13.0543909,10 13.9181678,9.18412267 13.9945144,8.14926241 L14,8 C14,7.44772 14.4477,7 15,7 Z"
                    id="形状"
                    fill="#ffffff"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <span className="flex absolute -mt-5 ml-4">
          <span className="absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
        </span>
      </a>
    </div>
  );
}
