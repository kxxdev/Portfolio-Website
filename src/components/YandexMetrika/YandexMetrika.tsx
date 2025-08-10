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
    const counterScript = document.createElement('script');
    counterScript.type = 'text/javascript';
    counterScript.async = true;
    counterScript.innerHTML = `
			(function(m,e,t,r,i,k,a){
					m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
					m[i].l=1*new Date();
					for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
					k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
				})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${counterId}', 'ym');

				ym(${counterId}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
    `;

    document.head.appendChild(counterScript);

    // Создаем noscript для случаев, когда JS отключен
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <div><img src="https://mc.yandex.ru/watch/${counterId}" style="position:absolute; left:-9999px;" alt="" /></div>
    `;
    document.body.appendChild(noscript);

    // Подключаем вариокуб.
    const variocubScript = document.createElement('script');
    variocubScript.type = 'text/javascript';
    variocubScript.async = true;
    variocubScript.innerHTML = `
      (function(e, x, pe, r, i, me, nt){
      e[i]=e[i]||function(){(e[i].a=e[i].a||[]).push(arguments)},
      me=x.createElement(pe),me.async=1,me.src=r,nt=x.getElementsByTagName(pe)[0],me.addEventListener('error',function(){function cb(t){t=t[t.length-1],'function'==typeof t&&t({flags:{}})};Array.isArray(e[i].a)&&e[i].a.forEach(cb);e[i]=function(){cb(arguments)}}),nt.parentNode.insertBefore(me,nt)})
      (window, document, 'script', 'https://abt.s3.yandex.net/expjs/latest/exp.js', 'ymab');
      ymab('metrika.${counterId}', 'init'/*, {clientFeatures}, {callback}*/);
    `;

    document.head.appendChild(variocubScript);

    // Очистка при размонтировании компонента
    return () => {
      document.head.removeChild(counterScript);
      document.body.removeChild(noscript);
      document.head.removeChild(variocubScript);
    };
  }, [counterId]);

  return null; // Компонент ничего не рендерит
};

export default YandexMetrika;
