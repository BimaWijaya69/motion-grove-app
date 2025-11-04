import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy, DollarSign } from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "City Marathon 2024",
      date: "March 15, 2024",
      time: "6:00 AM",
      location: "City Center",
      format: "5K, 10K, Half Marathon",
      fee: "Free - $25",
      quota: "500 participants",
      prize: "$5,000 prize pool",
      registered: 342,
    },
    {
      title: "3v3 Basketball Tournament",
      date: "March 20, 2024",
      time: "9:00 AM",
      location: "Sports Complex",
      format: "Team of 3",
      fee: "$30 per team",
      quota: "32 teams",
      prize: "Trophy + $1,000",
      registered: 28,
    },
    {
      title: "Futsal Championship",
      date: "March 25, 2024",
      time: "2:00 PM",
      location: "Champions Arena",
      format: "5 vs 5",
      fee: "$50 per team",
      quota: "16 teams",
      prize: "$3,000 + Medals",
      registered: 14,
    },
    {
      title: "Yoga Wellness Retreat",
      date: "April 1, 2024",
      time: "7:00 AM",
      location: "Mountain Resort",
      format: "2-day retreat",
      fee: "$150",
      quota: "50 participants",
      prize: "Certificate",
      registered: 38,
    },
    {
      title: "Badminton Open",
      date: "April 5, 2024",
      time: "8:00 AM",
      location: "Ace Center",
      format: "Singles & Doubles",
      fee: "$20",
      quota: "64 players",
      prize: "$2,000 + Trophy",
      registered: 51,
    },
    {
      title: "Swimming Gala",
      date: "April 10, 2024",
      time: "7:00 AM",
      location: "Olympic Pool",
      format: "Various distances",
      fee: "$15",
      quota: "100 swimmers",
      prize: "Medals",
      registered: 67,
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Upcoming Sports Events</h1>
          <p className="text-muted-foreground text-lg">
            Compete, challenge yourself, and win amazing prizes
          </p>
        </div>

        {/* Calendar Toggle */}
        <div className="flex justify-center gap-3 mb-8">
          <Button variant="outline">Monthly View</Button>
          <Button className="gradient-primary">List View</Button>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-smooth group">
              <CardContent className="p-6">
                {/* Date Badge */}
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm">
                    {event.date}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="font-medium">{event.registered}</span>
                    <span>registered</span>
                  </div>
                </div>

                {/* Event Title */}
                <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-smooth">
                  {event.title}
                </h3>

                {/* Event Details */}
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    <span>Format: <span className="font-medium text-foreground">{event.format}</span></span>
                  </div>
                </div>

                {/* Quota Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Quota</span>
                    <span>{event.quota}</span>
                  </div>
                  <div className="w-full bg-accent rounded-full h-2">
                    <div
                      className="bg-primary rounded-full h-2 transition-smooth"
                      style={{
                        width: `${(event.registered / parseInt(event.quota.split(" ")[0])) * 100}%`
                      }}
                    />
                  </div>
                </div>

                {/* Prize & Fee */}
                <div className="bg-accent/50 rounded-lg p-3 mb-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Trophy className="w-4 h-4 text-primary" />
                    <span className="font-medium">{event.prize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span>Entry: <span className="font-medium">{event.fee}</span></span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1" variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button className="flex-1 gradient-primary" size="sm">
                    Register Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Create Event CTA */}
        <div className="text-center mt-16">
          <Card className="bg-accent/30 border-primary/20 shadow-md">
            <CardContent className="p-12">
              <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Organize Your Own Event</h2>
              <p className="text-muted-foreground mb-6">
                Create and manage sports events with our easy-to-use platform
              </p>
              <Button size="lg" className="gradient-primary shadow-green">
                Create Event
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Events;
