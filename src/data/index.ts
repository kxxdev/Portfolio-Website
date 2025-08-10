import {
  SocialLink,
  NavLink,
  SkillBlock,
  ContactInfo,
  Quote,
  UserInfo,
  PageContent,
} from '../types';

export const userInfo: UserInfo = {
  name: '8ug8ear',
  logo: 'images/logo.svg',
  title: 'full-stack developer',
  description:
    'Практикую React, пишу Telegram ботов и еще много чего интересного',
  currentWork: 'Yandex Metrika',
  email: 'phgang@ya.ru',
  phone: '+7 (902) 443 73 32',
  aboutText: [
    'Backend-разработчик, увлечённый решением сложных задач и созданием эффективных решений. Основной стек — Python (FastAPI) и Node.js. Имею опыт работы с SQL-базами данных и MongoDB. Работал на фрилансе, разрабатывал Telegram и Discord ботов, включая масштабные проекты — например, RPG-бот с прокачкой, квестами и боями, который помог активизировать целое комьюнити.',
    'Быстро обучаюсь и с энтузиазмом погружаюсь в новые технологии, особенно в области искусственного интеллекта. Хочу развиваться в команде, получить опыт коллективной разработки и внести вклад в реальные проекты. Предпочитаю работу в офисе и мечтаю стать частью сильного профессионального сообщества.',
  ],
};

export const socialLinks: SocialLink[] = [
  {
    href: 'https://discord.com/users/259366722597814272',
    icon: './images/discord.svg',
    alt: 'discord',
  },
  {
    href: 'https://github.com/kxxdev',
    icon: './images/github.svg',
    alt: 'github',
  },
  {
    href: 'https://t.me/bugibear',
    icon: './images/telegram.svg',
    alt: 'telegram',
  },
];

export const navLinks: NavLink[] = [
  { href: '/', text: 'home' },
  { href: '#skills', text: 'skills' },
  { href: '#about', text: 'about' },
  { href: '#contacts', text: 'contacts' },
];

export const skillBlocks: SkillBlock[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'JavaScript' },
      { name: 'C#' },
      { name: 'TypeScript' },
      { name: 'Python' },
    ],
  },
  {
    name: 'Databases',
    skills: [{ name: 'MongoDB' }, { name: 'MySQL' }],
  },
  {
    name: 'Other',
    skills: [{ name: 'Figma' }, { name: 'HTML' }, { name: 'CSS' }],
  },
  {
    name: 'Frameworks',
    skills: [{ name: 'React' }, { name: 'Next' }, { name: 'FastApi' }],
  },
];

export const quote: Quote = {
  text: 'Wake the f*** Up Samurai, we have a city to burn',
  author: 'Johnny Silverhand',
};

export const contactInfo: ContactInfo[] = [
  {
    type: 'telegram',
    href: 'https://t.me/bugibear',
    icon: './images/telegram.svg',
    name: 'bugibear',
    alt: 'Telegram icon',
  },
  {
    type: 'discord',
    href: 'https://discord.com/users/259366722597814272',
    icon: './images/discord.svg',
    name: '8ug8ear.ru',
    alt: 'Discord icon',
  },
  {
    type: 'email',
    href: 'mailto:phgang@ya.ru',
    icon: './images/email.svg',
    name: 'phgang@ya.ru',
    alt: 'Mail icon',
  },
  {
    type: 'phone',
    href: 'tel:+79024437332',
    icon: './images/phone.svg',
    name: '+7 (902) 443 73 32',
    alt: 'Phone icon',
  },
];

export const pageContent: PageContent = {
  hero: {
    titlePrefix: 'I am',
    buttonText: 'Напиши мне =>',
    buttonLink: 'https://t.me/bugibear',
    logoImage: './images/logo-outline.svg',
    photoImage: './images/my_photo.png',
    photoAlt: 'My photo',
    statusText: 'Currently working on',
  },
  about: {
    title: 'about',
    photoImage: './images/my_photo2.png',
    photoAlt: '8ug8ear',
  },
  contacts: {
    title: 'contacts',
    description:
      'Если вам что-то интересно или возникли вопросы, не стесняйтесь обращаться ко мне. Я всегда готов ответить на ваши запросы или просто поболтать.',
    subtitle: 'Message me here',
  },
  skills: {
    title: 'skills',
    logoImage: './images/logo-outline.svg',
    logoAlt: '8ug8ear logo',
  },
  footer: {
    description: 'Full-stack developer in Russia',
    mediaTitle: 'Media',
    copyrightPrefix: '© Copyright',
    copyrightYear: '2025',
  },
};
