"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

type TInvoiceDetailsProps = {
  onDownload?: () => void;
  className?: string;
  leftCruveBg?: string;
  rightCruveBg?: string;
};

export function InvoiceDetails({
  onDownload,
  className,
  leftCruveBg = "bg-black/50",
  rightCruveBg = "bg-black/50",
}: TInvoiceDetailsProps) {
  const handleDownload = () => {
    if (onDownload) onDownload();
  };

  return (
    <div className={cn("flex flex-col gap-3 lg:gap-5", className)}>
      {/* Header */}
      <div className="flex flex-col items-center gap-2 lg:gap-4">
        <Image src="/invoice-icon.png" height={75} width={75} alt="Invoice" />
        <h1 className="text-xl lg:text-2xl font-bold text-accent text-balance">
          Your Payment is Complete!
        </h1>
      </div>

      {/* Dashed Line */}
      <div className="relative w-full">
        <div className="border-t border-dashed border-border-gray"></div>
        <span
          className={cn(
            "absolute -left-[34px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full",
            leftCruveBg
          )}
        ></span>
        <span
          className={cn(
            "absolute -right-[34px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full",
            rightCruveBg
          )}
        ></span>
      </div>

      {/* Payment Status */}
      <div className="space-y-1 md:space-y-2 lg:space-y-3 text-[16px] text-rich-black">
        <h2 className="text-sm md:text-lg lg:text-xl font-semibold">
          Payment Status
        </h2>

        <div className="space-y-1 lg:space-y-3">
          <div className="flex justify-between text-sm">
            <span>TRANSACTION ID</span>
            <span className="font-medium">345000067889</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>PAYMENT METHOD</span>
            <span className="font-medium">VISA DEBIT CARD</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>PAYMENT STATUS</span>
            <span className="font-medium text-green-600 flex items-center gap-1">
              SUCCESS ✓
            </span>
          </div>
        </div>
      </div>

      {/* Payment Amount */}
      <div className="space-y-1 md:space-y-2 lg:space-y-3">
        <h2 className="text-sm md:text-lg lg:text-xl font-semibold">
          Payment Amount
        </h2>

        <div className="space-y-1 lg:space-y-3">
          <div className="flex justify-between text-sm">
            <span>ONE TIME PAYMENT</span>
            <span className="font-medium">£99.90 GBP</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>LOCALITY VAT+</span>
            <span className="font-medium">£10 GBP</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>ADDITIONAL</span>
            <span className="font-medium">£0.0 GBP</span>
          </div>
        </div>
      </div>

      <hr className="border border-border-gray" />

      {/* Total */}
      <div className="flex justify-between items-center">
        <span className="text-sm md:text-lg lg:text-xl font-bold">TOTAL</span>
        <span className="text-sm md:text-lg lg:text-xl font-bold">
          £109.9 GBP
        </span>
      </div>

      {/* Download Button */}
      <Button
        onClick={handleDownload}
        variant="subtle"
        size="xl"
        className="w-full"
      >
        <Download className="w-4 h-4" />
        Download Receipt
      </Button>
    </div>
  );
}
