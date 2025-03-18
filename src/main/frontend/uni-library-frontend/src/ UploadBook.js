import React, { useState } from 'react';
import styled from 'styled-components';

const UploadContainer = styled.div`
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

const FileInput = styled.input.attrs({ type: 'file' })`
  margin-top: 5px;
`;

const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-size: 1em;

  &:hover {
    background-color: #218838;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  margin-top: 10px;
`;

function UploadBook() {
  const [productId, setProductId] = useState('');
  const [bookFile, setBookFile] = useState(null);
  const [uploadError, setUploadError] = useState('');

  const handleUpload = () => {
    if (!productId || !bookFile) {
      setUploadError('Please enter a Product ID and select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', bookFile);
    formData.append('productId', productId);

    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Upload successful:', data);
        setUploadError(''); // Clear error on success
        setProductId(''); // clear input
        setBookFile(null); // clear input
      })
      .catch((error) => {
        console.error('Upload error:', error);
        setUploadError('Upload failed.');
      });
  };

  return (
    <UploadContainer>
      <h2>Upload Book</h2>
      <FormGroup>
        <Label htmlFor="productId">Product ID:</Label>
        <Input
          type="text"
          id="productId"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="bookFile">Book File</Label>
        <FileInput id="bookFile" onChange={(e) => setBookFile(e.target.files[0])} />
      </FormGroup>
      <Button onClick={handleUpload}>Upload</Button>
      <ErrorMessage>{uploadError}</ErrorMessage>
    </UploadContainer>
  );
}

export default UploadBook;