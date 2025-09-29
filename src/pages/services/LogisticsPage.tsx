import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logisticsHero from "@/assets/logistics-hero.jpg";

const LogisticsPage = () => {
  const features = [
    "Supply Chain Management",
    "Warehousing & Distribution", 
    "Transportation Management",
    "Customs & Compliance",
    "Inventory Optimization",
    "Last-Mile Delivery",
    "Cross-Border Solutions",
    "Real-Time Tracking"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={logisticsHero} 
            alt="Logistics Solutions" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-subtle"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 fade-in-up">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-6 fade-in-up stagger-1">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Truck className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">
              Logistics <span className="text-gradient">Solutions</span>
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mb-8 fade-in-up stagger-2">
            End-to-end supply chain optimization, warehousing, distribution, and transportation management with customs compliance for seamless global operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-3">
            <Button size="lg" className="hover-lift">
              Get Quote
            </Button>
            <Button size="lg" variant="outline" className="hover-lift">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-center mb-16 fade-in-up">
            Our Logistics Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={feature} className={`group hover-lift fade-in-up stagger-${index + 1}`}>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground">{feature}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Detailed Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="fade-in-left">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold mb-6 text-foreground">Supply Chain Management</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our comprehensive supply chain solutions optimize every aspect of your logistics operations, from procurement to final delivery. We leverage advanced analytics and cutting-edge technology to streamline processes and reduce costs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Demand forecasting and planning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Supplier relationship management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Risk assessment and mitigation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="fade-in-right">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold mb-6 text-foreground">Transportation Management</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Advanced transportation solutions that ensure timely, cost-effective delivery across all modes of transport. Our network spans global routes with real-time tracking and optimization capabilities.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Multi-modal transportation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Route optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Real-time shipment tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center fade-in-up">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Optimize Your Logistics?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let our logistics experts design a custom solution that drives efficiency and reduces costs for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover-lift">
                Contact Our Team
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Request Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LogisticsPage;