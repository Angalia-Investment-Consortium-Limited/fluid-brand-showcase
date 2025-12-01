import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Truck, 
  Calculator, 
  Scale, 
  Monitor, 
  Wheat, 
  Pickaxe, 
  Languages,
  ArrowRight,
  Sparkles
} from "lucide-react";
import logisticsHero from "@/assets/logistics-hero.jpg";
import financialHero from "@/assets/financial-hero.jpg";
import legalHero from "@/assets/legal-hero.jpg";
import ictHero from "@/assets/ict-hero.jpg";
import agricultureHero from "@/assets/agriculture-hero.jpg";
import miningHero from "@/assets/mining-hero.jpg";
import translationHero from "@/assets/translation-hero.jpg";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Logistics Solutions",
      description: "End-to-end supply chain optimization, warehousing, distribution, and transportation management with customs compliance.",
      features: ["Supply Chain Management", "Warehousing & Distribution", "Transportation Management", "Customs & Compliance"],
      link: "/services/logistics",
      gradient: "from-blue-500/10 to-cyan-500/10",
      image: logisticsHero
    },
    {
      icon: Calculator,
      title: "Financial Consulting",
      description: "Expert guidance and strategic financial solutions for individuals, corporations, and institutions worldwide.",
      features: ["Corporate Finance", "Investment Advisory", "Risk Management", "Financial Planning"],
      link: "/services/financial",
      gradient: "from-green-500/10 to-emerald-500/10",
      image: financialHero
    },
    {
      icon: Scale,
      title: "Legal Services",
      description: "Comprehensive legal counsel and representation across various practice areas with international expertise.",
      features: ["Corporate Law", "Commercial Litigation", "Regulatory Compliance", "International Law"],
      link: "/services/legal",
      gradient: "from-purple-500/10 to-violet-500/10",
      image: legalHero
    },
    {
      icon: Monitor,
      title: "ICT Solutions",
      description: "Cutting-edge technology solutions including software development, system integration, and digital transformation.",
      features: ["Software Development", "System Integration", "Cloud Solutions", "Digital Transformation"],
      link: "/services/ict",
      gradient: "from-orange-500/10 to-amber-500/10",
      image: ictHero
    },
    {
      icon: Wheat,
      title: "Agriculture",
      description: "Innovative agricultural practices and solutions to enhance productivity and sustainability in farming operations.",
      features: ["Sustainable Farming", "Crop Management", "Agricultural Technology", "Supply Chain Optimization"],
      link: "/services/agriculture",
      gradient: "from-lime-500/10 to-green-500/10",
      image: agricultureHero
    },
    {
      icon: Pickaxe,
      title: "Mining Operations",
      description: "Responsible mining operations with focus on environmental sustainability and community development.",
      features: ["Sustainable Mining", "Resource Exploration", "Environmental Management", "Community Development"],
      link: "/services/mining",
      gradient: "from-slate-500/10 to-zinc-500/10",
      image: miningHero
    },
    {
      icon: Languages,
      title: "Translation Services",
      description: "Professional language translation services bridging communication barriers across global markets.",
      features: ["Document Translation", "Interpretation Services", "Localization", "Multilingual Support"],
      link: "/services/translation",
      gradient: "from-pink-500/10 to-rose-500/10",
      image: translationHero
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Darker Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-30"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">What We Offer</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions across diverse industries, delivered with expertise and innovation to drive your success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Link 
              key={service.title} 
              to={service.link}
              className={`group hover-lift cursor-pointer fade-in-up stagger-${index + 1}`}
            >
              <Card className="h-full border-2 border-transparent hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-card to-card/80 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20"></div>
                  <div className={`absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-border/50`}>
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardContent className="p-8 bg-card/95 backdrop-blur-sm">
                  <div className="mb-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={feature} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in-up stagger-8">
          <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary to-accent rounded-3xl p-12 md:p-16 text-primary-foreground shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let our experts help you achieve your goals with integrated solutions tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-background text-foreground hover:bg-background/90 hover-lift shadow-xl text-lg px-8 py-6 h-auto"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary-foreground bg-background/10 backdrop-blur-sm text-primary-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover-lift text-lg px-8 py-6 h-auto transition-all"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;