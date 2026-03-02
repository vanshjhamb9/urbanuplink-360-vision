import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import priyaSharma from "@/assets/priya-sharma.png";
import amitPatel from "@/assets/amit-patel.png";
import processed004 from "@/assets/OIP-removebg-preview.png";
import image2r from "@/assets/maruti-grand-vitara-removebg-preview.png";
import processed007 from "@/assets/mahindra-xuv700-removebg-preview.png";
import carBg360 from "@/assets/Bgimage360.webp";
import logoImage from "@/assets/2 (2).png";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Sales Director",
    company: "Tata Motors Showroom, Mumbai",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&h=200&fit=crop&crop=faces",
    carImage: processed004,
    quote: "UrbanUplink transformed our online sales. We've seen a 52% increase in qualified leads since implementing 360° views for our Tata Harrier and Sierra models.",
    rating: 5,
    tags: ["Tata Harrier", "SUV", "Mumbai"],
  },
  {
    name: "Priya Sharma",
    role: "Marketing Manager",
    company: "Capital Mahindra, Delhi",
    image: priyaSharma,
    carImage: processed007,
    quote: "The ease of use is incredible. Our entire team was up and running in less than a day. Customer engagement with our XUV700 listings has skyrocketed by 68%.",
    rating: 5,
    tags: ["Mahindra XUV700", "Premium SUV", "Delhi"],
  },
  {
    name: "Amit Patel",
    role: "Proprietor",
    company: "Maruti Suzuki Arena, Ahmedabad",
    image: amitPatel,
    carImage: image2r,
    quote: "Being able to show 360° views of our Brezza and Grand Vitara inventory has tripled our online inquiries. It's the best investment we've made for digital sales.",
    rating: 5,
    tags: ["Maruti Urban Cruiser", "Compact SUV", "Ahmedabad"],
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-accent font-semibold text-sm">Customer Success</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            See what automotive professionals are saying about UrbanUplink
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 bg-card/80 backdrop-blur relative overflow-hidden max-w-sm mx-auto"
            >
              {/* Quote decoration */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

              <CardContent className="p-0 relative">
                {/* Car Image with Backdrop and Logo */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  {/* Showroom Background */}
                  <div className="absolute inset-0 z-0">
                    <img src={carBg360} className="w-full h-full object-cover" alt="" />
                    <div className="absolute inset-0 bg-white/10" />
                  </div>

                  {/* Centered Logo on the background */}
                  <div className="absolute inset-x-0 top-8 flex items-center justify-center pointer-events-none z-0 opacity-50">
                    <img src={logoImage} className="w-24 md:w-32 h-auto object-contain" alt="Urban Uplink" />
                  </div>

                  {/* Car Image - Properly positioned with padding to reveal logo */}
                  <div className="relative z-10 w-full h-full flex items-end justify-center pt-8 pb-2 px-3">
                    <img
                      src={testimonial.carImage}
                      alt={`${testimonial.tags[0]} showcase`}
                      className="max-w-[100%] max-h-[100%] w-auto h-auto object-contain group-hover:scale-110 transition-transform duration-500"
                      style={{
                        objectPosition: 'center bottom',
                        minHeight: '95%'
                      }}
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20" />
                  {/* Tags */}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 z-30">
                    {testimonial.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <Quote className="w-8 h-8 text-accent/30 mb-3" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground/90 mb-4 leading-relaxed italic text-sm">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-accent/30"
                    />
                    <div>
                      <div className="font-bold text-foreground text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
