import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Shield, Brain, Server, Image as ImageIcon, X } from "lucide-react";
import { useState } from "react";

// Import project images - using dynamic imports for files with spaces
// Web Content Access Control images
const webAccessImages = [
  new URL("../assets/Web Content Access Control/Screenshot 2024-10-21 184426.png", import.meta.url).href,
  new URL("../assets/Web Content Access Control/Screenshot 2024-10-21 185509.png", import.meta.url).href,
  new URL("../assets/Web Content Access Control/Screenshot 2024-10-21 191051.png", import.meta.url).href,
];

// Windows Intrusion Detection System images
const intrusionImages = [
  new URL("../assets/Windows Intrusion Detection System with Machine Learning/Screenshot 2025-09-13 164148.png", import.meta.url).href,
  new URL("../assets/Windows Intrusion Detection System with Machine Learning/Screenshot 2025-09-13 164235.png", import.meta.url).href,
  new URL("../assets/Windows Intrusion Detection System with Machine Learning/Screenshot 2025-09-13 164914.png", import.meta.url).href,
];

// Active Directory & SOC Analysis images
const adLabImages = [
  new URL("../assets/Active Directory & SOC Analysis Home Lab/Working of AD & SOC analysis home lab.png", import.meta.url).href,
  new URL("../assets/Active Directory & SOC Analysis Home Lab/attack logs in splunk dashboard in AD server.png", import.meta.url).href,
  new URL("../assets/Active Directory & SOC Analysis Home Lab/Bruteforce attack on client pc.png", import.meta.url).href,
  new URL("../assets/Active Directory & SOC Analysis Home Lab/login into active directory server.png", import.meta.url).href,
  new URL("../assets/Active Directory & SOC Analysis Home Lab/new user login logs in splunk dashboard on AD server.png", import.meta.url).href,
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      title: "Web Content Access Control (Campus Network Security)",
      description: "Designed ACL-based layered security architecture in Cisco Packet Tracer to restrict student access while allowing unrestricted faculty/administration access. Implemented comprehensive network segmentation with VLAN isolation and HTTP/HTTPS filtering rules.",
      technologies: ["Cisco Packet Tracer", "ACLs", "VLANs", "Network Security", "Firewall Rules"],
      icon: Shield,
      features: [
        "Multi-tier network architecture design",
        "Role-based access control implementation", 
        "Content filtering and web security",
        "Network traffic monitoring and logging"
      ],
      images: [
        { src: webAccessImages[0], alt: "Network topology and ACL configuration" },
        { src: webAccessImages[1], alt: "VLAN configuration and security settings" },
        { src: webAccessImages[2], alt: "Access control implementation" }
      ],
      github: "https://github.com/Ambalkar/CISCO-Virtual-Internship-Program-in-Cybersecurity.git",
      linkedin: "https://www.linkedin.com/in/devendra-ambalkar-67ba671b3",
      color: "text-primary",
      borderColor: "border-primary/20 hover:border-primary/60",
      glowColor: "hover:shadow-glow"
    },
    {
      title: "Windows Intrusion Detection System with Machine Learning",
      description: "Developed Python-based Host Intrusion Detection System (HIDS) using Random Forest classifier for real-time malware detection. Integrated with SOC workflows for automated threat response and incident management.",
      technologies: ["Python", "Scikit-learn", "Random Forest", "Tkinter", "Watchdog", "Windows Security"],
      icon: Brain,
      features: [
        "Real-time file system monitoring",
        "Machine learning threat classification",
        "Automated alert generation",
        "SOC integration and reporting"
      ],
      images: [
        { src: intrusionImages[0], alt: "HIDS interface and detection system" },
        { src: intrusionImages[1], alt: "Machine learning model training interface" },
        { src: intrusionImages[2], alt: "Real-time monitoring dashboard" }
      ],
      github: "https://github.com/Ambalkar/HIDS",
      linkedin: "https://www.linkedin.com/in/devendra-ambalkar-67ba671b3",
      color: "text-accent", 
      borderColor: "border-accent/20 hover:border-accent/60",
      glowColor: "hover:shadow-glow-blue"
    },
    {
      title: "Active Directory & SOC Analysis Home Lab",
      description: "Built enterprise-grade Active Directory environment with comprehensive SOC workflows for threat detection, anomaly investigation, and security event logging. Implemented Sysmon for advanced monitoring and Windows Defender integration.",
      technologies: ["Active Directory", "Sysmon", "Windows Defender", "PowerShell", "Event Logging", "VMware"],
      icon: Server,
      features: [
        "Enterprise AD forest configuration",
        "Advanced threat detection workflows", 
        "Comprehensive security logging",
        "Incident response automation"
      ],
      images: [
        { src: adLabImages[0], alt: "AD & SOC analysis home lab overview" },
        { src: adLabImages[1], alt: "Attack logs in Splunk dashboard" },
        { src: adLabImages[2], alt: "Brute force attack detection" },
        { src: adLabImages[3], alt: "Active Directory server login" },
        { src: adLabImages[4], alt: "User login logs in Splunk dashboard" }
      ],
      github: "https://github.com/Ambalkar/Active-Directory-and-SOC-analysis-home-lab.git",
      linkedin: "https://www.linkedin.com/in/devendra-ambalkar-67ba671b3",
      color: "text-destructive",
      borderColor: "border-destructive/20 hover:border-destructive/60", 
      glowColor: "hover:shadow-glow-red"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-cyber bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcase of cybersecurity projects demonstrating practical skills in network security, 
            threat detection, and enterprise security solutions
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-8 bg-card/50 backdrop-blur-sm ${project.borderColor} ${project.glowColor} transition-all duration-500 animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-6">
                {/* Project Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-lg bg-muted/30 mr-4`}>
                    <project.icon className={`w-8 h-8 ${project.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className={`w-2 h-2 rounded-full ${project.color.replace('text-', 'bg-')} mr-3`} />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Screenshots - Horizontal Layout */}
                {project.images && project.images.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-4">
                      Screenshots
                    </h4>
                    <div className="flex gap-4 overflow-x-auto pb-2">
                      {project.images.map((image, imageIndex) => (
                        <Dialog key={imageIndex}>
                          <DialogTrigger asChild>
                            <div className="relative group cursor-pointer flex-shrink-0">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-48 h-32 object-cover rounded-lg border border-border hover:border-primary/50 transition-all group-hover:scale-105"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  target.parentElement!.innerHTML = `
                                    <div class="w-48 h-32 bg-muted/30 rounded-lg border border-border flex items-center justify-center">
                                      <span class="text-xs text-muted-foreground">Image not available</span>
                                    </div>
                                  `;
                                }}
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                                <ImageIcon className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            </div>
                          </DialogTrigger>
                          <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
                            <div className="relative">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto rounded-lg shadow-lg"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.parentElement!.innerHTML = `
                                    <div class="w-full h-64 bg-muted/30 rounded-lg border border-border flex items-center justify-center">
                                      <span class="text-muted-foreground">Image could not be loaded</span>
                                    </div>
                                  `;
                                }}
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-xs rounded-full bg-muted/30 ${project.color} border ${project.borderColor.split(' ')[0]}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className={`${project.borderColor.split(' ')[0]} ${project.color} hover:bg-muted/50`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className={`${project.borderColor.split(' ')[0]} ${project.color} hover:bg-muted/50`}
                  >
                    <a
                      href={project.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Projects CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-lg bg-gradient-cyber/10 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              I'm continuously working on new cybersecurity projects and research. 
              Follow my GitHub and LinkedIn for the latest updates.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href="https://github.com/Ambalkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Follow on GitHub
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent/10"
              >
                <a
                  href="https://www.linkedin.com/in/devendra-ambalkar-67ba671b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;