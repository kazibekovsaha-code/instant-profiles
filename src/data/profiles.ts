import profile1 from "@/assets/profiles/profile-1.webp";
import profile2 from "@/assets/profiles/profile-2.jpg";
import profile3 from "@/assets/profiles/profile-3.webp";
import profile4 from "@/assets/profiles/profile-4.webp";
import profile5 from "@/assets/profiles/profile-5.jpg";
import profile6 from "@/assets/profiles/profile-6.jpg";
import profile7 from "@/assets/profiles/profile-7.jpg";
import profile8 from "@/assets/profiles/profile-8.jpg";
import profile9 from "@/assets/profiles/profile-9.jpg";
import profile10 from "@/assets/profiles/profile-10.jpg";

export interface Profile {
  id: string;
  name: string;
  age: number;
  city: string;
  photo: string;
  isOnline: boolean;
  telegram: string;
  about: string;
  interests: string[];
  height: number;
  lookingFor: string;
}

export const profiles: Profile[] = [
  {
    id: "1",
    name: "Алина",
    age: 24,
    city: "Москва",
    photo: profile1,
    isOnline: true,
    telegram: "@alina_msk",
    about: "Люблю путешествия и активный отдых. Ищу интересного собеседника для приятного общения.",
    interests: ["Путешествия", "Фотография", "Йога"],
    height: 168,
    lookingFor: "Серьёзные отношения"
  },
  {
    id: "2",
    name: "Виктория",
    age: 26,
    city: "Санкт-Петербург",
    photo: profile2,
    isOnline: true,
    telegram: "@vika_spb",
    about: "Стилист, обожаю моду и искусство. Ценю искренность и чувство юмора.",
    interests: ["Мода", "Искусство", "Кино"],
    height: 172,
    lookingFor: "Знакомства"
  },
  {
    id: "3",
    name: "Кристина",
    age: 23,
    city: "Москва",
    photo: profile3,
    isOnline: false,
    telegram: "@kristina_m",
    about: "Автоспорт - моя страсть. Ищу того, кто разделит мои интересы.",
    interests: ["Автоспорт", "Экстрим", "Музыка"],
    height: 175,
    lookingFor: "Общение"
  },
  {
    id: "4",
    name: "Анастасия",
    age: 25,
    city: "Казань",
    photo: profile4,
    isOnline: true,
    telegram: "@nastya_kzn",
    about: "Творческая натура, люблю театр и хорошую музыку. Мечтаю найти родственную душу.",
    interests: ["Театр", "Музыка", "Литература"],
    height: 165,
    lookingFor: "Серьёзные отношения"
  },
  {
    id: "5",
    name: "Елена",
    age: 27,
    city: "Сочи",
    photo: profile5,
    isOnline: false,
    telegram: "@elena_sochi",
    about: "Фитнес-тренер, веду здоровый образ жизни. Ищу активного и целеустремлённого мужчину.",
    interests: ["Фитнес", "Здоровье", "Танцы"],
    height: 170,
    lookingFor: "Знакомства"
  },
  {
    id: "6",
    name: "Дарья",
    age: 22,
    city: "Екатеринбург",
    photo: profile6,
    isOnline: true,
    telegram: "@dasha_ekb",
    about: "Студентка, изучаю дизайн. Открыта к новым знакомствам и интересным встречам.",
    interests: ["Дизайн", "Рисование", "Кофе"],
    height: 163,
    lookingFor: "Общение"
  },
  {
    id: "7",
    name: "Полина",
    age: 24,
    city: "Москва",
    photo: profile7,
    isOnline: false,
    telegram: "@polina_msk",
    about: "Работаю в сфере красоты, обожаю путешествия и новые впечатления.",
    interests: ["Красота", "Путешествия", "Фото"],
    height: 166,
    lookingFor: "Серьёзные отношения"
  },
  {
    id: "8",
    name: "Мария",
    age: 25,
    city: "Дубай",
    photo: profile8,
    isOnline: true,
    telegram: "@maria_dubai",
    about: "Живу в эмиратах, люблю роскошь и красивую жизнь. Ищу достойного спутника.",
    interests: ["Путешествия", "Роскошь", "Шопинг"],
    height: 171,
    lookingFor: "Знакомства"
  },
  {
    id: "9",
    name: "София",
    age: 23,
    city: "Санкт-Петербург",
    photo: profile9,
    isOnline: false,
    telegram: "@sofia_model",
    about: "Модель, работаю с известными брендами. Ценю внимание и заботу.",
    interests: ["Мода", "Фотосессии", "Спорт"],
    height: 178,
    lookingFor: "Серьёзные отношения"
  },
  {
    id: "10",
    name: "Екатерина",
    age: 26,
    city: "Москва",
    photo: profile10,
    isOnline: true,
    telegram: "@kate_gourmet",
    about: "Гурман и эстет, ценю изысканную кухню и хорошее вино.",
    interests: ["Рестораны", "Вино", "Путешествия"],
    height: 167,
    lookingFor: "Знакомства"
  }
];

export const cities = [...new Set(profiles.map(p => p.city))];
