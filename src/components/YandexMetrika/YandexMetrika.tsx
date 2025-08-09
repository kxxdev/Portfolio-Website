import { useEffect } from 'react';

interface YandexMetrikaProps {
  counterId: string;
}

declare global {
  interface Window {
    ym: (id: string, method: string, params?: any) => void;
  }
}

const YandexMetrika: React.FC<YandexMetrikaProps> = ({ counterId }) => {
  useEffect(() => {
    // Создаем скрипт для Яндекс.Метрики
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
			(function(m,e,t,r,i,k,a){
					m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
					m[i].l=1*new Date();
					for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
					k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
				})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${counterId}', 'ym');

				ym(${counterId}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
    `;

    document.head.appendChild(script);

    // Создаем noscript для случаев, когда JS отключен
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <div><img src="https://mc.yandex.ru/watch/${counterId}" style="position:absolute; left:-9999px;" alt="" /></div>
    `;
    document.body.appendChild(noscript);

    // Очистка при размонтировании компонента
    return () => {
      document.head.removeChild(script);
      document.body.removeChild(noscript);
    };
  }, [counterId]);

  return null; // Компонент ничего не рендерит
};

export default YandexMetrika;
