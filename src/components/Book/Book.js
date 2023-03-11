import "./Book.scss";

const Book = props => {

    return (
        <div className="Book">
            <h3 className="Book__title">Title: <span className="Book__title--result">{props.book.title}</span></h3>
            <h3 className="Book__title">Author: <span className="Book__title--result">{props.book.author}</span></h3>
            <h3 className="Book__title">Genre: <span className="Book__title--result">{props.book.genre}</span></h3>
        </div>
    )
}

export default Book;