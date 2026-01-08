import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ProfileCard } from "@/components/ProfileCard";
import { profiles, cities } from "@/data/profiles";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const onlineProfiles = profiles.filter(p => p.isOnline);
  const featuredProfiles = profiles.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 md:pt-20">
        <HeroSection />

        {/* Online Now Section */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-online animate-pulse" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold">Сейчас онлайн</h2>
              </div>
              <Button asChild variant="ghost" className="text-primary">
                <Link to="/online">
                  Все онлайн
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {onlineProfiles.map((profile, index) => (
                <div
                  key={profile.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProfileCard profile={profile} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Profiles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-gold" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold">Популярные анкеты</h2>
              </div>
              <Button asChild variant="ghost" className="text-primary">
                <Link to="/profiles">
                  Все анкеты
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
              {featuredProfiles.map((profile, index) => (
                <div
                  key={profile.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProfileCard profile={profile} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold">Города</h2>
              </div>
              <Button asChild variant="ghost" className="text-primary">
                <Link to="/cities">
                  Все города
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              {cities.map((city) => (
                <Link
                  key={city}
                  to={`/cities?city=${city}`}
                  className="px-6 py-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-3xl gradient-primary p-8 md:p-12 text-center">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                  Готов найти свою любовь?
                </h2>
                <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
                  Просмотри все анкеты и напиши понравившейся девушке напрямую в Telegram
                </p>
                <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                  <Link to="/profiles">
                    Перейти к анкетам
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
