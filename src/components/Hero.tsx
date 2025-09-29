import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import rakestarLogo from "@/assets/rakestar-logo.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo Animation */}
          <div className="mb-8 fade-in-up">
            <img 
              src={rakestarLogo} 
              alt="Rakestar Group" 
              className="h-20 w-auto mx-auto mb-6 animate-float"
            />
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 fade-in-up stagger-1">
            Empowering Progress Through
            <span className="block text-gradient mt-2">
              Integrated Excellence
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed fade-in-up stagger-2 max-w-3xl mx-auto">
            Rakestar Group delivers comprehensive solutions across logistics, finance, legal, ICT, agriculture, mining, and translation services to drive sustainable growth worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 fade-in-up stagger-3">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 hover-lift hover-glow group">
              Discover Our Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 group"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center fade-in-up stagger-4">
            <div className="group hover-lift">
              <div className="text-4xl font-bold text-gradient mb-2">7+</div>
              <div className="text-primary-foreground/80">Core Service Areas</div>
            </div>
            <div className="group hover-lift">
              <div className="text-4xl font-bold text-gradient mb-2">Global</div>
              <div className="text-primary-foreground/80">Market Reach</div>
            </div>
            <div className="group hover-lift">
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-primary-foreground/80">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up stagger-5">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;