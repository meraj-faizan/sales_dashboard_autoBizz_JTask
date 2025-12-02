"use client";
import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  return (
    <Button
      variant="outline"
      className="text-primary border-primary bg-primary/10 hover:bg-primary/20 hover:text-primary "
      onClick={() => window.history.back()}
    >
      <ArrowLeft /> Go Back
    </Button>
  );
};

export default BackButton;
