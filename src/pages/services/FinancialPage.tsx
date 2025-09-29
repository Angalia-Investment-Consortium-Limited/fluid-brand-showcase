import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calculator, TrendingUp, Shield, Users, BarChart3, Briefcase } from "lucide-react";
import financialHero from "@/assets/financial-hero.jpg";

const FinancialPage = () => {
  const features = [
    {
      icon: Briefcase,
      title: "Corporate Finance",
      description: "Strategic financial planning and capital structure optimization for businesses."
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Expert investment guidance and portfolio management services."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies."
    },
    {
      icon: BarChart3,
      title: "Financial Planning",
      description: "Long-term financial planning and wealth management solutions."
    },
    {
      icon: Users,
      title: "Institutional Services",
      description: "Specialized financial services for institutions and corporations."
    },
    {
      icon: Calculator,
      title: "Financial Analysis",
      description: "In-depth financial analysis and performance evaluation."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${financialHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-background/60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Calculator className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
              Financial <span className="text-gradient">Consulting</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Expert guidance and strategic financial solutions for individuals, corporations, and institutions worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-lift">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="hover-lift">
                View Our Expertise
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
              Financial <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive financial services designed to maximize your wealth and minimize risk.
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
              Ready to Secure Your Financial Future?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let our financial experts guide you towards your investment goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover-lift">
                Get Financial Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Download Investment Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinancialPage;