import React from 'react';
import { contactInfo, pageContent } from '../../data';
import './Contacts.css';


const Contacts: React.FC = () => {
  return (
    <section className='contacts' id='contacts'>
      <h2 className='h2'>{pageContent.contacts.title}</h2>
      <div className='contacts__content'>
        <p className='contacts__description'>
          {pageContent.contacts.description}
        </p>

        <div className='contacts__media'>
          <h3 className='contacts__title'>{pageContent.contacts.subtitle}</h3>
          <div className='contacts__list'>
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                className='contact'
                href={contact.href}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={contact.icon} alt={contact.alt} />
                <div className='contact__name'>{contact.name}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
