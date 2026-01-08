import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProfileCard } from "@/components/ProfileCard";
import { profiles, cities } from "@/data/profiles";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Cities = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCity = searchParams.get("city");

  const filteredProfiles = selectedCity
    ? profiles.filter(p => p.city === selectedCity)
    : [];

  const cityCounts = cities.map(city => ({
    name: city,
    count: profiles.filter(p => p.city === city).length
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-8 h-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-serif font-bold">Города</h1>
            </div>
            <p className="text-muted-foreground">Выберите город для поиска анкет</p>
          </div>

          {/* Cities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {cityCounts.map((city) => (
              <Button
                key={city.name}
                variant={selectedCity === city.name ? "default" : "outline"}
                className={`h-auto py-6 flex flex-col gap-1 ${
                  selectedCity === city.name ? "gradient-primary" : ""
                }`}
                onClick={() => setSearchParams(selectedCity === city.name ? {} : { city: city.name })}
              >
                <span className="text-lg font-semibold">{city.name}</span>
                <span className="text-sm opacity-80">{city.count} анкет</span>
              </Button>
            ))}
          </div>

          {/* Selected City Profiles */}
          {selectedCity && (
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">
                Анкеты в городе {selectedCity}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {filteredProfiles.map((profile, index) => (
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
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cities;
