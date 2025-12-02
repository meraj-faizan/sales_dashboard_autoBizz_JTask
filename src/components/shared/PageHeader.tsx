import { cn } from "@/lib/utils";
import React from "react";
type PageHeaderProps = {
  title: string;
  className?: string;
};
const PageHeader = ({ title, className }: PageHeaderProps) => {
  return (
    <h1
      className={cn(
        "text-rich-black text-xl lg:text-4xl font-semibold",
        className
      )}
    >
      {title}
    </h1>
  );
};

export default PageHeader;
