import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Monitor, Code, Cloud, Smartphone, Database, Cpu } from "lucide-react";
import ictHero from "@/assets/ict-hero.jpg";

const ICTPage = () => {
  const features = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies and best practices."
    },
    {
      icon: Database,
      title: "System Integration",
      description: "Seamless integration of different systems and platforms for optimal performance."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses."
    },
    {
      icon: Smartphone,
      title: "Digital Transformation",
      description: "Complete digital transformation strategies to modernize your business operations."
    },
    {
      icon: Cpu,
      title: "IT Infrastructure",
      description: "Robust IT infrastructure design and implementation for reliable operations."
    },
    {
      icon: Monitor,
      title: "IT Consulting",
      description: "Strategic IT consulting to align technology with your business objectives."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ictHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Monitor className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
              ICT <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Cutting-edge technology solutions including software development, system integration, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-lift">
                Discuss Your Project
              </Button>
              <Button size="lg" variant="outline" className="hover-lift">
                View Portfolio
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
              Technology <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced ICT solutions designed to drive innovation and accelerate your digital journey.
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
              Ready to Transform Your Technology?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let our ICT experts help you leverage technology for competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover-lift">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Technology Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ICTPage;