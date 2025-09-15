import { Shield, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-cyber-dark border-t border-primary/20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary animate-glow-pulse" />
              <span className="text-xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
                Devendra Ambalkar
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cybersecurity enthusiast specializing in penetration testing, 
              network security, and SOC operations. Passionate about protecting 
              digital assets and educating others about cybersecurity.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Ambalkar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted/30 hover:bg-primary/20 transition-colors group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/devendra-ambalkar-67ba671b3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted/30 hover:bg-accent/20 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
              <a
                href="mailto:devendraambalkar11@gmail.com"
                className="p-2 rounded-full bg-muted/30 hover:bg-destructive/20 transition-colors group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-destructive transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Get In Touch</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a
                  href="mailto:devendraambalkar11@gmail.com"
                  className="text-primary hover:text-primary-glow transition-colors"
                >
                  devendraambalkar11@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-foreground">Wardha, Maharashtra, India</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Available for</p>
                <p className="text-foreground">Cybersecurity Consultation</p>
                <p className="text-foreground">Penetration Testing</p>
                <p className="text-foreground">Security Analysis</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {currentYear} Devendra Ambalkar. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with passion for cybersecurity excellence
            </p>
          </div>

          {/* Back to Top */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-primary/30 text-primary hover:bg-primary/10 group"
          >
            <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;