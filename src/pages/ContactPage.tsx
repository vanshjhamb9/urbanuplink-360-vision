import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { GlowButton } from "@/components/ui-custom/GlowButton";
import { company } from "@/lib/brand";
import { Calendar, Mail, Phone, MapPin, Send } from "lucide-react";

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
      details: company.email,
      href: `mailto:${company.email}`,
      description: "For general inquiries and support",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: company.phone,
      href: company.phoneHref,
      description: "Mon–Fri from 9am to 6pm IST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: company.address.line1,
      href: undefined as string | undefined,
      description: `${company.address.line2}, ${company.address.line3}`,
    },
  ];

  return (
    <PageLayout>
      <section className="relative overflow-hidden page-hero-band">
        <div className="pointer-events-none absolute inset-0 section-glow" />
        <div className="page-container relative z-10 text-center">
          <SectionHeading
            eyebrow="Get in Touch"
            size="page"
            title={
              <>
                Let&apos;s transform{" "}
                <span className="text-brand-lime">your business</span>
              </>
            }
            description="Have questions about our technology or pricing? We're here to help you get started."
          />
        </div>
      </section>

      <section className="section-shell">
        <div className="page-container-wide">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Contact Info Side */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-extrabold text-white">
                  Contact Information
                </h2>
                <p className="text-sm leading-relaxed text-muted-brand md:text-base">
                  Ready to upgrade your visual documentation? Reach out to us
                  through any of these channels, or book a live demo.
                </p>
              </div>

              <div className="rounded-2xl border border-brand-lime/25 bg-brand-lime/[0.08] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-brand-lime/30 bg-brand-lime/15">
                    <Calendar className="h-6 w-6 text-brand-lime" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-1 text-lg font-semibold text-white">
                      Book a Demo
                    </h4>
                    <p className="mb-4 text-sm text-muted-brand">
                      Schedule a live walkthrough of Urban Uplink on Calendly.
                    </p>
                    <GlowButton
                      href={company.calendlyUrl}
                      variant="filled"
                      className="w-full justify-center sm:w-auto"
                    >
                      Open Calendly
                    </GlowButton>
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((item) => (
                  <Card
                    key={item.title}
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
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mb-1 block font-medium text-white/90 transition-colors hover:text-brand-lime"
                          >
                            {item.details}
                          </a>
                        ) : (
                          <p className="mb-1 font-medium text-white/90">
                            {item.details}
                          </p>
                        )}
                        <p className="text-sm text-muted-brand">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-xs text-white/40">
                {company.legalName} · CIN {company.cin}
              </p>
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
    </PageLayout>
  );
};

export default ContactPage;
