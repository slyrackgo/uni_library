import React from 'react';
import BookDownload from './BookDownload';
import BookList from './BookList';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

function App() {
  return (
    <AppContainer>
      <Title>Uni Library</Title>
      <BookDownload />
      <BookList />
    </AppContainer>
  );
}

export default App;