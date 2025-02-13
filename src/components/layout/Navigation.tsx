
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LoginForm } from "@/components/auth/LoginForm";

export const Navigation = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <nav className="w-full py-4 px-6 bg-background border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/ea112c0c07e91f2c4b1927f47794be28a8868243274a24ce17b8f4697b2ae9aa?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/ea112c0c07e91f2c4b1927f47794be28a8868243274a24ce17b8f4697b2ae9aa?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/ea112c0c07e91f2c4b1927f47794be28a8868243274a24ce17b8f4697b2ae9aa?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/ea112c0c07e91f2c4b1927f47794be28a8868243274a24ce17b8f4697b2ae9aa?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/ea112c0c07e91f2c4b1927f47794be28a8868243274a24ce17b8f4697b2ae9aa?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/ea112c0c07e91f2c4b1927f47794be28a8868243274a24ce17b8f4697b2ae9aa?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/ea112c0c07e91f2c4b1927f47794be28a8868243274a24ce17b8f4697b2ae9aa?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/ea112c0c07e91f2c4b1927f47794be28a8868243274a24ce17b8f4697b2ae9aa?placeholderIfAbsent=true"
              alt="Logo"
              className="h-8 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/category" className="text-foreground hover:text-primary transition-colors">
              Category
            </Link>
            <Link to="/brands" className="text-foreground hover:text-primary transition-colors">
              Brands
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/custom" className="text-foreground hover:text-primary transition-colors">
              Custom
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/6456b0f83bf71aff282c4f1420e66024e911f577f2ab3bd7aa659dc011f1df5a?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/6456b0f83bf71aff282c4f1420e66024e911f577f2ab3bd7aa659dc011f1df5a?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/6456b0f83bf71aff282c4f1420e66024e911f577f2ab3bd7aa659dc011f1df5a?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/6456b0f83bf71aff282c4f1420e66024e911f577f2ab3bd7aa659dc011f1df5a?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/6456b0f83bf71aff282c4f1420e66024e911f577f2ab3bd7aa659dc011f1df5a?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/6456b0f83bf71aff282c4f1420e66024e911f577f2ab3bd7aa659dc011f1df5a?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/6456b0f83bf71aff282c4f1420e66024e911f577f2ab3bd7aa659dc011f1df5a?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/6456b0f83bf71aff282c4f1420e66024e911f577f2ab3bd7aa659dc011f1df5a?placeholderIfAbsent=true"
            alt="User"
            className="h-6 w-6"
          />
          <Button 
            variant="ghost" 
            className="text-foreground hover:text-primary transition-colors"
            onClick={() => setShowLoginForm(true)}
          >
            Login/Sign Up
          </Button>
          <LoginForm 
            isOpen={showLoginForm} 
            onClose={() => setShowLoginForm(false)} 
          />
        </div>
      </div>
    </nav>
  );
};
