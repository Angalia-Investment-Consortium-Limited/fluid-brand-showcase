import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-gradient">Rakestar Group</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A dynamic and diversified organization dedicated to providing comprehensive expert services across key economic sectors.
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-20 fade-in-up stagger-1">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant hover-lift">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Our Foundation
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Rakestar Group seamlessly integrates efficient logistics and supply chain management, strategic financial consulting, robust legal counsel, cutting-edge Information and Communication Technology (ICT) solutions, innovative agricultural practices, responsible mining operations, and professional language translation services.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our core strength lies in our ability to deliver synergistic, client-focused solutions that drive growth, enhance efficiency, bridge communication barriers, and foster sustainable development for businesses and communities worldwide.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Philosophy Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <Card className="group hover-lift fade-in-up stagger-2">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-8 h-8 text-primary" />
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
          <Card className="group hover-lift fade-in-up stagger-3">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Eye className="w-8 h-8 text-primary" />
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
          <Card className="group hover-lift fade-in-up stagger-4">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Lightbulb className="w-8 h-8 text-primary" />
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
        <div className="mt-20 text-center fade-in-up stagger-5">
          <h3 className="font-display text-3xl font-semibold text-foreground mb-8">
            Our Core Values
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Excellence", "Integrity", "Innovation", "Partnership", "Sustainability", "Global Impact"].map((value, index) => (
              <div 
                key={value}
                className={`bg-primary/10 text-primary px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors fade-in-up stagger-${index + 6} hover-lift cursor-default`}
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