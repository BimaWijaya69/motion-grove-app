import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock, DollarSign, Wifi, Droplets, Sun, PartyPopper } from "lucide-react";

const RentField = () => {
  const venues = [
    {
      name: "Champions Futsal Arena",
      sport: "Futsal",
      price: 25,
      rating: 4.8,
      reviews: 124,
      location: "Downtown, 2.3 km",
      facilities: ["Parking", "Shower", "Scoreboard", "Night Lighting"],
      available: "7 slots today",
    },
    {
      name: "Hoops Basketball Court",
      sport: "Basketball",
      price: 30,
      rating: 4.9,
      reviews: 89,
      location: "Sports Complex, 3.5 km",
      facilities: ["Parking", "Shower", "Changing Room", "AC"],
      available: "5 slots today",
    },
    {
      name: "Ace Badminton Center",
      sport: "Badminton",
      price: 15,
      rating: 4.7,
      reviews: 156,
      location: "North District, 1.8 km",
      facilities: ["Parking", "Pro Flooring", "Equipment Rental"],
      available: "12 slots today",
    },
    {
      name: "Premier Tennis Club",
      sport: "Tennis",
      price: 35,
      rating: 4.9,
      reviews: 78,
      location: "East Side, 4.2 km",
      facilities: ["Parking", "Shower", "Cafe", "Night Lighting"],
      available: "3 slots today",
    },
    {
      name: "Victory Volleyball Arena",
      sport: "Volleyball",
      price: 20,
      rating: 4.6,
      reviews: 92,
      location: "West Side, 2.9 km",
      facilities: ["Parking", "Scoreboard", "Changing Room"],
      available: "8 slots today",
    },
    {
      name: "Striker Soccer Field",
      sport: "Soccer",
      price: 40,
      rating: 4.8,
      reviews: 167,
      location: "South Park, 5.1 km",
      facilities: ["Parking", "Shower", "Night Lighting", "Cafe"],
      available: "4 slots today",
    },
  ];

  const facilityIcons = {
    "Parking": PartyPopper,
    "Shower": Droplets,
    "Night Lighting": Sun,
    "Scoreboard": Star,
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Rent Sports Venues</h1>
          <p className="text-muted-foreground text-lg">
            Book premium sports facilities at affordable rates
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8 shadow-md">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sport Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sports</SelectItem>
                  <SelectItem value="futsal">Futsal</SelectItem>
                  <SelectItem value="basketball">Basketball</SelectItem>
                  <SelectItem value="badminton">Badminton</SelectItem>
                  <SelectItem value="tennis">Tennis</SelectItem>
                  <SelectItem value="volleyball">Volleyball</SelectItem>
                  <SelectItem value="soccer">Soccer</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Available Hours" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Time</SelectItem>
                  <SelectItem value="morning">Morning (6-12)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12-6)</SelectItem>
                  <SelectItem value="evening">Evening (6-12)</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under $20</SelectItem>
                  <SelectItem value="medium">$20 - $35</SelectItem>
                  <SelectItem value="high">Above $35</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Facilities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Facilities</SelectItem>
                  <SelectItem value="parking">Parking</SelectItem>
                  <SelectItem value="shower">Shower</SelectItem>
                  <SelectItem value="lighting">Night Lighting</SelectItem>
                  <SelectItem value="cafe">Cafe</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Map Placeholder */}
        <Card className="mb-8 shadow-md">
          <CardContent className="p-6">
            <div className="bg-accent/30 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="text-muted-foreground">Map view showing nearby venues</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Venue Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue, index) => (
            <Card key={index} className="hover:shadow-lg transition-smooth group">
              <CardContent className="p-0">
                {/* Image placeholder */}
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 h-48 flex items-center justify-center rounded-t-lg">
                  <span className="text-4xl font-bold text-primary/40">{venue.sport}</span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-smooth">
                        {venue.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{venue.location}</span>
                      </div>
                    </div>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      {venue.sport}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="font-semibold">{venue.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({venue.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-medium text-foreground">{venue.available}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {venue.facilities.slice(0, 3).map((facility, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {facility}
                      </Badge>
                    ))}
                    {venue.facilities.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{venue.facilities.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <span className="text-2xl font-bold">{venue.price}</span>
                      <span className="text-sm text-muted-foreground">/hour</span>
                    </div>
                    <Button className="gradient-primary" size="sm">
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RentField;
