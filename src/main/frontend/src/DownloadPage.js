import React from 'react';
import BookDownload from './BookDownload';
import BookList from './BookList';

function DownloadPage() {
    return (
        <div>
            <h1>Download Books</h1>
            <BookDownload />
            <BookList />
        </div>
    );
}

export default DownloadPage;