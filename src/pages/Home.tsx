import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Users, MapPin, Calendar, Trophy, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sports.jpg";

const Home = () => {
  const highlights = [
    {
      title: "Turnamen Futsal Akhir Pekan",
      location: "Central Sports Arena",
      date: "Sabtu, 10 Pagi",
      participants: 24,
    },
    {
      title: "Komunitas Lari Pagi",
      location: "City Park",
      date: "Setiap Hari, 6 Pagi",
      participants: 156,
    },
    {
      title: "Sesi Yoga Santai",
      location: "Green Valley",
      date: "Minggu, 8 Pagi",
      participants: 45,
    },
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      text: "Menemukan banyak teman olahraga di sini! Komunitasnya aktif dan saling mendukung.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      text: "Sewa lapangan jadi super mudah. Platformnya bagus dan harganya juga bersahabat!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      text: "Ikut komunitas basket dan dapat teman baru seumur hidup. Sangat direkomendasikan!",
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
                Mulai <span className="text-primary">Perjalanan Aktifmu</span>{" "}
                Hari Ini
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Temukan partner olahraga, sewa lapangan, bergabung dengan
                komunitas, dan ikuti berbagai event menarik — semuanya dalam
                satu tempat.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="gradient-primary shadow-green text-lg px-8"
                >
                  Mulai Olahraga
                </Button>
                <Button size="lg" variant="outline">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src={heroImage}
                alt="Orang berolahraga bersama"
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
                    <h3 className="font-semibold">Cari Partner</h3>
                    <p className="text-sm text-muted-foreground">
                      Temukan teman olahraga
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/fields" className="group">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/50 hover:bg-primary/10 transition-smooth cursor-pointer">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Sewa Lapangan</h3>
                    <p className="text-sm text-muted-foreground">
                      Pesan tempat olahraga
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/communities" className="group">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/50 hover:bg-primary/10 transition-smooth cursor-pointer">
                  <Calendar className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Gabung Komunitas</h3>
                    <p className="text-sm text-muted-foreground">
                      Temukan kelompokmu
                    </p>
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Sorotan Minggu Ini
          </h2>
          <p className="text-muted-foreground text-lg">
            Event dan komunitas menarik yang tidak boleh kamu lewatkan
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-smooth cursor-pointer group"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Trophy className="w-8 h-8 text-primary" />
                  <span className="text-sm bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium">
                    {item.participants} peserta
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
                  Lihat Detail
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Apa Kata Anggota Kami
            </h2>
            <p className="text-muted-foreground text-lg">
              Bergabunglah bersama ribuan atlet dan pecinta olahraga yang puas
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Siap Jadi Lebih Aktif?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Bergabunglah dengan komunitas kami hari ini dan mulai perjalanan
            menuju gaya hidup yang lebih sehat dan aktif.
          </p>
          <Button
            size="lg"
            className="gradient-primary shadow-green text-lg px-12"
          >
            Daftar Gratis
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
