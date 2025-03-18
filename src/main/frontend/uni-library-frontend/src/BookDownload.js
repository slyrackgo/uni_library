import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 6px;
  background-color: #f9f9f9;
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

const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  margin-top: 10px;
`;

function BookDownload({ selectedBookId }) {
  const [downloadProductId, setDownloadProductId] = useState('');
  const [downloadError, setDownloadError] = useState('');

  useEffect(() => {
    if (selectedBookId) {
      setDownloadProductId(selectedBookId);
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
        a.download = `book_${downloadProductId}.pdf`;
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
        <Label htmlFor="downloadProductId">Product ID:</Label>
        <Input
          type="text"
          id="downloadProductId"
          value={downloadProductId}
          onChange={(e) => setDownloadProductId(e.target.value)}
        />
      </FormGroup>
      <Button onClick={handleDownload}>Download</Button>
      <ErrorMessage>{downloadError}</ErrorMessage>
    </FormContainer>
  );
}

export default BookDownload;