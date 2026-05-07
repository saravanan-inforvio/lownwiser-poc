
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, PiggyBank } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      title: "Housing Loan",
      icon: Home,
      description:
        "To meet all your housing needs i.e. we offer loans for purchase of house construction of house plot purchase + construction extension of house renovation and super finishing work.",
    },
    {
      title: "Non-Housing Loan",
      icon: Building2,
      description:
        "We offer loans to meet your business requirements i.e. to purchase a shop or commercial plots, we also offer loans to meet your personal requirements like marriage education etc.",
    },
    {
      title: "Deposit Scheme",
      icon: PiggyBank,
      description:
        "Investment scheme wherein you invest an amount for a fixed period and a predetermined interest rate. The period of investment or tenure can range from 1 year upto 10 years.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Products Offering
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.title}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <product.icon className="h-6 w-6 text-primary" />
                  <span>{product.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
