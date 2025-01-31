import { Button } from "@/components/ui/button";

interface HeroProps {
  onBuyNowClick: () => void;
}

export const Hero = ({ onBuyNowClick }: HeroProps) => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/5442f75dd49c43282d38170be254d1e783379a9925819e3560ac6b05c74452d5?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/5442f75dd49c43282d38170be254d1e783379a9925819e3560ac6b05c74452d5?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/5442f75dd49c43282d38170be254d1e783379a9925819e3560ac6b05c74452d5?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/5442f75dd49c43282d38170be254d1e783379a9925819e3560ac6b05c74452d5?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/5442f75dd49c43282d38170be254d1e783379a9925819e3560ac6b05c74452d5?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/5442f75dd49c43282d38170be254d1e783379a9925819e3560ac6b05c74452d5?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/5442f75dd49c43282d38170be254d1e783379a9925819e3560ac6b05c74452d5?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/5442f75dd49c43282d38170be254d1e783379a9925819e3560ac6b05c74452d5?placeholderIfAbsent=true"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="relative container mx-auto px-6 py-12">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Style in your own way
          </h1>
          <p className="text-xl mb-8 text-muted-foreground">
            Tailormade: Redefining Style, One Stitch at a Time.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8"
            onClick={onBuyNowClick}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
};