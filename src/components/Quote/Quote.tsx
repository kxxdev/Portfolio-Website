import React from 'react';
import { Quote as QuoteType } from '../../types';
import './Quote.css';

interface QuoteProps {
  quote: QuoteType;
}

const Quote: React.FC<QuoteProps> = ({ quote }) => {
  return (
    <figure className='quote'>
      <blockquote className='quote__text'>{quote.text}</blockquote>
      <figcaption className='quote__author'>{quote.author}</figcaption>
    </figure>
  );
};

export default Quote;
