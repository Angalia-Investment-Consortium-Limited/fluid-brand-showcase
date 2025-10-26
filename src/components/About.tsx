import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Lightbulb, Sparkles, TrendingUp, Users } from "lucide-react";
import aboutBackground from "@/assets/about-background.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Animated Background with Image */}
      <div className="absolute inset-0">
        <img 
          src={aboutBackground} 
          alt="About Rakestar Group" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
      </div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Who We Are</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-gradient">Rakestar Group</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A dynamic and diversified organization dedicated to providing comprehensive expert services across key economic sectors.
          </p>
        </div>

        {/* Introduction with Stats */}
        <div className="max-w-6xl mx-auto mb-20 fade-in-up stagger-1">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-elegant hover-lift border border-border/50">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-primary" />
                Our Foundation
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Rakestar Group seamlessly integrates efficient logistics and supply chain management, strategic financial consulting, robust legal counsel, cutting-edge Information and Communication Technology (ICT) solutions, innovative agricultural practices, responsible mining operations, and professional language translation services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our core strength lies in our ability to deliver synergistic, client-focused solutions that drive growth, enhance efficiency, bridge communication barriers, and foster sustainable development for businesses and communities worldwide.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 hover-lift border border-primary/20">
                <div className="text-4xl font-bold text-gradient mb-2">7+</div>
                <div className="text-sm text-muted-foreground">Service Sectors</div>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 hover-lift border border-accent/20">
                <div className="text-4xl font-bold text-gradient mb-2">Global</div>
                <div className="text-sm text-muted-foreground">Reach</div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 hover-lift border border-primary/20">
                <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 hover-lift border border-accent/20">
                <div className="text-4xl font-bold text-gradient mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Commitment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Philosophy Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Mission */}
          <Card className="group hover-lift fade-in-up stagger-2 border-2 border-transparent hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-card/50">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-primary/50">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Our Mission
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower progress and drive sustainable growth for our clients and communities by delivering integrated, innovative, and expert solutions across diverse industries. We are committed to excellence, integrity, and fostering synergistic relationships that unlock value and create lasting impact.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="group hover-lift fade-in-up stagger-3 border-2 border-transparent hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-card/50">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-primary/50">
                  <Eye className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Our Vision
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the globally recognized and trusted partner for transformative solutions, pioneering new standards of excellence and integration across logistics, finance, legal, ICT, agriculture, mining, and language services, thereby shaping a more prosperous, interconnected, and sustainable future.
              </p>
            </CardContent>
          </Card>

          {/* Philosophy */}
          <Card className="group hover-lift fade-in-up stagger-4 border-2 border-transparent hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-card/50">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-primary/50">
                  <Lightbulb className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Our Philosophy
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our philosophy is rooted in the belief that true progress is achieved through holistic integrated wisdom, proactive partnership, future-focused innovation, principled execution and unwavering commitment to purpose-driven positive impact.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="text-center fade-in-up stagger-5">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">What Drives Us</span>
          </div>
          <h3 className="font-display text-3xl font-semibold text-foreground mb-8">
            Our Core Values
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Excellence", "Integrity", "Innovation", "Partnership", "Sustainability", "Global Impact"].map((value, index) => (
              <div 
                key={value}
                className={`group bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-8 py-4 rounded-full font-medium hover:from-primary hover:to-primary/90 hover:text-primary-foreground transition-all duration-300 fade-in-up stagger-${index + 6} hover-lift cursor-default border-2 border-primary/20 hover:border-primary shadow-lg hover:shadow-primary/50`}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;