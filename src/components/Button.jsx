import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Button = () => {
  return (
    <button href="#" class="button1 text-sm">
      <span class="button1__icon-wrapper">
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="button1__icon-svg"
          width="8"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>

        <svg
          viewBox="0 0 14 15"
          fill="none"
          width="8"
          xmlns="http://www.w3.org/2000/svg"
          class="button1__icon-svg button1__icon-svg--copy"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
      View Case Study
    </button>
  );
};

export default Button;
