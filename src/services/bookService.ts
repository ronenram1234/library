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


  export function deleteBook(id:string){
    return axios.delete(`${api}/${id}`);
  }


  export function getBookById(id:string){
    let prom= axios.get(`${api}/${id}`);
    // console.log(prom.data)

    return prom
  }

  export function updateBook(id: string, updatedBook: Book) { 
    return axios.put(`${api}/${id}`, updatedBook);
}