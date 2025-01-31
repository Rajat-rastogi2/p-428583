import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/home/Hero";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />
    </main>
  );
};

export default Index;