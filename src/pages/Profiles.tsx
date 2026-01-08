import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProfileCard } from "@/components/ProfileCard";
import { profiles, cities } from "@/data/profiles";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";

const Profiles = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  const filteredProfiles = profiles.filter(profile => {
    if (selectedCity && profile.city !== selectedCity) return false;
    if (showOnlineOnly && !profile.isOnline) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">Все анкеты</h1>
            <p className="text-muted-foreground">Найдено {filteredProfiles.length} анкет</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Button
              variant={showOnlineOnly ? "default" : "outline"}
              onClick={() => setShowOnlineOnly(!showOnlineOnly)}
              className={showOnlineOnly ? "gradient-primary" : ""}
            >
              <Filter className="w-4 h-4 mr-2" />
              Только онлайн
            </Button>

            {cities.map((city) => (
              <Button
                key={city}
                variant={selectedCity === city ? "default" : "outline"}
                onClick={() => setSelectedCity(selectedCity === city ? null : city)}
                className={selectedCity === city ? "gradient-primary" : ""}
              >
                {city}
              </Button>
            ))}

            {(selectedCity || showOnlineOnly) && (
              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedCity(null);
                  setShowOnlineOnly(false);
                }}
              >
                <X className="w-4 h-4 mr-2" />
                Сбросить
              </Button>
            )}
          </div>

          {/* Profiles Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filteredProfiles.map((profile, index) => (
              <div
                key={profile.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProfileCard profile={profile} />
              </div>
            ))}
          </div>

          {filteredProfiles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">Анкеты не найдены</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCity(null);
                  setShowOnlineOnly(false);
                }}
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profiles;
