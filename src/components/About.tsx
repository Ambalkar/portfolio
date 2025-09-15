import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Calendar, ExternalLink } from "lucide-react";

const About = () => {
  const education = {
    degree: "B.Tech in Computer Engineering (Pursuing)",
    institution: "Bajaj Institute of Technology, Wardha",
  };

  const certifications = [
    {
      title: "Certified Ethical Hacker",
      issuer: "Cisco Networking Academy",
      date: "Sep 2025",
      link: "https://www.credly.com/badges/a5022d56-6e24-4617-9db7-e732151b7220/linked_in_profile"
    },
    {
      title: "Network Technician Career Path",
      issuer: "Cisco Networking Academy",
      date: "Aug 2025",
      link: "https://www.credly.com/badges/73038a92-0588-4675-b590-b7a0147afa92/linked_in_profile"
    },
    {
      title: "Security Operations Center in Practice",
      issuer: "IBM SkillsBuild",
      date: "Sep 2025",
      link: "https://www.credly.com/badges/6e33e156-8b8a-4dc9-a70c-7e6b2e8fa6b9/linked_in_profile"
    },
    {
      title: "Diploma in Cyber Security",
      issuer: "Oxford Home Study Centre",
      date: "Oct 2024",
      link: "https://www.linkedin.com/posts/devendra-ambalkar-67ba671b3_im-happy-to-share-that-ive-obtained-a-new-activity-7373318361490821120-BK3I?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHQAP8BgLNRUeLOm_iUqXX5TMctAcCVuUE"
    },
    {
      title: "Cisco AICTE Virtual Internship in Cybersecurity",
      issuer: "Cisco",
      date: "May–July 2024",
      link: "https://www.linkedin.com/in/devendra-ambalkar-67ba671b3/add-edit/POSITION/?profileFormEntryPoint=PROFILE_SECTION&entityUrn=urn%3Ali%3Afsd_profilePosition%3A%28ACoAADHQAP8BgLNRUeLOm_iUqXX5TMctAcCVuUE%2C2482271654%29&trackingId=VR3vog6lQ2WwlYUzgPmSmA%3D%3D&desktopBackground=MAIN_PROFILE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BMeB8ig1ASdGRay%2BZrsc5pA%3D%3D"
    },
    {
      title: "Ethical Hacking Training (30 Hours)",
      issuer: "CyberTec8",
      date: "May 2025",
      link: "https://www.linkedin.com/posts/devendra-ambalkar-67ba671b3_cyber-security-training-completion-certificate-activity-7350174342351093761-BkQq?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHQAP8BgLNRUeLOm_iUqXX5TMctAcCVuUE"
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-cyber bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate cybersecurity professional with expertise in ethical hacking and network security
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Detail-oriented cybersecurity professional with hands-on experience in ethical hacking, 
              network security, and SOC operations. Experienced in building security labs, implementing 
              ACL-driven web controls, developing Windows HIDS with machine learning, and managing 
              Active Directory environments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about penetration testing, incident response, and SOC workflows. I believe 
              in continuous learning and staying updated with the latest cybersecurity trends and 
              threat landscapes.
            </p>
          </div>

          {/* Education */}
          <div className="animate-slide-up">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-foreground">{education.degree}</p>
                <p className="text-muted-foreground">{education.institution}</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-cyber bg-clip-text text-transparent">Certifications</span>
            </h3>
            <p className="text-muted-foreground">Professional certifications and continuous learning</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow group cursor-pointer"
                onClick={() => window.open(cert.link, '_blank', 'noopener,noreferrer')}
              >
                <div className="flex items-start mb-3">
                  <Award className="w-5 h-5 text-primary mr-3 mt-1 group-hover:text-primary-glow transition-colors" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                <div className="flex items-center text-xs text-primary">
                  <Calendar className="w-3 h-3 mr-1" />
                  {cert.date}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;