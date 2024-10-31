import { FunctionComponent, useEffect, useState } from "react";
import NewBook from "./NewBook";
import BooksTable from "./BooksTable";
import { Book } from "../interfaces/Book";
import {getAllBooks} from "../services/bookService"


interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [isBookListChange, setIsBookListChange] = useState<Boolean>(true);


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
            <NewBook isBookListChange= {isBookListChange} setIsBookListChange={setIsBookListChange}/>
          </div>
          <div className="col-8">
            <BooksTable bookList={bookList}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
function getAllBookss() {
    throw new Error("Function not implemented.");
}

