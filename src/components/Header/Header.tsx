import React from 'react';
import { NavLink, SocialLink } from '../../types';
import { handleNavClick } from '../../utils/navigation';
import './Header.css';

interface HeaderProps {
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  siteName: string;
}

const Header: React.FC<HeaderProps> = ({ navLinks, socialLinks, siteName }) => {
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
              src='./images/logo-default.svg'
              alt={`${siteName} logo`}
            />
            <span className='logo__name'>{siteName}</span>
          </a>

          <nav className='header__links'>
            {navLinks.map((link, index) => (
              <a
                key={index}
                className={`header__link ${
                  link.isActive ? 'header__link__active' : ''
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
