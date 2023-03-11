import './App.scss';
import BookList from './components/BookList/BookList';
import booksData from "./data/booksData.json";


function App() {
  return (
    <div className="app">
      <div className="app__content">
        <div className="app__header">
          <h1>Find your desired book!</h1>
        </div>
        <BookList books={booksData}/>      
      </div>
    </div>
  );
};

export default App;
