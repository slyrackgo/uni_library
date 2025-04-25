import React, { useState } from 'react';

function BookUpload() {
    const [productId, setProductId] = useState('');
    const [file, setFile] = useState(null);
    const [uploadError, setUploadError] = useState('');

    const handleUpload = () => {
        if (!productId || !file) {
            setUploadError("Please fill in all fields.");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

       fetch(`/product/${productId}/upload`, {
           method: 'POST',
           body: formData
       })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Upload successful:', data);
            setUploadError("Upload successful!");
        })
        .catch(error => {
            console.error('Upload error:', error);
            setUploadError("Upload failed.");
        });
    };

    return (
        <div className="form-container">
            <h2>Upload Book</h2>
            <div className="form-group">
                <label htmlFor="productId">Product ID:</label>
                <input type="text" id="productId" name="productId" value={productId} onChange={(e) => setProductId(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="file">Book File:</label>
                <input type="file" id="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
            </div>
            <button onClick={handleUpload}>Upload</button>
            <div className="error-message">{uploadError}</div>
        </div>
    );
}

export default BookUpload;