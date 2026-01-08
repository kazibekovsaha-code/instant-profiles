import { Link } from "react-router-dom";
import { Heart, Send, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="text-xl font-serif font-semibold">
                Love<span className="gradient-text">Meet</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Современная платформа для знакомств. Найди свою любовь уже сегодня!
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/profiles" className="hover:text-foreground transition-colors">Анкеты</Link></li>
              <li><Link to="/cities" className="hover:text-foreground transition-colors">Города</Link></li>
              <li><Link to="/online" className="hover:text-foreground transition-colors">Онлайн</Link></li>
              <li><Link to="/new" className="hover:text-foreground transition-colors">Новые анкеты</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">О нас</Link></li>
              <li><Link to="/rules" className="hover:text-foreground transition-colors">Правила сайта</Link></li>
              <li><Link to="/faq" className="hover:text-foreground transition-colors">Частые вопросы</Link></li>
              <li><Link to="/contacts" className="hover:text-foreground transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 LoveMeet. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
