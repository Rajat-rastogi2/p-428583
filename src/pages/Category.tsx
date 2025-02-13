
import { Navigation } from "@/components/layout/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Category = () => {
  const clothingItems = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: "$29.99",
      image: "https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/5442f75dd49c43282d38170be254d1e783379a9925819e3560ac6b05c74452d5",
      category: "T-Shirts"
    },
    {
      id: 2,
      name: "Denim Jeans",
      price: "$79.99",
      image: "https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/ea112c0c07e91f2c4b1927f47794be28a8868243274a24ce17b8f4697b2ae9aa",
      category: "Pants"
    },
    {
      id: 3,
      name: "Casual Blazer",
      price: "$129.99",
      image: "https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/6456b0f83bf71aff282c4f1420e66024e911f577f2ab3bd7aa659dc011f1df5a",
      category: "Outerwear"
    },
    {
      id: 4,
      name: "Summer Dress",
      price: "$89.99",
      image: "https://cdn.builder.io/api/v1/image/assets/0b494abc02e44949abf00b291e95d7bd/5442f75dd49c43282d38170be254d1e783379a9925819e3560ac6b05c74452d5",
      category: "Dresses"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Clothing Catalog</h1>
        
        <div className="flex flex-wrap gap-6 mb-8">
          {["All", "T-Shirts", "Pants", "Outerwear", "Dresses"].map((category) => (
            <Button
              key={category}
              variant="outline"
              className="hover:bg-[#9b87f5] hover:text-white"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {clothingItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                  <span className="font-bold text-[#9b87f5]">{item.price}</span>
                </div>
                <Button 
                  className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] mt-2"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Category;
