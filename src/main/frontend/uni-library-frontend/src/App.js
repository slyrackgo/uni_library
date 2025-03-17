import React from 'react';
import BookUpload from './BookUpload';
import BookDownload from './BookDownload';
import BookList from './BookList';


function App() {
    return (
        <div>
            <h1>Uni Library</h1>
            <BookUpload />
            <BookDownload />
            <BookList />
        </div>
    );
}

export default App;