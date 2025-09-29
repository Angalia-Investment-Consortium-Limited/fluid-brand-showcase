import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calculator, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import financialHero from "@/assets/financial-hero.jpg";

const FinancialPage = () => {
  const services = [
    "Corporate Finance",
    "Investment Advisory", 
    "Risk Management",
    "Financial Planning",
    "Mergers & Acquisitions",
    "Capital Markets",
    "Treasury Services",
    "Financial Analysis"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={financialHero} 
            alt="Financial Consulting" 
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
              <Calculator className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">
              Financial <span className="text-gradient">Consulting</span>
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mb-8 fade-in-up stagger-2">
            Expert guidance and strategic financial solutions for individuals, corporations, and institutions worldwide. Navigate complex financial landscapes with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-3">
            <Button size="lg" className="hover-lift">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="hover-lift">
              View Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-center mb-16 fade-in-up">
            Our Financial Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={service} className={`group hover-lift fade-in-up stagger-${index + 1}`}>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Detailed Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="fade-in-left">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold mb-6 text-foreground">Corporate Finance</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Strategic financial advisory services to help corporations optimize their capital structure, manage financial risks, and achieve sustainable growth through expert guidance and market insights.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Capital structure optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Financial modeling and valuation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Strategic financial planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="fade-in-right">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold mb-6 text-foreground">Investment Advisory</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive investment strategies tailored to your risk profile and financial objectives. Our experienced advisors provide insights across diverse asset classes and markets.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Portfolio management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Market analysis and research</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Risk assessment</span>
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
              Ready to Strengthen Your Financial Position?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Connect with our financial experts to develop strategies that align with your goals and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover-lift">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Download Guide
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