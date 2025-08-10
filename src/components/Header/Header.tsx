import React from 'react';
import { handleNavClick } from '../../utils/navigation';
import { useActiveSection } from '../../hooks/useActiveSection';
import './Header.css';
import { userInfo, navLinks, socialLinks } from '../../data';

const Header: React.FC = () => {
  const activeSection = useActiveSection(['hero', 'skills', 'about', 'contacts']);

  // Функция для определения активной ссылки
  const isLinkActive = (href: string) => {
    if (href === '/') {
      return activeSection === 'hero' || activeSection === '';
    }
    const sectionName = href.replace('#', '');
    return activeSection === sectionName;
  };

  return (
    <header className='header'>
      <div className='media-header'>
        <span className='media-header__line'></span>
        <div className='media-header__links'>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className='media'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={link.icon} alt={link.alt} className='media__icon' />
            </a>
          ))}
        </div>
      </div>

      <div className='container'>
        <div className='header__inner'>
          <a className='logo' href='/'>
            <img
              className='logo__img'
              src={userInfo.logo}
              alt={`${userInfo.name} logo`}
            />
            <span className='logo__name'>{userInfo.name}</span>
          </a>

          <nav className='header__links'>
            {navLinks.map((link, index) => (
              <a
                key={index}
                className={`header__link ${
                  isLinkActive(link.href) ? 'header__link__active' : ''
                }`}
                href={link.href}
                onClick={(e) => handleNavClick(link.href, e)}
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
