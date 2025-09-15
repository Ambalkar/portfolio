import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/devendra-profile.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 scroll-mt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div className="animate-slide-up">
          {/* Profile Image */}
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-glow">
              <img
                src={profileImage}
                alt="Devendra Ambalkar - Cybersecurity Professional"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-glow-pulse" />
          </div>

          {/* Main Content */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Devendra Arunrao
            </span>
            <br />
            <span className="text-foreground">Ambalkar</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-primary mb-4 font-medium">
            Cybersecurity Enthusiast | Network Security Specialist | Ethical Hacker
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Detail-oriented cybersecurity professional specializing in penetration testing, 
            SOC analysis, and network security solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("#portfolio")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-blue transition-all"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Ambalkar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary/20 transition-colors group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/devendra-ambalkar-67ba671b3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-accent/20 transition-colors group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
            <a
              href="mailto:devendraambalkar11@gmail.com"
              className="p-3 rounded-full bg-muted hover:bg-destructive/20 transition-colors group"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-destructive transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;