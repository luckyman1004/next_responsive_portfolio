import React from "react";

const Year = (props) => {
  return (
    <div>
      <span>{props.title}</span>
      <svg
        width="208"
        height="6"
        viewBox="0 0 208 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="TimeLineStyles__CarouselItemImg-vs8qb6-4 nbUBs"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
          fill="url(#paint0_linear)"
          fill-opacity="0.33"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="-4.30412e-10"
            y1="0.5"
            x2="208"
            y2="0.500295"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white"></stop>
            <stop offset="0.79478" stop-color="white" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      <p>{props.para}</p>
    </div>
  );
};

export default Year;
