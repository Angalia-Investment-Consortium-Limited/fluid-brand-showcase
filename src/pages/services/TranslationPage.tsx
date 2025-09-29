import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Languages, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import translationHero from "@/assets/translation-hero.jpg";

const TranslationPage = () => {
  const services = [
    "Document Translation",
    "Interpretation Services", 
    "Localization",
    "Multilingual Support",
    "Technical Translation",
    "Legal Translation",
    "Medical Translation",
    "Website Translation"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={translationHero} 
            alt="Translation Services" 
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
              <Languages className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">
              Translation <span className="text-gradient">Services</span>
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mb-8 fade-in-up stagger-2">
            Professional language translation services bridging communication barriers across global markets with precision, cultural sensitivity, and expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-3">
            <Button size="lg" className="hover-lift">
              Get Translation Quote
            </Button>
            <Button size="lg" variant="outline" className="hover-lift">
              Our Languages
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-center mb-16 fade-in-up">
            Our Translation Services
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
                <h3 className="font-display text-2xl font-bold mb-6 text-foreground">Document Translation</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Accurate, culturally appropriate translation of business documents, contracts, reports, and technical materials by certified professional linguists with subject matter expertise.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Business document translation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Certified translation services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Technical manual translation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="fade-in-right">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold mb-6 text-foreground">Interpretation Services</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Professional interpretation services for conferences, meetings, negotiations, and events. Our interpreters ensure clear, accurate communication in real-time settings.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Simultaneous interpretation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Consecutive interpretation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Remote interpretation services</span>
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
              Break Down Language Barriers
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Connect with global markets through our professional translation and interpretation services that ensure your message is understood worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover-lift">
                Request Quote
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Language Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TranslationPage;