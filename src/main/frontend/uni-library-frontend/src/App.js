import React, { useState } from 'react';
import BookDownload from './BookDownload';
import BookList from './BookList';

import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
  color: #007bff;
  font-size: 2.5em;
  margin: 0;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  width: 50%;
  box-sizing: border-box;
`;

const RightSection = styled.div`
  width: 50%;
  box-sizing: border-box;
`;

const BookDetails = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
`;

const BookImage = styled.img`
  max-width: 150px;
  margin-right: 15px;
  align-self: flex-start;
`;

const BookInfo = styled.div`
  flex-grow: 1;
`;

function App() {
  const [selectedBookId, setSelectedBookId] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (bookId, book) => {
    setSelectedBookId(bookId);
    setSelectedBook(book);
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <Header>
        <Title>Uni Library</Title>
        {selectedBook && (
          <BookDetails>
            <BookImage src={selectedBook.imageUrl} alt={selectedBook.name} />
            <BookInfo>
              <h3>{selectedBook.name}</h3>
              <p>{selectedBook.description}</p>
            </BookInfo>
          </BookDetails>
        )}
      </Header>
      <MainContent>
        <LeftSection>
          <BookList onBookClick={handleBookClick} />
        </LeftSection>
        <RightSection>

          <BookDownload selectedBookId={selectedBookId} />
        </RightSection>
      </MainContent>
    </AppContainer>
  );
}

export default App;