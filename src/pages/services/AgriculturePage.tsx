import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wheat, Leaf, Sprout, Tractor, Sun, Droplets } from "lucide-react";
import agricultureHero from "@/assets/agriculture-hero.jpg";

const AgriculturePage = () => {
  const features = [
    {
      icon: Leaf,
      title: "Sustainable Farming",
      description: "Eco-friendly farming practices that protect the environment and ensure long-term productivity."
    },
    {
      icon: Sprout,
      title: "Crop Management",
      description: "Advanced crop management techniques to maximize yield and quality."
    },
    {
      icon: Tractor,
      title: "Agricultural Technology",
      description: "Modern farming equipment and precision agriculture technologies."
    },
    {
      icon: Sun,
      title: "Climate Solutions",
      description: "Climate-smart agriculture practices adapted to changing environmental conditions."
    },
    {
      icon: Droplets,
      title: "Irrigation Systems",
      description: "Efficient water management and irrigation solutions for optimal crop growth."
    },
    {
      icon: Wheat,
      title: "Supply Chain Optimization",
      description: "Streamlined agricultural supply chain from farm to market."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${agricultureHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-background/60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Wheat className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
              Agriculture <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Innovative agricultural practices and solutions to enhance productivity and sustainability in farming operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-lift">
                Farming Consultation
              </Button>
              <Button size="lg" variant="outline" className="hover-lift">
                Sustainable Practices
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Agricultural <span className="text-gradient">Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sustainable farming solutions that increase productivity while protecting our environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="group hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-16 text-center text-primary-foreground">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Revolutionize Your Farm?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join the sustainable agriculture movement with our innovative farming solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover-lift">
                Agricultural Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Sustainability Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgriculturePage;