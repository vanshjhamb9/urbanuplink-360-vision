import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
            toast({
                title: "Message Sent!",
                description: "We'll get back to you as soon as possible.",
            });
        }, 1500);
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
            details: "+91 98765 43210",
            description: "Mon-Fri from 9am to 6pm IST",
        },
        {
            icon: MapPin,
            title: "Visit Us",
            details: "Bangalore, India",
            description: "Automotive Tech Hub",
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />
                <div className="container px-4 md:px-6 relative z-10 mx-auto text-center">
                    <div className="inline-flex items-center justify-center p-1.5 mb-6 rounded-full bg-accent/10 border border-accent/20">
                        <span className="px-3 py-1 text-sm font-semibold text-accent">Get in Touch</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                        Let's Transform Your Business
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        Have questions about our technology or pricing? We're here to help you get started.
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
                                    Ready to upgrade your visual documentation? Reach out to us through any of these channels.
                                </p>
                            </div>

                            <div className="grid gap-6">
                                {contactInfo.map((item, index) => (
                                    <Card key={index} className="border-0 shadow-sm bg-muted/30 hover:bg-muted/50 transition-colors">
                                        <CardContent className="p-6 flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                                                <p className="text-foreground font-medium mb-1">{item.details}</p>
                                                <p className="text-sm text-muted-foreground">{item.description}</p>
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
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-bold">
                                                User
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="font-bold">Trusted by 500+</div>
                                        <div className="text-sm text-muted-foreground">Dealerships & businesses</div>
                                    </div>
                                </div>
                                <p className="text-sm font-medium">
                                    "UrbanUplink revolutionized how we showcase our inventory."
                                </p>
                            </div>
                        </div>

                        {/* Contact Form Side */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2rem] blur-3xl opacity-50" />
                            <Card className="relative border-border/50 shadow-2xl bg-card">
                                <CardContent className="p-8 md:p-10">
                                    <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Full Name</Label>
                                                <Input
                                                    id="name"
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
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
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
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
            <Footer />
        </div>
    );
};

export default ContactPage;
