import React, { useState } from 'react';
import styled from 'styled-components';

const UploadContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 15px;
  box-sizing: border-box;

`;

const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

function UploadBook() {
  const [bookName, setBookName] = useState('');
  const [bookFile, setBookFile] = useState(null);

  const handleBookNameChange = (e) => {
    setBookName(e.target.value);
  };

  const handleBookFileChange = (e) => {
    setBookFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (bookName && bookFile) {
      // Implement your upload logic here
      console.log(`Uploading book: ${bookName}`, bookFile);
      // You can add your API call or upload functionality here
    } else {
      alert('Please enter a book name and select a file.');
    }
  };

  return (
    <UploadContainer>
      <p>Upload Book</p>
      <Input
        type="text"
        placeholder="Enter Book Name"
        value={bookName}
        onChange={handleBookNameChange}
      />
      <Input type="file" onChange={handleBookFileChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </UploadContainer>
  );
}

export default UploadBook;