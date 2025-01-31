import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/home/Hero";
import { PaymentSuccessOverlay } from "@/components/PaymentSuccessOverlay";
import { useState } from "react";

const Index = () => {
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

  const handleBuyNowClick = () => {
    setShowPaymentSuccess(true);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <Hero onBuyNowClick={handleBuyNowClick} />
      <PaymentSuccessOverlay
        isOpen={showPaymentSuccess}
        onClose={() => setShowPaymentSuccess(false)}
      />
    </main>
  );
};

export default Index;