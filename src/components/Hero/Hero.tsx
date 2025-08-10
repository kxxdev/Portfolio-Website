import React, { useEffect, useRef } from 'react';
import { userInfo } from '../../data';
import './Hero.css';


const AnimatedStatusIndicator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let pulsePhase = 0;

    const animate = () => {
      ctx.clearRect(0, 0, 16, 16);

      // Пульсация цвета квадрата
      const pulseIntensity = 0.6 + 0.4 * Math.sin(pulsePhase);
      const red = Math.floor(160 + 40 * pulseIntensity);
      const green = Math.floor(50 + 30 * pulseIntensity);
      const blue = Math.floor(179 + 40 * pulseIntensity);

      ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
      ctx.fillRect(2, 2, 12, 12);

      // Пульсирующая рамка (темнее основного цвета)
      const borderPulse = 0.7 + 0.3 * Math.sin(pulsePhase * 1.1);
      const borderRed = Math.floor(138 * borderPulse);
      const borderGreen = Math.floor(42 * borderPulse);
      const borderBlue = Math.floor(158 * borderPulse);

      ctx.strokeStyle = `rgb(${borderRed}, ${borderGreen}, ${borderBlue})`;
      ctx.lineWidth = 1;
      ctx.strokeRect(1.5, 1.5, 13, 13);

      // Обновляем фазу пульсации
      pulsePhase += 0.05;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={16}
      height={16}
      className='status-indicator'
    />
  );
};

const Hero: React.FC = () => {
  const DotsPattern: React.FC = () => (
    <svg width='100%' className='dots' viewBox='0 0 104 104'>
      {Array.from({ length: 25 }, (_, i) => {
        const row = Math.floor(i / 5);
        const col = i % 5;
        const cx = 4 + col * 24;
        const cy = 4 + row * 24;
        return <circle key={i} cx={cx} cy={cy} r='4' />;
      })}
    </svg>
  );

  return (
    <section className='hero' id='hero'>
      <div className='hero__content'>
        <h1 className='hero__title'>
          I am {userInfo.name} <span>{userInfo.title}</span>{' '}
        </h1>
        <p className='hero__desc'>{userInfo.description}</p>
        <a
          href='https://t.me/bugibear'
          className='btn'
          target='_blank'
          rel='noopener noreferrer'
        >
          Напиши мне =&gt;
        </a>
      </div>

      <div className='hero__illustrations'>
        <img
          className='hero__logo'
          src='./images/logo-outline.svg'
          alt={`${userInfo.name} logo`}
        />
        <img
          className='hero__image'
          src='./images/my_photo.png'
          alt='My photo'
        />
        <div className='hero__status'>
          <AnimatedStatusIndicator />
          Currently working on <b>{userInfo.currentWork}</b>
        </div>
        <DotsPattern />
      </div>
    </section>
  );
};

export default Hero;
