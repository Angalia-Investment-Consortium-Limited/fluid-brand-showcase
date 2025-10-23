import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Monitor, Code, Cloud, Smartphone, Database, Cpu, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
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
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 border-b">
        <div className="container mx-auto px-6">
          <nav className="flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/#services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-foreground">ICT Solutions</span>
          </nav>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ictHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-background/60"></div>
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

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Technology <span className="text-gradient">Innovation Leaders</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cutting-Edge Technology</h3>
                  <p className="text-muted-foreground">Leveraging the latest technologies and frameworks for optimal performance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Agile Development</h3>
                  <p className="text-muted-foreground">Fast, iterative development process with continuous delivery and improvement.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Scalable Solutions</h3>
                  <p className="text-muted-foreground">Built to grow with your business from startup to enterprise scale.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                  <p className="text-muted-foreground">Round-the-clock technical support and system monitoring.</p>
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
              Ready to Transform Your Technology?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let our ICT experts help you leverage technology for competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button size="lg" variant="secondary" className="hover-lift">
                  Start Your Project
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

export default ICTPage;