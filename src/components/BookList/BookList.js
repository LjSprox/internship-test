import "./BookList.scss";
import React, { useState } from 'react';
import Book from "../Book/Book";


const BooksList = ({ books }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [bookList, setBookList] = useState(books);
    
  
    const handleSearchClick = () => {
      const filteredBooks = books.filter((book) => {
        return (
          book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.genre.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setBookList(filteredBooks);
    };

    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
      if (event.keyCode === 13 || event.key === 'Enter') {
        handleSearchClick();
      } else if (event.target.value === '') {
        setBookList(books);
      }
    };
  
    const handleResetClick = () => {
      setBookList(books);
      setSearchQuery('');
    };
  
    const sortedBookList = bookList.sort((a, b) => {
      return a.author.localeCompare(b.author);
    });

  
    return (
      <div className="BookList">
        <div className="BookList__input">
          <input 
            type="text"
            value={searchQuery} 
            onChange={handleSearchChange}
            onKeyDown={handleSearchChange}
            className="BookList__input--inputField"
            placeholder="Search..."
          />
          <div className="BookList__buttons">
              <button 
                onClick={handleSearchClick}
                className="BookList__input--search"  
              >
                Search
              </button>
              <button
                onClick={handleResetClick}
                className="BookList__input--reset"
              >
                Reset
            </button>        
          </div>
        </div>
        <ul className="BookList__content">
          {sortedBookList.map((book) => (
            <li key={book.title}>
              <Book book={book} key={book.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default BooksList;