import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wheat, Leaf, Sprout, Tractor, Sun, Droplets, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
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
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 border-b">
        <div className="container mx-auto px-6">
          <nav className="flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/#services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-foreground">Agriculture Solutions</span>
          </nav>
        </div>
      </div>
      
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

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Leading <span className="text-gradient">Agricultural Innovation</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Sustainable Practices</h3>
                  <p className="text-muted-foreground">Environmentally responsible farming that preserves soil health and biodiversity.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Increased Yields</h3>
                  <p className="text-muted-foreground">Proven methods to boost crop productivity and farm profitability.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Modern Technology</h3>
                  <p className="text-muted-foreground">Precision agriculture tools including drones, sensors, and data analytics.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
                  <p className="text-muted-foreground">Agricultural specialists with decades of hands-on farming experience.</p>
                </div>
              </div>
            </div>
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
              <Link to="/#contact">
                <Button size="lg" variant="secondary" className="hover-lift">
                  Agricultural Assessment
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgriculturePage;