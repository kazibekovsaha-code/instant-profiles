import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollText } from "lucide-react";

const Rules = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <div className="flex items-center gap-3 mb-8">
            <ScrollText className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold">Правила сайта</h1>
          </div>

          {/* Rules Content */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-xl font-semibold mb-4">1. Уважительное общение</h2>
              <p className="text-muted-foreground">
                При общении с пользователями сайта соблюдайте уважительный тон. 
                Оскорбления, угрозы и хамство недопустимы.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-xl font-semibold mb-4">2. Реальные данные</h2>
              <p className="text-muted-foreground">
                Все анкеты на сайте принадлежат реальным людям. 
                Запрещено использовать чужие фотографии и выдавать себя за других.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-xl font-semibold mb-4">3. Запрещённый контент</h2>
              <p className="text-muted-foreground">
                Запрещено размещение незаконного контента, спама, рекламы 
                и любых материалов, нарушающих законодательство РФ.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-xl font-semibold mb-4">4. Возрастные ограничения</h2>
              <p className="text-muted-foreground">
                Сайт предназначен для лиц старше 18 лет. 
                Использование сайта несовершеннолетними запрещено.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-xl font-semibold mb-4">5. Жалобы и блокировки</h2>
              <p className="text-muted-foreground">
                При нарушении правил администрация оставляет за собой право 
                заблокировать пользователя без предварительного уведомления.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Rules;
