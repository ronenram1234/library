import axios from "axios";
import { Book } from "../interfaces/Book";

const api: string = `${process.env.REACT_APP_API}/books`;

export function getAllBooks() {
  return axios.get(api);
}


export function addBook(book: Book) {
    book.id = String(Math.floor(Math.random() * 10000));
  
    return axios.post(api, book);
  }
