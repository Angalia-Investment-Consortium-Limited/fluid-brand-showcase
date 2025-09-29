import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Truck, 
  Calculator, 
  Scale, 
  Monitor, 
  Wheat, 
  Pickaxe, 
  Languages,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Logistics Solutions",
      description: "End-to-end supply chain optimization, warehousing, distribution, and transportation management with customs compliance.",
      features: ["Supply Chain Management", "Warehousing & Distribution", "Transportation Management", "Customs & Compliance"]
    },
    {
      icon: Calculator,
      title: "Financial Consulting",
      description: "Expert guidance and strategic financial solutions for individuals, corporations, and institutions worldwide.",
      features: ["Corporate Finance", "Investment Advisory", "Risk Management", "Financial Planning"]
    },
    {
      icon: Scale,
      title: "Legal Services",
      description: "Comprehensive legal counsel and representation across various practice areas with international expertise.",
      features: ["Corporate Law", "Commercial Litigation", "Regulatory Compliance", "International Law"]
    },
    {
      icon: Monitor,
      title: "ICT Solutions",
      description: "Cutting-edge technology solutions including software development, system integration, and digital transformation.",
      features: ["Software Development", "System Integration", "Cloud Solutions", "Digital Transformation"]
    },
    {
      icon: Wheat,
      title: "Agriculture",
      description: "Innovative agricultural practices and solutions to enhance productivity and sustainability in farming operations.",
      features: ["Sustainable Farming", "Crop Management", "Agricultural Technology", "Supply Chain Optimization"]
    },
    {
      icon: Pickaxe,
      title: "Mining Operations",
      description: "Responsible mining operations with focus on environmental sustainability and community development.",
      features: ["Sustainable Mining", "Resource Exploration", "Environmental Management", "Community Development"]
    },
    {
      icon: Languages,
      title: "Translation Services",
      description: "Professional language translation services bridging communication barriers across global markets.",
      features: ["Document Translation", "Interpretation Services", "Localization", "Multilingual Support"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
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
            <Card key={service.title} className={`group hover-lift cursor-pointer fade-in-up stagger-${index + 1}`}>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto text-primary hover:text-primary font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in-up stagger-8">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let our experts help you achieve your goals with integrated solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="hover-lift"
              >
                Schedule Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;