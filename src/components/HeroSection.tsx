import { Link } from "react-router-dom";
import { ArrowRight, Users, Heart, Shield } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Heart className="w-4 h-4 text-primary" fill="currentColor" />
            <span className="text-sm font-medium">Более 10,000 анкет</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Найди свою{" "}
            <span className="gradient-text">любовь</span>
            {" "}сегодня
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Тысячи реальных анкет девушек со всей России. Никакой регистрации — просто найди и напиши в Telegram.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="gradient-primary text-lg px-8 hover:opacity-90 transition-opacity">
              <Link to="/profiles">
                Смотреть анкеты
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/online">
                Кто сейчас онлайн
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm text-muted-foreground">Анкет</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-muted-foreground">Городов</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-muted-foreground">Реальные</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
