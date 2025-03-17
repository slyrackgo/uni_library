import React, { useState } from 'react';

function BookDownload() {
    const [downloadProductId, setDownloadProductId] = useState('');
    const [downloadError, setDownloadError] = useState('');

    const handleDownload = () => {
        fetch(`/product/${downloadProductId}/download`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.blob();
            })
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `book_${downloadProductId}.pdf`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => {
                console.error('Download error:', error);
                setDownloadError("Download failed.");
            });
    };

    return (
        <div className="form-container">
            <h2>Download Book</h2>
            <div className="form-group">
                <label htmlFor="downloadProductId">Product ID:</label>
                <input
                    type="text"
                    id="downloadProductId"
                    name="downloadProductId"
                    value={downloadProductId}
                    onChange={(e) => setDownloadProductId(e.target.value)}
                />
            </div>
            <button onClick={handleDownload}>Download</button>
            <div className="error-message">{downloadError}</div>
        </div>
    );
}

export default BookDownload;