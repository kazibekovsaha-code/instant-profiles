import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Контакты</h1>
            <p className="text-muted-foreground text-lg">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-8 border border-border text-center">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telegram</h3>
              <p className="text-muted-foreground mb-4">Быстрая связь через мессенджер</p>
              <Button asChild className="w-full gradient-primary">
                <a href="https://t.me/lovemeet_support" target="_blank" rel="noopener noreferrer">
                  @lovemeet_support
                </a>
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border text-center">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">Напишите нам на почту</p>
              <Button asChild variant="outline" className="w-full">
                <a href="mailto:support@lovemeet.ru">
                  support@lovemeet.ru
                </a>
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border text-center">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Поддержка</h3>
              <p className="text-muted-foreground mb-4">Ответим в течение 24 часов</p>
              <Button asChild variant="outline" className="w-full">
                <a href="https://t.me/lovemeet_help" target="_blank" rel="noopener noreferrer">
                  Написать
                </a>
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-serif font-bold mb-4">Добавить анкету</h2>
            <p className="text-muted-foreground mb-6">
              Хотите разместить свою анкету на нашем сайте? Это абсолютно бесплатно! 
              Свяжитесь с нами через Telegram, и наши модераторы помогут с размещением.
            </p>
            <Button asChild className="gradient-primary">
              <a href="https://t.me/lovemeet_add" target="_blank" rel="noopener noreferrer">
                <Send className="w-4 h-4 mr-2" />
                Добавить анкету
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
