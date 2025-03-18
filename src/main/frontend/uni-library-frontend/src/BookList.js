import React, { useState } from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  margin-top: 30px;
`;

const SearchInput = styled.input`
  margin-bottom: 15px;
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

const BookListUL = styled.ul`
  list-style: none;
  padding: 0;
`;

const BookItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    font-size: 1em;
    color: #3498db;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PaginationContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const PaginationButton = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;

  &:hover {
    background-color: #f0f0f0;
  }

  &.active {
    background-color: #3498db;
    color: white;
  }
`;

function BookList({ onBookClick }) {
  const [books, setBooks] = useState([
    {
      id: 1,
      name: 'Crime and punishment',
      description:
        'Raskolnikov, an impoverished student, commits a murder he believes justified, then descends into a psychological torment that forces him to confront his guilt and seek redemption.',
      imageUrl: '/BookPicture/1.png', // Corrected path
    },
    {
      id: 2,
      name: '48 Laws of Power',
      description: 'A book about power.',
      imageUrl: '/BookPicture/2.png', // Corrected path
    },
    {
      id: 3,
      name: 'Data Structures and Algorithms in Java',
      description: 'A book about Data Structures and Algorithms in Java.',
      imageUrl: '/BookPicture/3.png', // Corrected path
    },
    {
      id: 4,
      name: 'The short story of tommorow',
      description: 'A book about the short story of tommorow.',
      imageUrl: '/BookPicture/4.png', // Corrected path
    },
    {
      id: 6,
      name: 'To Kill a Mockingbird',
      description: 'A book about To Kill a Mockingbird.',
      imageUrl: '/BookPicture/6.png', // Corrected path

    },
    {
          id: 7,
          name: '1984',
          description: 'A dystopian novel about totalitarianism and surveillance.',
          imageUrl: '/BookPicture/7.png', // Corrected path

        },
        {
                  id: 8,
                  name: 'Pride and Prejudice',
                  description: 'A classic romance novel set in Regency England.',
                  imageUrl: '/BookPicture/8.png', // Corrected path

                },
     {
                      id: 9,
                      name: 'The Great Gatsby',
                      description: 'A tragic story of wealth and love in the 1920s.',
                      imageUrl: '/BookPicture/9.png', // Corrected path

                    },
    {
        id: 10,
        name: 'The Lord of the Rings',
        description: 'A fantasy epic about hobbits and a powerful ring.',
        imageUrl: '/BookPicture/10.png',
      },
      {
        id: 11,
        name: 'Moby Dick',
        description: 'A novel about a whaling voyage and a captain\'s obsession.',
        imageUrl: '/BookPicture/11.png',
      },
      {
        id: 12,
        name: 'One Hundred Years of Solitude',
        description: 'A multi-generational story of the Buendía family in Macondo.',
        imageUrl: '/BookPicture/12.png',
      },
      {
        id: 13,
        name: 'Brave New World',
        description: 'A dystopian novel about a future society controlled by technology.',
        imageUrl: '/BookPicture/13.png',
      },
      {
        id: 14,
        name: 'The Catcher in the Rye',
        description: 'A coming-of-age novel about teenage angst and alienation.',
        imageUrl: '/BookPicture/14.png',
      },
      {
        id: 15,
        name: 'To the Lighthouse',
        description: 'A novel about family dynamics and the passage of time.',
        imageUrl: '/BookPicture/15.png',
      },
      {
        id: 16,
        name: 'The Odyssey',
        description: 'An epic poem about Odysseus\'s journey home after the Trojan War.',
        imageUrl: '/BookPicture/16.png',
      },
      {
        id: 17,
        name: 'Don Quixote',
        description: 'A satirical novel about a man who imagines himself a knight.',
        imageUrl: '/BookPicture/17.png',
      },
      {
        id: 18,
        name: 'Hamlet',
        description: 'A tragedy about a Danish prince seeking revenge for his father\'s murder.',
        imageUrl: '/BookPicture/18.png',
      },
      {
        id: 19,
        name: 'The Brothers Karamazov',
        description: 'A philosophical novel about faith, morality, and family.',
        imageUrl: '/BookPicture/19.png',
      },
      {
        id: 20,
        name: 'The Divine Comedy',
        description: 'An epic poem about a journey through hell, purgatory, and heaven.',
        imageUrl: '/BookPicture/20.png',
      },
      {
        id: 21,
        name: 'War and Peace',
        description: 'An epic novel about the Napoleonic Wars and Russian society.',
        imageUrl: '/BookPicture/21.png',
      },
      {
        id: 22,
        name: 'Madame Bovary',
        description: 'A novel about a woman\'s dissatisfaction with her life and marriage.',
        imageUrl: '/BookPicture/22.png',
      },
      {
        id: 23,
        name: 'The Adventures of Huckleberry Finn',
        description: 'A novel about a boy and a runaway slave traveling down the Mississippi River.',
        imageUrl: '/BookPicture/23.png',
      },
      {
        id: 24,
        name: 'Wuthering Heights',
        description: 'A novel about love, revenge, and social class on the Yorkshire moors.',
        imageUrl: '/BookPicture/24.png',
      },
      {
        id: 25,
        name: 'The Picture of Dorian Gray',
        description: 'A novel about a man who sells his soul for eternal youth and beauty.',
        imageUrl: '/BookPicture/25.png',
      },
      {
        id: 26,
        name: 'The Stranger',
        description: 'A novel about a man who is indifferent to the world around him.',
        imageUrl: '/BookPicture/26.png',
      },
      {
        id: 27,
        name: 'The Trial',
        description: 'A novel about a man who is arrested and prosecuted for an unknown crime.',
        imageUrl: '/BookPicture/27.png',
      },
      {
        id: 28,
        name: 'The Sound and the Fury',
        description: 'A novel about the decline of a Southern family.',
        imageUrl: '/BookPicture/28.png',
      },
      {
        id: 29,
        name: 'The Grapes of Wrath',
        description: 'A novel about a family of migrant workers during the Great Depression.',
        imageUrl: '/BookPicture/29.png',
      },
      {
        id: 30,
        name: 'The Handmaid\'s Tale',
        description: 'A dystopian novel about a future society where women are subjugated.',
        imageUrl: '/BookPicture/30.png',
      },
      {
        id: 31,
        name: 'The Color Purple',
        description: 'A novel about the struggles of African American women in the early 20th century.',
        imageUrl: '/BookPicture/31.png',
      },
      {
        id: 32,
        name: 'Beloved',
        description: 'A novel about the legacy of slavery and its impact on a family.',
        imageUrl: '/BookPicture/32.png',
      },
      {
        id: 33,
        name: 'The Road',
        description: 'A post-apocalyptic novel about a father and son trying to survive.',
        imageUrl: '/BookPicture/33.png',
      },
      {
        id: 34,
        name: 'The Book Thief',
        description: 'A novel about a young girl living in Nazi Germany who finds solace in books.',
        imageUrl: '/BookPicture/34.png',
      },
      {
        id: 35,
        name: 'Life of Pi',
        description: 'A novel about a boy who survives a shipwreck and is stranded on a lifeboat with a tiger.',
        imageUrl: '/BookPicture/35.png',
      },
      {
        id: 36,
        name: 'The Kite Runner',
        description: 'A novel about friendship, betrayal, and redemption in Afghanistan.',
        imageUrl: '/BookPicture/36.png',
      },
      {
        id: 37,
        name: 'A Thousand Splendid Suns',
        description: 'A novel about the lives of two women in Afghanistan under Taliban rule.',
        imageUrl: '/BookPicture/37.png',
      },
      {
        id: 38,
        name: 'The Help',
        description: 'A novel about the lives of African American maids in the segregated South.',
        imageUrl: '/BookPicture/38.png',
        },
{
    id: 39,
    name: 'The Girl with the Dragon Tattoo',
    description: 'A mystery thriller about a journalist and a hacker investigating a disappearance.',
    imageUrl: '/BookPicture/39.png',
  },
  {
    id: 40,
    name: 'Gone Girl',
    description: 'A psychological thriller about a woman who disappears and her husband who is suspected of her murder.',
    imageUrl: '/BookPicture/40.png',
  },
  {
    id: 41,
    name: 'The Hunger Games',
    description: 'A dystopian novel about a society where children are forced to fight to the death.',
    imageUrl: '/BookPicture/41.png',
  },
  {
    id: 42,
    name: 'The Fault in Our Stars',
    description: 'A young adult novel about two teenagers with cancer who fall in love.',
    imageUrl: '/BookPicture/42.png',
  },
  {
    id: 43,
    name: 'Divergent',
    description: 'A dystopian novel about a society divided into factions based on personality traits.',
    imageUrl: '/BookPicture/43.png',
  },
  {
    id: 44,
    name: 'The Martian',
    description: 'A science fiction novel about an astronaut who is stranded on Mars.',
    imageUrl: '/BookPicture/44.png',
  },
  {
    id: 45,
    name: 'Ready Player One',
    description: 'A science fiction novel about a virtual reality world and a treasure hunt.',
    imageUrl: '/BookPicture/45.png',
  },
  {
    id: 46,
    name: 'The Nightingale',
    description: 'A historical fiction novel about two sisters in Nazi-occupied France.',
    imageUrl: '/BookPicture/46.png',
  },
  {
    id: 47,
    name: 'All the Light We Cannot See',
    description: 'A historical fiction novel about a blind French girl and a German boy during World War II.',
    imageUrl: '/BookPicture/47.png',
  },
  {
    id: 48,
    name: 'Where the Crawdads Sing',
    description: 'A mystery novel about a girl who grows up alone in the marshes of North Carolina.',
    imageUrl: '/BookPicture/48.png',
  },
  {
    id: 49,
    name: 'Little Fires Everywhere',
    description: 'A novel about secrets and motherhood in a seemingly perfect community.',
    imageUrl: '/BookPicture/49.png',
  },
  {
    id: 50,
    name: 'Educated',
    description: 'A memoir about a woman who overcomes a strict and isolated upbringing to earn a PhD.',
    imageUrl: '/BookPicture/50.png',
  },
  {
    id: 51,
    name: 'The Midnight Library',
    description: 'A novel about a woman who is given the chance to see what her life could have been if she had made different choices.',
    imageUrl: '/BookPicture/51.png',
  },
  {
    id: 52,
    name: 'Project Hail Mary',
    description: 'A science fiction novel about an astronaut who wakes up with amnesia and must save humanity.',
    imageUrl: '/BookPicture/52.png',
  },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleBookClick = (bookId) => {
    const book = filteredBooks.find((book) => book.id === bookId);
    onBookClick(bookId, book);
    const bookIndex = filteredBooks.findIndex((book) => book.id === bookId);
    const pageNumber = Math.ceil((bookIndex + 1) / booksPerPage);
    setCurrentPage(pageNumber);
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const getPageNumbers = () => {
    let pages = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (endPage - startPage < 4) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, 5);
      } else {
        startPage = Math.max(1, totalPages - 4);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <ListContainer>
      <h2>Book List</h2>
      <SearchInput
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <BookListUL>
        {currentBooks.map((book) => (
          <BookItem key={book.id}>
            <button
              style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}
              onClick={() => handleBookClick(book.id)}
            >
              {book.id}. {book.name}
            </button>
          </BookItem>
        ))}
      </BookListUL>
      <PaginationContainer>
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
        {getPageNumbers().map((pageNumber) => (
          <PaginationButton
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={currentPage === pageNumber ? 'active' : ''}
          >
            {pageNumber}
          </PaginationButton>
        ))}
        <PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    </ListContainer>
  );
}

export default BookList;