import { FunctionComponent } from "react";
import { Book } from "../interfaces/Book";


interface BooksTableProps {
  bookList: Book[];
}

const BooksTable: FunctionComponent<BooksTableProps> = ({ bookList }) => {
  return (
    <>
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Author</th>
              <th>Genres</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((book: Book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.bookName}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.price}</td>
                <td><i className="fa-solid fa-pencil `text-warning"></i></td>
                <td><i className="fa-solid fa-trash text-danger"></i></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BooksTable;
