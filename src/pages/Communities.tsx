import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Calendar, Clock } from "lucide-react";

const Communities = () => {
  const communities = [
    {
      name: "Morning Runners Club",
      members: 234,
      location: "City Park",
      schedule: "Daily, 6:00 AM",
      sport: "Running",
      description: "Join us for energizing morning runs. All levels welcome!",
      rules: "Be on time, respect others, no littering",
    },
    {
      name: "Friday Night Futsal",
      members: 48,
      location: "Champions Arena",
      schedule: "Friday, 7:00 PM",
      sport: "Futsal",
      description: "Competitive futsal games every Friday. Intermediate to pro level.",
      rules: "Fair play, proper gear required, share the ball",
    },
    {
      name: "Weekend Yoga Warriors",
      members: 156,
      location: "Wellness Center",
      schedule: "Sat & Sun, 8:00 AM",
      sport: "Yoga",
      description: "Find your zen with our community yoga sessions. Beginner-friendly.",
      rules: "Bring your own mat, arrive 10 mins early, silence phones",
    },
    {
      name: "Basketball Enthusiasts",
      members: 89,
      location: "Hoops Court",
      schedule: "Tue & Thu, 6:00 PM",
      sport: "Basketball",
      description: "Play pickup games and improve your skills with fellow hoopsters.",
      rules: "Respect the court, rotate players, play defense",
    },
    {
      name: "Badminton Buddies",
      members: 67,
      location: "Ace Center",
      schedule: "Mon, Wed, Fri, 7:30 PM",
      sport: "Badminton",
      description: "Friendly badminton sessions with rotating partners and doubles.",
      rules: "Bring shuttlecocks, call lines fairly, encourage beginners",
    },
    {
      name: "Cycling Squad",
      members: 178,
      location: "Various trails",
      schedule: "Weekends, 7:00 AM",
      sport: "Cycling",
      description: "Explore scenic routes together. Routes vary weekly.",
      rules: "Helmet mandatory, stay with group, signal turns",
    },
    {
      name: "Swimming Society",
      members: 92,
      location: "Olympic Pool",
      schedule: "Daily, 5:00 AM",
      sport: "Swimming",
      description: "Early morning lap swimming and technique workshops.",
      rules: "Swim cap required, follow lane etiquette, no diving",
    },
    {
      name: "Tennis Titans",
      members: 54,
      location: "Premier Club",
      schedule: "Sat & Sun, 10:00 AM",
      sport: "Tennis",
      description: "Singles and doubles matches for all skill levels.",
      rules: "Book courts in advance, proper tennis attire, call your own lines",
    },
    {
      name: "Gym Grinders",
      members: 201,
      location: "Fitness Hub",
      schedule: "Mon-Fri, 6:00 PM",
      sport: "Gym",
      description: "Strength training and fitness challenges with accountability partners.",
      rules: "Wipe equipment, rerack weights, spot each other",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Join Active Communities</h1>
          <p className="text-muted-foreground text-lg">
            Connect with like-minded people and stay motivated together
          </p>
        </div>

        {/* Communities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community, index) => (
            <Card key={index} className="hover:shadow-lg transition-smooth group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-smooth">
                      {community.name}
                    </h3>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      {community.sport}
                    </Badge>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {community.description}
                </p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    <span><span className="font-medium text-foreground">{community.members}</span> members</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{community.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{community.schedule}</span>
                  </div>
                </div>

                <div className="bg-accent/50 rounded-lg p-3 mb-4">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Community Rules:</p>
                  <p className="text-xs text-foreground">{community.rules}</p>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" variant="outline" size="sm">
                    View Schedule
                  </Button>
                  <Button className="flex-1 gradient-primary" size="sm">
                    Join Community
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-accent/30 border-primary/20 shadow-md">
            <CardContent className="p-12">
              <h2 className="text-2xl font-bold mb-4">Want to Create Your Own Community?</h2>
              <p className="text-muted-foreground mb-6">
                Start your own sports community and bring people together
              </p>
              <Button size="lg" className="gradient-primary shadow-green">
                Create Community
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Communities;
