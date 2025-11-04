import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in building strong, supportive communities around sports and wellness.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every feature and interaction on our platform.",
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "Everyone deserves access to sports and fitness, regardless of skill level.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously improve and innovate to serve our community better.",
    },
  ];

  const team = [
    { name: "Alex Rivera", role: "CEO & Founder", initials: "AR" },
    { name: "Sarah Chen", role: "Head of Product", initials: "SC" },
    { name: "Marcus Johnson", role: "CTO", initials: "MJ" },
    { name: "Emily Park", role: "Community Manager", initials: "EP" },
  ];

  const partners = [
    "Champions Arena",
    "FitLife Gym",
    "City Sports Complex",
    "Wellness Hub",
    "Premier Tennis Club",
    "Victory Courts",
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About SportConnect</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We're on a mission to make sports and fitness accessible to everyone by connecting people,
            venues, and communities through technology.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-16 shadow-lg border-primary/20">
          <CardContent className="p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg mb-6">
                SportConnect was founded in 2023 with a simple yet powerful vision: to break down barriers
                to physical activity and create a thriving ecosystem where everyone can find their perfect
                exercise partner, venue, or community.
              </p>
              <p className="text-muted-foreground text-lg">
                We believe that staying active should be fun, social, and accessible. Whether you're a
                seasoned athlete or just starting your fitness journey, SportConnect is here to support
                you every step of the way.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-smooth text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 text-primary text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {member.initials}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardContent className="p-6 flex items-center justify-center min-h-24">
                  <p className="font-semibold text-center text-sm">{partner}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-accent/30 border-primary/20 shadow-lg">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Want to Partner With Us?</h2>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              We're always looking for venues, trainers, and organizations to join our growing network.
              Let's work together to promote active lifestyles.
            </p>
            <Button size="lg" className="gradient-primary shadow-green">
              Become a Partner
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
