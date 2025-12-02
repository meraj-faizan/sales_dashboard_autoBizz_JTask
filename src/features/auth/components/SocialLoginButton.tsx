import React from "react";
import { Button } from "@/components/ui/button";

interface SocialLoginButtonProps {
  buttonText: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const SocialLoginButton = ({
  buttonText,
  icon,
  onClick,
}: SocialLoginButtonProps) => {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 border-ash-gray"
      size={"lg"}
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span className="font-medium">{buttonText}</span>
    </Button>
  );
};

export default SocialLoginButton;
