import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface PaymentSuccessOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaymentSuccessOverlay = ({
  isOpen,
  onClose,
}: PaymentSuccessOverlayProps) => {
  const { toast } = useToast();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center justify-center space-y-4 p-6">
          <div className="rounded-full bg-[#F2FCE2] p-3">
            <CheckCircle className="h-6 w-6 text-[#9b87f5]" />
          </div>
          <h2 className="text-2xl font-semibold text-[#1A1F2C]">
            Payment Successful!
          </h2>
          <p className="text-center text-sm text-[#6B7280]">
            Thank you for your purchase. Your payment has been processed successfully.
          </p>
          <Button
            onClick={() => {
              onClose();
              toast({
                title: "Order confirmed",
                description: "Check your email for the receipt",
              });
            }}
            className="bg-[#9b87f5] hover:bg-[#8b77e5] text-white"
          >
            Continue Shopping
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};