import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  background-color: #f8f9fa;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Input = styled.input`
  border: 1px solid #ced4da;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-size: 1em;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  margin-top: 10px;
`;

function BookDownload({ selectedBookId }) {
  const [downloadProductId, setDownloadProductId] = useState('');
  const [downloadError, setDownloadError] = useState('');
  const [bookName, setBookName] = useState('');
  const [isFetchingBook, setIsFetchingBook] = useState(false);

  useEffect(() => {
    if (selectedBookId) {
      setDownloadProductId(selectedBookId);
      setIsFetchingBook(true);
      fetch(`/product/${selectedBookId}`) // Assuming an endpoint to fetch book details by ID
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setBookName(data.name || `book_${selectedBookId}`); // Use book name if available, otherwise fallback
          setIsFetchingBook(false);
        })
        .catch((error) => {
          console.error('Error fetching book details:', error);
          setBookName(`book_${selectedBookId}`); // Fallback to ID in case of error
          setIsFetchingBook(false);
        });
    } else {
      setDownloadProductId('');
      setBookName('');
    }
  }, [selectedBookId]);

  const handleDownload = () => {
    if (!downloadProductId) {
      setDownloadError('Please enter a Product ID.');
      return;
    }

    fetch(`/product/${downloadProductId}/download`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        // Sanitize the book name to be used in the filename
        const sanitizedBookName = bookName.replace(/[^a-zA-Z0-9]/g, '_');
        a.download = `${sanitizedBookName}_${downloadProductId}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Download error:', error);
        setDownloadError('Download failed.');
      });
  };

  return (
    <FormContainer>
      <h2>Download Book</h2>
      <FormGroup>
        <Label htmlFor="downloadProductId">Product Id:</Label>
        <Input
          type="text"
          id="downloadProductId"
          value={downloadProductId}
          onChange={(e) => setDownloadProductId(e.target.value)}
          disabled={isFetchingBook}
        />
      </FormGroup>
      <Button onClick={handleDownload} disabled={isFetchingBook}>
        {isFetchingBook ? 'Fetching Book Details...' : 'Download'}
      </Button>
      <ErrorMessage>{downloadError}</ErrorMessage>
    </FormContainer>
  );
}

export default BookDownload;