import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import FloatingDemo from "@/components/FloatingDemo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Error",
          description:
            data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to connect to the server. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@urbanuplink.com",
      description: "For general inquiries and support",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 80 1234 5678",
      description: "Mon-Fri from 9am to 6pm IST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Indiranagar, Bangalore",
      description: "Karnataka, India",
    },
  ];

  return (
    <PageLayout>
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 section-glow" />
        <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-lime">
            Get in Touch
          </p>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Let's Transform Your Business
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-brand">
            Have questions about our technology or pricing? We're here to help
            you get started.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-6xl mx-auto">
            {/* Contact Info Side */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground text-lg">
                  Ready to upgrade your visual documentation? Reach out to us
                  through any of these channels.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                  <Card
                    key={index}
                    className="border-white/10 bg-gradient-card transition-colors hover:border-brand-lime/30"
                  >
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-brand-lime/20 bg-brand-lime/10">
                        <item.icon className="h-6 w-6 text-brand-lime" />
                      </div>
                      <div>
                        <h4 className="mb-1 text-lg font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="mb-1 font-medium text-white/90">
                          {item.details}
                        </p>
                        <p className="text-sm text-muted-brand">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-bold"
                      >
                        User
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="font-bold">Trusted by 500+</div>
                    <div className="text-sm text-muted-foreground">
                      Dealerships & businesses
                    </div>
                  </div>
                </div>
                <p className="text-sm font-medium">
                  "UrbanUplink revolutionized how we showcase our inventory."
                </p>
              </div>
            </div>

            {/* Contact Form Side */}
            <div className="relative">
              <Card className="relative border-white/10 bg-gradient-card shadow-glow">
                <CardContent className="p-8 md:p-10">
                  <h3 className="mb-6 font-heading text-2xl font-extrabold text-white">
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          className="bg-muted/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="bg-muted/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="I'm interested in..."
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        required
                        className="bg-muted/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your requirements..."
                        className="min-h-[150px] bg-muted/50 resize-none"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-brand-lime text-brand-black hover:bg-brand-lime/90"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <FloatingDemo />
    </PageLayout>
  );
};

export default ContactPage;
