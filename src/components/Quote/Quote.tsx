import React from 'react';
import { quote } from '../../data';
import './Quote.css';


const Quote: React.FC = () => {
  return (
    <figure className='quote'>
      <blockquote className='quote__text'>{quote.text}</blockquote>
      <figcaption className='quote__author'>{quote.author}</figcaption>
    </figure>
  );
};

export default Quote;
