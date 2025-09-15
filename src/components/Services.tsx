import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Shield, Network, Users, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Penetration Testing",
      description: "Comprehensive vulnerability assessment and penetration testing services to identify security weaknesses and provide actionable remediation strategies.",
      features: [
        "Web Application Testing",
        "Network Penetration Testing",
        "Vulnerability Assessment",
        "Security Report & Recommendations"
      ],
      color: "text-primary",
      borderColor: "border-primary/20 hover:border-primary/60",
      glowColor: "hover:shadow-glow"
    },
    {
      icon: Shield,
      title: "SOC Analysis",
      description: "24/7 Security Operations Center services including threat detection, log analysis, incident response, and continuous monitoring.",
      features: [
        "Threat Detection & Analysis",
        "Real-time Log Monitoring",
        "Incident Response Planning",
        "Security Event Investigation"
      ],
      color: "text-accent",
      borderColor: "border-accent/20 hover:border-accent/60",
      glowColor: "hover:shadow-glow-blue"
    },
    {
      icon: Network,
      title: "Network Security Analysis",
      description: "Advanced network security services including configuration review, monitoring setup, and enterprise network protection strategies.",
      features: [
        "Network Architecture Review",
        "Firewall Configuration",
        "Intrusion Detection Setup",
        "Network Monitoring Solutions"
      ],
      color: "text-destructive",
      borderColor: "border-destructive/20 hover:border-destructive/60",
      glowColor: "hover:shadow-glow-red"
    },
    {
      icon: Users,
      title: "Active Directory Analysis",
      description: "Comprehensive Active Directory security assessment, domain controller management, and Group Policy security optimization.",
      features: [
        "AD Security Assessment",
        "GPO Security Review",
        "User Access Auditing",
        "Authentication Monitoring"
      ],
      color: "text-cyber-blue",
      borderColor: "border-cyan-500/20 hover:border-cyan-500/60",
      glowColor: "hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="bg-gradient-cyber bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect your digital assets
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`p-8 bg-card/50 backdrop-blur-sm ${service.borderColor} ${service.glowColor} transition-all duration-500 group animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-muted/30 mr-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')} mr-3`} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={scrollToContact}
                variant="outline"
                className={`w-full ${service.borderColor.split(' ')[0]} ${service.color} hover:bg-muted/50 group/btn`}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-lg bg-gradient-cyber/10 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Need Custom Security Solutions?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Looking for specialized cybersecurity services or have unique security requirements? 
              Let's discuss how I can help secure your organization.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;