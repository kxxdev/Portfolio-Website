import React from 'react';
import { userInfo, pageContent } from '../../data';
import './About.css';

const About: React.FC = () => {
  return (
    <section className='about' id='about'>
      <div className='about__content'>
        <h2 className='h2'>{pageContent.about.title}</h2>
        <div className='about__text'>
          {userInfo.aboutText.map((paragraph, index) => (
            <p key={index} className='about__description'>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <img
        src={pageContent.about.photoImage}
        alt={pageContent.about.photoAlt}
        className='about__image'
      />
    </section>
  );
};

export default About;
