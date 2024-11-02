import { FunctionComponent } from "react";
import { Book } from "../interfaces/Book";
import { errorMsg, successMsg } from "../services/feedbackService";
import { deleteBook } from "../services/bookService";


interface BooksTableProps {
  bookList: Book[];
  isBookListChange:Boolean
  setIsBookListChange:React.Dispatch<React.SetStateAction<Boolean>>
  setisBookUpdate:React.Dispatch<React.SetStateAction<Boolean>>
  setBookUpdateId:React.Dispatch<React.SetStateAction<string>>
}

const BooksTable: FunctionComponent<BooksTableProps> = ({ bookList, isBookListChange, setIsBookListChange,setisBookUpdate, setBookUpdateId  }) => {

function handelDelete(id:string){
  deleteBook(id)
  .then(()=>{
    successMsg("Complete record delete")
    setIsBookListChange(!isBookListChange)
})
  .catch ((err)=>errorMsg(`Error deleteing ${id} - ${err}`) )
}

function handelChange(id:string){
    
  setBookUpdateId(id)
  setisBookUpdate(true)

}

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
                <td><i className="fa-solid fa-pencil `text-warning" onClick={()=>{
                  book.id ? 
                  handelChange(book.id) : 
                  errorMsg("error - no id to delete")
                }}></i></td>
                <td><i className="fa-solid fa-trash text-danger" onClick={()=>{
                  book.id ? 
                  handelDelete(book.id) : 
                  errorMsg("error - no id to delete")
                }}></i></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BooksTable;
