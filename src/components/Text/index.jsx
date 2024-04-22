import React from "react";

const sizes = {
  xs: "text-xs font-normal",
  lg: "text-lg font-normal",
  s: "text-sm font-normal",
  "2xl": "text-[25px] font-light md:text-[23px] sm:text-[21px]",
  "3xl": "text-[29px] font-medium md:text-[27px] sm:text-[25px]",
  "4xl": "text-[50px] font-light md:text-[46px] sm:text-[40px]",
  xl: "text-[22px] font-medium",
  md: "text-base font-normal",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600_01 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
