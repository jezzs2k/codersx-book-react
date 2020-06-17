import React from 'react';
import PropTypes from 'prop-types';

import './BookRenterItem.css';

const BookRenterItem = ({ bookRenter }) => {
  const { row, userName, bookTitle, date, deadLine } = bookRenter;
  return (
    <div className='book-renter-child'>
      <div className='row'>
        <span>{row}</span>
      </div>
      <div className='user'>
        <h3 className='name'>{userName}</h3>
      </div>
      <div className='book'>
        <h3 className='name'>{bookTitle}</h3>
      </div>
      <div className='complete'>
        <button className='btn btn-complete'>Complete</button>
      </div>
      <div className='date'>
        <span>{date}</span>
        <span>-</span>
        <span>{deadLine}</span>
      </div>
    </div>
  );
};

BookRenterItem.propTypes = {
  bookRenter: PropTypes.shape({
    row: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    deadLine: PropTypes.string.isRequired,
  }),
};

export default BookRenterItem;
