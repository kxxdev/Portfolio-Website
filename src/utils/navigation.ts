// Функция для плавной прокрутки к элементу
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Функция для обработки клика по навигационной ссылке
export const handleNavClick = (href: string, event: React.MouseEvent) => {
  if (href.startsWith('#')) {
    event.preventDefault();
    const elementId = href.substring(1);
    smoothScrollTo(elementId);
  }
};
