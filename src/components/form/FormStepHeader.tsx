import React from "react";

const FormStepHeader = ({ title }: { title: string }) => {
  return (
    <h3 className="text-2xl lg:text-5xl font-semibold text-[#430381] mb-4">
      {title}
    </h3>
  );
};

export default FormStepHeader;
