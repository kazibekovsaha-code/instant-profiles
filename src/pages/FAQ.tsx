import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Сайт бесплатный?",
    answer: "Да, все функции сайта абсолютно бесплатны. Вы можете просматривать любые анкеты и связываться с девушками без каких-либо платежей."
  },
  {
    question: "Нужна ли регистрация?",
    answer: "Нет, регистрация не требуется. Просто выберите понравившуюся анкету и напишите в Telegram."
  },
  {
    question: "Как связаться с девушкой?",
    answer: "Откройте профиль понравившейся девушки и нажмите кнопку 'Написать в Telegram'. Вы будете перенаправлены напрямую в мессенджер."
  },
  {
    question: "Анкеты реальные?",
    answer: "Да, все анкеты проходят модерацию. Мы проверяем подлинность фотографий и контактных данных."
  },
  {
    question: "Как добавить свою анкету?",
    answer: "Для добавления анкеты свяжитесь с нами через раздел 'Контакты'. Наши модераторы помогут с размещением."
  },
  {
    question: "Что означает статус 'Онлайн'?",
    answer: "Статус 'Онлайн' показывает, что девушка недавно была активна и с высокой вероятностью ответит на ваше сообщение."
  },
  {
    question: "Можно ли пожаловаться на анкету?",
    answer: "Да, если вы обнаружили фейковую анкету или нарушение правил, свяжитесь с нами через раздел 'Контакты'."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Page Header */}
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold">Частые вопросы</h1>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-medium">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
