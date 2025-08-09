// Социальные ссылки
export interface SocialLink {
  href: string;
  icon: string;
  alt: string;
  name?: string;
}

// Навигационные ссылки
export interface NavLink {
  href: string;
  text: string;
  isActive?: boolean;
}

// Навык
export interface Skill {
  name: string;
}

// Блок навыков
export interface SkillBlock {
  name: string;
  skills: Skill[];
}

// Контактная информация
export interface ContactInfo {
  type: 'telegram' | 'discord' | 'email' | 'phone';
  href: string;
  icon: string;
  name: string;
  alt: string;
}

// Цитата
export interface Quote {
  text: string;
  author: string;
}

// Основная информация о пользователе
export interface UserInfo {
  name: string;
  title: string;
  description: string;
  currentWork: string;
  email: string;
  phone: string;
  aboutText: string[];
}
