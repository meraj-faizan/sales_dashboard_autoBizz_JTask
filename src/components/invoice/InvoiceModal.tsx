"use client";
import { InvoiceDetails } from "@/components/invoice/InvoiceDetails";
import { Dialog, DialogContent } from "@/components/ui/dialog";
type TInvoiceModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export function InvoiceModal({ open, setOpen }: TInvoiceModalProps) {
  const handleDownloadReceipt = () => {
    console.log("Downloading receipt...");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-xl h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <InvoiceDetails onDownload={handleDownloadReceipt} />
      </DialogContent>
    </Dialog>
  );
}
