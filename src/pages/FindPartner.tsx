import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Clock, TrendingUp, UserPlus } from "lucide-react";

const FindPartner = () => {
  const partners = [
    {
      name: "John Martinez",
      sport: "Futsal",
      level: "Intermediate",
      location: "Downtown Area",
      schedule: "Weekends, 5-7 PM",
      gender: "Male",
    },
    {
      name: "Emily Chen",
      sport: "Badminton",
      level: "Beginner",
      location: "North District",
      schedule: "Weekdays, 7-9 AM",
      gender: "Female",
    },
    {
      name: "Marcus Thompson",
      sport: "Basketball",
      level: "Pro",
      location: "Sports Complex",
      schedule: "Daily, 6-8 PM",
      gender: "Male",
    },
    {
      name: "Sophie Anderson",
      sport: "Running",
      level: "Intermediate",
      location: "City Park",
      schedule: "Mornings, 6 AM",
      gender: "Female",
    },
    {
      name: "David Kim",
      sport: "Gym",
      level: "Pro",
      location: "Fitness Hub",
      schedule: "Evenings, 5-8 PM",
      gender: "Male",
    },
    {
      name: "Lisa Brown",
      sport: "Yoga",
      level: "Intermediate",
      location: "Wellness Center",
      schedule: "Weekends, 8 AM",
      gender: "Female",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Find Your Exercise Partner</h1>
          <p className="text-muted-foreground text-lg">
            Connect with like-minded athletes and sports enthusiasts in your area
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8 shadow-md">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sport Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sports</SelectItem>
                  <SelectItem value="futsal">Futsal</SelectItem>
                  <SelectItem value="basketball">Basketball</SelectItem>
                  <SelectItem value="badminton">Badminton</SelectItem>
                  <SelectItem value="running">Running</SelectItem>
                  <SelectItem value="gym">Gym</SelectItem>
                  <SelectItem value="yoga">Yoga</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="downtown">Downtown Area</SelectItem>
                  <SelectItem value="north">North District</SelectItem>
                  <SelectItem value="south">South District</SelectItem>
                  <SelectItem value="east">East Side</SelectItem>
                  <SelectItem value="west">West Side</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Schedule" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Time</SelectItem>
                  <SelectItem value="morning">Morning (6-9 AM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12-3 PM)</SelectItem>
                  <SelectItem value="evening">Evening (5-9 PM)</SelectItem>
                  <SelectItem value="weekend">Weekends</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="pro">Pro</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="any">Any</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Partner Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="hover:shadow-lg transition-smooth group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-primary/20 text-primary text-lg font-semibold">
                      {partner.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-smooth">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{partner.sport}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span>Level: <span className="font-medium text-foreground">{partner.level}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{partner.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{partner.schedule}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" variant="outline" size="sm">
                    View Profile
                  </Button>
                  <Button className="flex-1 gradient-primary" size="sm">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Invite
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Partners
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FindPartner;
