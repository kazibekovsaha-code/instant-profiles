import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Heart, Shield, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">О нас</h1>
            <p className="text-muted-foreground text-lg">
              LoveMeet — современная платформа для знакомств
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert max-w-none mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы создали LoveMeet с одной простой целью — помочь людям находить друг друга. 
              Без сложной регистрации, без подписок, без лайков. Просто реальные анкеты 
              девушек со всей России с прямыми контактами в Telegram.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Реальные анкеты</h3>
              <p className="text-muted-foreground">
                Все анкеты проходят модерацию. Мы гарантируем, что каждая анкета принадлежит реальному человеку.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
              <p className="text-muted-foreground">
                Никаких личных данных не требуется. Общение происходит напрямую в Telegram.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрый доступ</h3>
              <p className="text-muted-foreground">
                Никакой регистрации. Выбери понравившуюся анкету и напиши напрямую.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Бесплатно</h3>
              <p className="text-muted-foreground">
                Все функции сайта абсолютно бесплатны. Никаких скрытых платежей.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
