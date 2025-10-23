import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Languages, FileText, Mic, Globe, Users, BookOpen, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import translationHero from "@/assets/translation-hero.jpg";

const TranslationPage = () => {
  const features = [
    {
      icon: FileText,
      title: "Document Translation",
      description: "Professional translation of business documents, contracts, and technical materials."
    },
    {
      icon: Mic,
      title: "Interpretation Services",
      description: "Real-time interpretation for conferences, meetings, and business negotiations."
    },
    {
      icon: Globe,
      title: "Localization",
      description: "Cultural adaptation of content for specific markets and regions."
    },
    {
      icon: Users,
      title: "Multilingual Support",
      description: "Comprehensive language support across multiple languages and dialects."
    },
    {
      icon: BookOpen,
      title: "Technical Translation",
      description: "Specialized translation for technical, legal, and medical documents."
    },
    {
      icon: Languages,
      title: "Language Consulting",
      description: "Strategic language consulting for international business expansion."
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
            <span className="text-foreground">Translation Services</span>
          </nav>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${translationHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-background/60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Languages className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
              Translation <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Professional language translation services bridging communication barriers across global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-lift">
                Get Translation Quote
              </Button>
              <Button size="lg" variant="outline" className="hover-lift">
                Language Expertise
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
              Global <span className="text-gradient">Communication</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Breaking down language barriers with professional translation and interpretation services.
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
              Your Global <span className="text-gradient">Language Partner</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Native Translators</h3>
                  <p className="text-muted-foreground">Professional linguists who are native speakers in their target languages.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cultural Expertise</h3>
                  <p className="text-muted-foreground">Deep understanding of cultural nuances for accurate localization.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Fast Turnaround</h3>
                  <p className="text-muted-foreground">Quick delivery without compromising quality or accuracy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">50+ Languages</h3>
                  <p className="text-muted-foreground">Comprehensive language coverage across global markets.</p>
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
              Ready to Expand Globally?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let our language experts help you communicate effectively across cultures and markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button size="lg" variant="secondary" className="hover-lift">
                  Language Assessment
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

export default TranslationPage;