import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  margin-top: 20px;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const BookListUL = styled.ul`
  list-style: none;
  padding: 0;
`;

const BookItem = styled.li`
  padding: 8px 0;
  border-bottom: 1px solid #eee;
`;

const PaginationContainer = styled.div`
  margin-top: 10px;
`;

const PaginationButton = styled.button`
  padding: 5px 10px;
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

function BookList() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

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

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
          <BookItem key={book.id}>{book.name}</BookItem>
        ))}
      </BookListUL>
      <PaginationContainer>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <PaginationButton key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
            {pageNumber}
          </PaginationButton>
        ))}
      </PaginationContainer>
    </ListContainer>
  );
}

export default BookList;