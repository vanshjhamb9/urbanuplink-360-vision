import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Sales Director",
    company: "Premium Auto Group",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    quote: "UrbanUplink transformed our online sales. We've seen a 45% increase in qualified leads since implementing 360° views.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Marketing Manager",
    company: "AutoMax Dealerships",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    quote: "The ease of use is incredible. Our entire team was up and running in less than a day. Customer engagement has skyrocketed.",
    rating: 5,
  },
  {
    name: "David Kumar",
    role: "Owner",
    company: "Elite Car Detailing",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    quote: "Being able to show before-and-after 360° views has tripled our referrals. It's the best investment we've made.",
    rating: 5,
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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 bg-card/80 backdrop-blur relative overflow-hidden"
            >
              {/* Quote decoration */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              
              <CardContent className="p-8 relative">
                <Quote className="w-10 h-10 text-accent/30 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/90 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/30"
                  />
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
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
