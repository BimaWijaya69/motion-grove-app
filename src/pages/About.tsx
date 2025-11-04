import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Utamakan Komunitas",
      description:
        "Kami percaya pada pembangunan komunitas olahraga dan kebugaran yang kuat dan saling mendukung.",
    },
    {
      icon: Target,
      title: "Keunggulan",
      description:
        "Kami berupaya menghadirkan kualitas terbaik di setiap fitur dan interaksi di platform kami.",
    },
    {
      icon: Users,
      title: "Inklusif",
      description:
        "Setiap orang berhak mengakses olahraga dan kebugaran, apa pun tingkat kemampuannya.",
    },
    {
      icon: Zap,
      title: "Inovasi",
      description:
        "Kami terus berbenah dan berinovasi untuk melayani komunitas dengan lebih baik.",
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
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Tentang GoRaga!
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Misi kami adalah menjadikan olahraga dan kebugaran dapat diakses
            semua orang dengan menghubungkan individu, venue, dan komunitas
            melalui teknologi.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-16 shadow-lg border-primary/20">
          <CardContent className="p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Misi Kami</h2>
              <p className="text-muted-foreground text-lg mb-6">
                GoRaga! direncanakan pada 2025 dengan visi sederhana namun kuat:
                meruntuhkan hambatan untuk beraktivitas fisik dan membangun
                ekosistem yang hidup, tempat setiap orang dapat menemukan
                partner olahraga, venue, atau komunitas yang tepat.
              </p>
              <p className="text-muted-foreground text-lg">
                Kami meyakini bahwa aktivitas fisik harus terasa menyenangkan,
                sosial, dan mudah dijangkau. Baik kamu atlet berpengalaman
                maupun baru memulai perjalanan kebugaran, GoRaga! hadir untuk
                mendukungmu di setiap langkah.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nilai-Nilai Kami
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-smooth text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Kenali Tim Kami
          </h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">
            Mitra Tepercaya Kami
          </h2>
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
            <h2 className="text-3xl font-bold mb-4">
              Ingin Menjadi Mitra Kami?
            </h2>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              Kami selalu membuka kolaborasi dengan venue, pelatih, dan
              organisasi untuk bergabung dalam jaringan yang terus berkembang.
              Ayo bekerja sama mempromosikan gaya hidup aktif.
            </p>
            <Button size="lg" className="gradient-primary shadow-green">
              Jadi Mitra
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
