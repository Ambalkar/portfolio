import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Github, Linkedin, Send, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import * as emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_44aonun';
  const EMAILJS_TEMPLATE_ID = 'template_a68homq';
  const EMAILJS_PUBLIC_KEY = 'rRJ1m82MPu3c2h5bd';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'devendraambalkar11@gmail.com'
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully. I'll get back to you soon!",
        });

        // Reset form
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "devendraambalkar11@gmail.com",
      link: "mailto:devendraambalkar11@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7249640336",
      link: "tel:+917249640336",
      color: "text-accent"
    },
    {
      icon: MapPin,
      title: "Location", 
      value: "Wardha, Maharashtra, India",
      link: null,
      color: "text-foreground"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/Ambalkar",
      link: "https://github.com/Ambalkar",
      color: "text-cyber-blue"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/devendra-ambalkar-67ba671b3",
      link: "https://www.linkedin.com/in/devendra-ambalkar-67ba671b3",
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-cyber bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss cybersecurity solutions? Let's connect and explore how I can help secure your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need cybersecurity consultation, penetration testing services, 
                or want to discuss potential opportunities, I'm always open to meaningful conversations 
                about cybersecurity challenges and solutions.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow group"
                >
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-muted/30 mr-4">
                      <info.icon className={`w-6 h-6 ${info.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`${info.color} hover:underline transition-colors`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
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
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    required
                    className="bg-muted/30 border-muted focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    className="bg-muted/30 border-muted focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your cybersecurity needs, project requirements, or any questions you have..."
                    rows={6}
                    required
                    className="bg-muted/30 border-muted focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-blue transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className={`w-4 h-4 mr-2 ${isSubmitting ? 'animate-spin' : 'group-hover:translate-x-1'} transition-transform`} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                * Required fields. Your message will be sent directly to my email.
              </p>
            </Card>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-6 rounded-lg bg-gradient-cyber/10 border border-primary/20">
            <h3 className="text-xl font-bold mb-2">Need Immediate Assistance?</h3>
            <p className="text-muted-foreground mb-4">
              For urgent cybersecurity matters or quick questions
            </p>
            <div className="flex gap-3 justify-center">
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <a href="mailto:devendraambalkar11@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Directly
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
              >
                <a href="tel:+917249640336">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;