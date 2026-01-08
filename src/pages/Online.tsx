import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProfileCard } from "@/components/ProfileCard";
import { profiles } from "@/data/profiles";

const Online = () => {
  const onlineProfiles = profiles.filter(p => p.isOnline);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-4 h-4 rounded-full bg-online animate-pulse" />
              <h1 className="text-3xl md:text-4xl font-serif font-bold">Сейчас онлайн</h1>
            </div>
            <p className="text-muted-foreground">
              {onlineProfiles.length} девушек онлайн прямо сейчас
            </p>
          </div>

          {/* Profiles Grid */}
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

          {onlineProfiles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">Сейчас никого нет онлайн</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Online;
