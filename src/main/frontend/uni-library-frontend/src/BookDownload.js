import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  margin-top: 10px;
`;

function BookDownload() {
  const [downloadProductId, setDownloadProductId] = useState('');
  const [downloadError, setDownloadError] = useState('');

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