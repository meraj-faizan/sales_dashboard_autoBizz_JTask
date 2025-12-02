import { cn } from "@/lib/utils";
import React from "react";

type AuthFormHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};
const AuthFormHeader = ({
  title,
  subtitle,
  className,
}: AuthFormHeaderProps) => {
  return (
    <div className={cn("space-y-2 text-center", className)}>
      <h1 className="text-3xl font-bold text-accent">{title}</h1>
      {subtitle && <p className="text-lg font-[400] text-muted">{subtitle}</p>}
    </div>
  );
};

export default AuthFormHeader;
