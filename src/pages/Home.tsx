import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Users, MapPin, Calendar, Trophy, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sports.jpg";

const Home = () => {
  const highlights = [
    { title: "Weekend Futsal Tournament", location: "Central Sports Arena", date: "Sat, 10 AM", participants: 24 },
    { title: "Morning Run Community", location: "City Park", date: "Daily, 6 AM", participants: 156 },
    { title: "Yoga Session", location: "Green Valley", date: "Sun, 8 AM", participants: 45 },
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      text: "Found amazing workout partners here! The community is so supportive and active.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      text: "Booking fields has never been easier. Great platform with fair pricing!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      text: "Joined a basketball community and made lifelong friends. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 lg:py-28 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Start Your <span className="text-primary">Active Journey</span> Today
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Find exercise partners, rent sports fields, join vibrant communities, and discover exciting events. All in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gradient-primary shadow-green text-lg px-8">
                  Start Exercising
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src={heroImage}
                alt="People exercising together"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search */}
      <section className="container mx-auto px-4 -mt-10 relative z-10">
        <Card className="shadow-xl border-2 border-primary/20 animate-slide-up">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/partners" className="group">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/50 hover:bg-primary/10 transition-smooth cursor-pointer">
                  <Users className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Find Partner</h3>
                    <p className="text-sm text-muted-foreground">Connect with athletes</p>
                  </div>
                </div>
              </Link>
              <Link to="/fields" className="group">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/50 hover:bg-primary/10 transition-smooth cursor-pointer">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Rent Field</h3>
                    <p className="text-sm text-muted-foreground">Book sports venues</p>
                  </div>
                </div>
              </Link>
              <Link to="/communities" className="group">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/50 hover:bg-primary/10 transition-smooth cursor-pointer">
                  <Calendar className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Join Community</h3>
                    <p className="text-sm text-muted-foreground">Find your tribe</p>
                  </div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Weekly Highlights */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">This Week's Highlights</h2>
          <p className="text-muted-foreground text-lg">Featured events and communities you shouldn't miss</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-smooth cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Trophy className="w-8 h-8 text-primary" />
                  <span className="text-sm bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium">
                    {item.participants} members
                  </span>
                </div>
                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-smooth">
                  {item.title}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Members Say</h2>
            <p className="text-muted-foreground text-lg">Join thousands of satisfied athletes and sports enthusiasts</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Active?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join our community today and start your journey towards a healthier, more active lifestyle.
          </p>
          <Button size="lg" className="gradient-primary shadow-green text-lg px-12">
            Join for Free
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
