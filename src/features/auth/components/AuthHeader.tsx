import { Logo } from "@/components/logo/Logo";
import React from "react";

const AuthHeader = () => {
  return (
    <div className="h-[86px] z-10 flex justify-center items-center fixed top-0 w-full bg-white border-b border-ash-gray">
      <Logo />
    </div>
  );
};

export default AuthHeader;
