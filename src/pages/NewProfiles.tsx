import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProfileCard } from "@/components/ProfileCard";
import { profiles } from "@/data/profiles";
import { Sparkles } from "lucide-react";

const NewProfiles = () => {
  // Simulate "new" profiles as first 6
  const newProfiles = profiles.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-8 h-8 text-gold" />
              <h1 className="text-3xl md:text-4xl font-serif font-bold">Новые анкеты</h1>
            </div>
            <p className="text-muted-foreground">
              Недавно добавленные анкеты на сайте
            </p>
          </div>

          {/* Profiles Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {newProfiles.map((profile, index) => (
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
      </main>

      <Footer />
    </div>
  );
};

export default NewProfiles;
