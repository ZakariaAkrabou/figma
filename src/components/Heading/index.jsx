import React from "react";

const sizes = {
  "3xl": "text-[29px] font-bold md:text-[27px] sm:text-[25px]",
  "2xl": "text-[25px] font-bold md:text-[23px] sm:text-[21px]",
  "5xl": "text-[51px] font-bold md:text-[43px] sm:text-[37px]",
  xl: "text-[21px] font-bold",
  "4xl": "text-[50px] font-bold md:text-[46px] sm:text-[40px]",
  "6xl": "text-[58px] font-bold md:text-[50px] sm:text-[44px]",
  s: "text-[17px] font-bold",
  md: "text-lg font-bold",
  xs: "text-xs font-bold",
  lg: "text-xl font-semibold",
};

const Heading = ({ children, className = "", size = "3xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
