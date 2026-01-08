import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { profiles } from "@/data/profiles";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Ruler, Heart, Send } from "lucide-react";

const ProfileDetail = () => {
  const { id } = useParams();
  const profile = profiles.find(p => p.id === id);

  if (!profile) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 md:pt-28 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-serif font-bold mb-4">Анкета не найдена</h1>
            <Button asChild>
              <Link to="/profiles">Вернуться к анкетам</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/profiles">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад к анкетам
            </Link>
          </Button>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Photo */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl aspect-[3/4]">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Online Badge */}
                {profile.isOnline && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm">
                    <span className="online-indicator" />
                    <span className="text-sm font-medium text-online">Онлайн</span>
                  </div>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              {/* Name & Age */}
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
                  {profile.name}, {profile.age}
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-5 h-5" />
                    <span>{profile.city}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Ruler className="w-5 h-5" />
                    <span>{profile.height} см</span>
                  </div>
                </div>
              </div>

              {/* Looking For */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{profile.lookingFor}</span>
              </div>

              {/* About */}
              <div>
                <h2 className="text-xl font-semibold mb-3">О себе</h2>
                <p className="text-muted-foreground leading-relaxed">{profile.about}</p>
              </div>

              {/* Interests */}
              <div>
                <h2 className="text-xl font-semibold mb-3">Интересы</h2>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 rounded-full bg-secondary text-sm font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Telegram Contact */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h2 className="text-xl font-semibold mb-4">Связаться</h2>
                <p className="text-muted-foreground mb-4">
                  Напиши {profile.name} напрямую в Telegram — это бесплатно и без регистрации!
                </p>
                <Button asChild className="w-full gradient-primary text-lg py-6">
                  <a
                    href={`https://t.me/${profile.telegram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Написать в Telegram
                  </a>
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-3">
                  {profile.telegram}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProfileDetail;
