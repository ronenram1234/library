import { FunctionComponent, useEffect, useState } from "react";
import NewBook from "./NewBook";
import BooksTable from "./BooksTable";
import { Book } from "../interfaces/Book";
import {getAllBooks} from "../services/bookService"
import UpdateBook from "./UpdateBook";


interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [isBookListChange, setIsBookListChange] = useState<Boolean>(true);
  const [isBookUpdate, setisBookUpdate] = useState<Boolean>(false);
  const [BookUpdateId, setBookUpdateId] = useState<string>("");


  useEffect(() => {
    getAllBooks()
      .then((books) => setBookList(books.data))
      .catch((err) => console.log(err));
  }, [isBookListChange]);

  return (
    <>
      <div className="coantainer">
        <div className="row">
          <div className="col-4">
            {isBookUpdate ? (<UpdateBook isBookListChange= {isBookListChange} setIsBookListChange={setIsBookListChange} setisBookUpdate={setisBookUpdate} BookUpdateId={BookUpdateId}/>) : (<NewBook isBookListChange= {isBookListChange} setIsBookListChange={setIsBookListChange}/>)}
            
          </div>
          <div className="col-8">
            <BooksTable bookList={bookList} isBookListChange={isBookListChange} setIsBookListChange={setIsBookListChange} setisBookUpdate={setisBookUpdate} setBookUpdateId={setBookUpdateId}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;


