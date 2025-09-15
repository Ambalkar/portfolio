import { Card } from "@/components/ui/card";
import { Shield, Network, Code, Database, Cloud, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cybersecurity Domains",
      icon: Shield,
      skills: [
        "Vulnerability Assessment & Penetration Testing (VAPT)",
        "SOC Analysis & Incident Response",
        "Digital Forensics & Malware Analysis",
        "Active Directory Administration",
        "Cloud & Infrastructure Security",
      ],
      color: "text-primary",
    },
    {
      title: "Security & Networking",
      icon: Network,
      skills: [
        "ACLs, VLANs, Firewalls",
        "HTTP/HTTPS filtering",
        "IDS/HIDS Systems",
        "Active Directory & Sysmon",
        "Network Security Analysis",
      ],
      color: "text-accent",
    },
    {
      title: "Tools & Platforms",
      icon: Terminal,
      skills: [
        "Cisco Packet Tracer",
        "Wireshark, Nmap, Burp Suite",
        "Windows Defender",
        "VMware/VirtualBox, Docker",
        "Git/GitHub",
      ],
      color: "text-destructive",
    },
    {
      title: "Programming & Scripting",
      icon: Code,
      skills: [
        "Python (Scikit-learn, Tkinter, Watchdog)",
        "PowerShell & Bash Scripting",
        "Java Programming",
        "SQL Database Management",
        "Machine Learning Integration",
      ],
      color: "text-cyber-blue",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-cyber bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across cybersecurity domains, networking, and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <category.icon className={`w-8 h-8 ${category.color} mr-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group/skill"
                  >
                    <div className={`w-2 h-2 rounded-full ${category.color.replace('text-', 'bg-')} mr-3 group-hover/skill:scale-125 transition-transform`} />
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Skill Progress Visualization */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">Expertise Levels</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Penetration Testing", level: 90 },
              { name: "Network Security", level: 85 },
              { name: "SOC Analysis", level: 80 },
              { name: "Python Development", level: 75 },
            ].map((skill, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-muted/30"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-primary"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${skill.level}, 100`}
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute text-sm font-bold text-primary">{skill.level}%</span>
                </div>
                <p className="font-semibold text-foreground">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;