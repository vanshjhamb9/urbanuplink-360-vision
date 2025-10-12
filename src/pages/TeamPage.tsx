import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingDemo from "@/components/FloatingDemo";
import { Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Jay Patel",
    role: "Chief Marketing Officer",
    experience: "6 years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
    bio: "Marketing strategist with expertise in automotive tech and digital transformation. Former Head of Marketing at AutoTech Solutions.",
    linkedin: "#",
  },
  {
    name: "Jayshree Kumar",
    role: "Head of Advertising & Growth",
    experience: "5 years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces",
    bio: "Growth expert specializing in performance marketing and brand strategy. Scaled multiple automotive SaaS platforms.",
    linkedin: "#",
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    experience: "8 years",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces",
    bio: "AI and computer vision specialist. Previously led engineering teams at major tech companies building imaging solutions.",
    linkedin: "#",
  },
  {
    name: "Sarah Williams",
    role: "VP of Product",
    experience: "7 years",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=faces",
    bio: "Product visionary with deep understanding of automotive industry needs. Former Product Lead at enterprise software companies.",
    linkedin: "#",
  },
  {
    name: "David Kumar",
    role: "Head of Customer Success",
    experience: "6 years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
    bio: "Customer success champion dedicated to ensuring clients achieve maximum value. Automotive industry veteran.",
    linkedin: "#",
  },
  {
    name: "Emily Rodriguez",
    role: "Chief Design Officer",
    experience: "5 years",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces",
    bio: "Award-winning designer creating intuitive experiences. Passionate about making complex technology accessible.",
    linkedin: "#",
  },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-accent font-semibold text-sm">Our Team</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Meet the Minds Behind{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                UrbanUplink
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A passionate team of innovators, designers, and automotive technology experts dedicated to transforming the industry
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Social Links */}
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center hover:bg-primary transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-primary-foreground" />
                      </a>
                      <a
                        href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@urbanuplink.com`}
                        className="w-10 h-10 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center hover:bg-primary transition-colors"
                      >
                        <Mail className="w-5 h-5 text-primary-foreground" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-accent font-semibold text-sm mb-1">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {member.experience} experience
                      </p>
                    </div>
                    
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-accent/50 transition-all text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation First</h3>
                <p className="text-muted-foreground text-sm">
                  We constantly push boundaries to deliver cutting-edge solutions that transform the automotive industry.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 transition-all text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Customer Success</h3>
                <p className="text-muted-foreground text-sm">
                  Your success is our success. We're committed to helping you achieve your business goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 transition-all text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Simplicity</h3>
                <p className="text-muted-foreground text-sm">
                  We believe powerful technology should be easy to use. No complexity, just results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 bg-gradient-to-r from-primary via-accent to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              We're always looking for talented individuals who share our passion for innovation and automotive technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@urbanuplink.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-all duration-300 hover:scale-105"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </section>

      <FloatingDemo />
      <Footer />
    </div>
  );
};

export default TeamPage;
