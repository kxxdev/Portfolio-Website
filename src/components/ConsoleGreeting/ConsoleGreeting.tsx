import { useEffect } from 'react';

// Константы данных
const GREETINGS = [
  '🔍 Ищете баги? Их тут нет... наверное...',
  '👋 Привет, любопытный разработчик! Что привело тебя в мою консоль?',
  '🎯 404: Баги не найдены. Но если найдёте - это фичи!',
  '☕ Пока ты тут, код работает. Совпадение? Не думаю!',
  "🚀 console.log('Хьюстон, у нас есть посетитель!')",
  '🎮 Нажми ↑↑↓↓←→←→BA для разблокировки секретного режима (шучу, не работает)',
  '🔧 Добро пожаловать в машинное отделение сайта! Осторожно, горячий код!',
  "💻 if (ты_читаешь_это) { console.log('Ты крутой!') }",
  '🎭 Добро пожаловать за кулисы! Тут всё держится на промисах и надежде',
  '🍕 Этот сайт работает на пицце и кофеине. В основном на кофеине.',
  '🦄 Легенда гласит, что здесь обитает единорог. Пока не видели, но ищем в коде.',
  '🎨 Художник смотрит на холст, а разработчик — в консоль. Искусство!',
  '🏴‍☠️ Arr! Ты нашёл секретную пиратскую консоль! Где моё золото в биткоинах?',
  '🤖 Beep boop! Я не робот... или робот? *экзистенциальный кризис в бинарном коде*',
  '🔮 Консоль предсказывает: в твоём будущем есть дебаггинг!',
] as const;

const SURPRISES = [
  '🍰 Вот твой виртуальный торт!',
  '⭐ Ты получаешь звезду за любопытство!',
  '🎁 Держи виртуальный подарок!',
  '🏆 Награда за исследование консоли!',
  '💎 Ты нашёл редкий алмаз кода!',
] as const;

// Утилитарные функции
const getRandomItem = <T,>(array: readonly T[]): T => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const logConsoleGreeting = (greeting: string): void => {
  console.log(
    '%c' + greeting,
    'color: #ffffffff; font-size: 16px; font-weight: bold; padding: 10px; background: linear-gradient(90deg, rgba(173, 54, 177, 1) 0%, rgba(76, 5, 134, 1) 100%); border-left: 4px solid #582fb6ff;'
  );
};

const createSecretFunction = (): void => {
  if (typeof window !== 'undefined') {
    (window as any).secretFunction = (): string => {
      const surprise = getRandomItem(SURPRISES);
      console.log('🎉 Ты нашёл секретную функцию!');
      console.log(surprise);
      return surprise;
    };
  }
};

const ConsoleGreeting = (): null => {
  useEffect(() => {
    // Проверяем, что мы в браузере
    if (typeof window === 'undefined') return;

    const randomGreeting = getRandomItem(GREETINGS);

    logConsoleGreeting(randomGreeting);
    createSecretFunction();

    console.log('💡 Подсказка: вызови secretFunction() в консоли!');
  }, []);

  return null;
};

export default ConsoleGreeting;
