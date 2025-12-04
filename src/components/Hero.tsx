import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import rakestarLogo from "@/assets/rakestar-logo.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#041950]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo Animation */}
          {/* <div className="mb-8 fade-in-up">
            <img
              src={rakestarLogo}
              alt="Rakestar Group"
              className="h-20 w-auto mx-auto mb-6 animate-float"
            />
          </div> */}

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 fade-in-up stagger-1">
            Empowering Progress Through
            <span className="block text-gradient mt-2">
              Integrated Excellence
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed fade-in-up stagger-2 max-w-3xl mx-auto">
            Rakestar Group delivers comprehensive solutions across logistics,
            finance, legal, ICT, agriculture, mining, and translation services
            to drive sustainable growth worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 fade-in-up stagger-3">
            <a href="#services">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2 hover-lift hover-glow group"
              >
                Discover Our Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
