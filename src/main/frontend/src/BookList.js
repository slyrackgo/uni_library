import React, { useState, useEffect } from 'react';
import styled from 'styled-components'; // We'll remove this later
import './BookList.css'; // Import the CSS file
import bookData from './bookData.json'; // Assuming you create this file

function BookList({ onBookClick }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  const filteredBooks = bookData.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleGoToLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handleBookClickInternal = (bookId, book) => {
    onBookClick(bookId, book);
    const bookIndex = filteredBooks.findIndex((b) => b.id === bookId);
    const pageNumber = Math.ceil((bookIndex + 1) / booksPerPage);
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const getPageNumbers = () => {
    let pages = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (endPage - startPage < 4) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, 5);
      } else {
        startPage = Math.max(1, totalPages - 4);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  useEffect(() => {
    console.log({ currentPage, totalPages });
  }, [currentPage, totalPages]);

  return (
    <div className="list-container">
      <h2>Book List</h2>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ul className="book-list-ul">
        {currentBooks.map((book) => (
          <li key={book.id} className="book-item">
            <button onClick={() => handleBookClickInternal(book.id, book)} className="book-link">
              {book.id}. {book.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="pagination-container">
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          First page
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`pagination-button ${currentPage === pageNumber ? 'active' : ''}`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
        
      </div>
    </div>
  );
}

export default BookList;