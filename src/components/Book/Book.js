import React, { useContext, useEffect } from 'react';
import { Skeleton } from 'antd';

import BookContext from '../../context/Book/bookContext';
import BookItem from './BookItem';

import './Book.css';

const Book = () => {
  const bookContext = useContext(BookContext);

  const { loading, books, getBooks } = bookContext;

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Skeleton active />;
  }

  return (
    <div className='Book'>
      <div className='title'>
        <h2>Shope JEzzS</h2>
      </div>
      {books && books.map((book) => <BookItem book={book} key={book._id} />)}
    </div>
  );
};

export default Book;
