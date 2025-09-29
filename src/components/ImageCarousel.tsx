import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import logisticsHero from "@/assets/logistics-hero.jpg";
import financialHero from "@/assets/financial-hero.jpg";
import legalHero from "@/assets/legal-hero.jpg";
import ictHero from "@/assets/ict-hero.jpg";
import agricultureHero from "@/assets/agriculture-hero.jpg";
import miningHero from "@/assets/mining-hero.jpg";
import translationHero from "@/assets/translation-hero.jpg";

const ImageCarousel = () => {
  const images = [
    {
      src: logisticsHero,
      title: "Logistics Solutions",
      description: "Global supply chain optimization"
    },
    {
      src: financialHero,
      title: "Financial Consulting",
      description: "Strategic financial guidance"
    },
    {
      src: legalHero,
      title: "Legal Services",
      description: "Comprehensive legal counsel"
    },
    {
      src: ictHero,
      title: "ICT Solutions",
      description: "Cutting-edge technology"
    },
    {
      src: agricultureHero,
      title: "Agriculture",
      description: "Sustainable farming practices"
    },
    {
      src: miningHero,
      title: "Mining Operations", 
      description: "Responsible resource extraction"
    },
    {
      src: translationHero,
      title: "Translation Services",
      description: "Breaking language barriers"
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our diverse portfolio of professional services across multiple industries.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto fade-in-up stagger-1">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="group hover-lift overflow-hidden">
                    <CardContent className="p-0 relative">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="font-display text-xl font-bold mb-2">
                          {image.title}
                        </h3>
                        <p className="text-sm opacity-90">
                          {image.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ImageCarousel;