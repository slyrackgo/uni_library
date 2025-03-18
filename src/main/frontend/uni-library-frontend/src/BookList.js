import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  margin-top: 30px;
`;

const SearchInput = styled.input`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

const BookListUL = styled.ul`
  list-style: none;
  padding: 0;
`;

const BookItem = styled.li`
  padding: 12px 0;
  border-bottom: 1px solid #eee;

  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    font-size: 1em;
    color: #3498db;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PaginationContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const PaginationButton = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;

  &:hover {
    background-color: #f0f0f0;
  }

  &.active {
    background-color: #3498db;
    color: white;
  }
`;

function BookList({ onBookClick }) {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 3;

  useEffect(() => {
    fetch('/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleBookClick = (bookId) => {
    const bookIndex = filteredBooks.findIndex((book) => book.id === bookId);
    const pageNumber = Math.ceil((bookIndex + 1) / booksPerPage);
    setCurrentPage(pageNumber);
    onBookClick(bookId);
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

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

  return (
    <ListContainer>
      <h2>Book List</h2>
      <SearchInput
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <BookListUL>
        {currentBooks.map((book) => (
          <BookItem key={book.id}>
            <button
              style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}
              onClick={() => handleBookClick(book.id)}
            >
              {book.id}. {book.name} {/* Display book ID */}
            </button>
          </BookItem>
        ))}
      </BookListUL>
      <PaginationContainer>
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
        {getPageNumbers().map((pageNumber) => (
          <PaginationButton
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={currentPage === pageNumber ? 'active' : ''}
          >
            {pageNumber}
          </PaginationButton>
        ))}
        <PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    </ListContainer>
  );
}

export default BookList;