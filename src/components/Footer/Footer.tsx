import React from 'react';
import { userInfo, socialLinks, pageContent } from '../../data';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__inner'>
          <div className='footer__info'>
            <div className='footer__header'>
              <div className='logo'>
                <img src={userInfo.logo} alt='logo' className='logo__img' />
                <div className='logo__name'>{userInfo.name}</div>
              </div>
              <a className='footer__email' href={`mailto:${userInfo.email}`}>
                {userInfo.email}
              </a>
            </div>

            <p className='footer__description'>
              {pageContent.footer.description}
            </p>
          </div>

          <div className='footer__media'>
            <div className='footer__title'>{pageContent.footer.mediaTitle}</div>
            <div className='footer__list'>
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
        </div>

        <div className='footer__copyright'>
          {pageContent.footer.copyrightPrefix} {pageContent.footer.copyrightYear}. Made by {userInfo.name}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
