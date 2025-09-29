import { Separator } from "@/components/ui/separator";
import rakestarLogo from "@/assets/rakestar-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      "Logistics Solutions",
      "Financial Consulting", 
      "Legal Services",
      "ICT Solutions",
      "Agriculture",
      "Mining Operations",
      "Translation Services"
    ],
    company: [
      "About Us",
      "Our Mission",
      "Our Vision", 
      "Philosophy",
      "Careers",
      "News & Updates"
    ],
    resources: [
      "Case Studies",
      "White Papers",
      "Industry Insights",
      "Documentation",
      "Support Center",
      "Contact Us"
    ]
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={rakestarLogo} 
                alt="Rakestar Group Logo" 
                className="h-12 w-auto"
              />
              <span className="font-display text-2xl font-semibold">
                Rakestar Group
              </span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed mb-6 max-w-md">
              Empowering progress through integrated excellence across logistics, finance, legal, ICT, agriculture, mining, and translation services worldwide.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-secondary-foreground/80">
                <strong>Website:</strong> www.rakestargroup.co.tz
              </p>
              <p className="text-secondary-foreground/80">
                <strong>Email:</strong> info@rakestargroup.co.tz
              </p>
              <p className="text-secondary-foreground/80">
                <strong>Location:</strong> Tanzania, East Africa
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Our Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a 
                    href="#services" 
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a 
                    href="#about" 
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a 
                    href="#contact" 
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-secondary-foreground/60 mb-4 md:mb-0">
            © {currentYear} Rakestar Group. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a 
              href="#" 
              className="text-secondary-foreground/60 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-secondary-foreground/60 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-secondary-foreground/60 hover:text-primary transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;