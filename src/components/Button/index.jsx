import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[7px]",
};
const variants = {
  fill: {
    blue_300: "bg-blue-300 shadow-md text-white-A700",
    gray_600: "bg-gray-600 shadow-lg",
    blue_300_e8: "bg-blue-300_e8 shadow-sm text-white-A700",
  },
  gradient: {
    blue_300_blue_300: "bg-gradient text-white-A700",
  },
};
const sizes = {
  xl: "h-[56px] pl-[22px] pr-[35px] text-2xl",
  lg: "h-[52px] px-[33px] text-base",
  "3xl": "h-[62px] px-[15px]",
  xs: "h-[35px] px-[22px] text-base",
  "2xl": "h-[56px] px-[35px] text-base",
  sm: "h-[43px] pl-[21px] pr-[35px] text-[15px]",
  md: "h-[43px] pl-[13px] pr-[35px] text-xs",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "blue_300",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xl", "lg", "3xl", "xs", "2xl", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "gradient"]),
  color: PropTypes.oneOf(["blue_300", "gray_600", "blue_300_e8", "blue_300_blue_300"]),
};

export { Button };
