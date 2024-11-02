import { FunctionComponent, useEffect } from "react";
import * as yup from "yup";
import { Book } from "../interfaces/Book";
import { getBookById, updateBook } from "../services/bookService";
import { useFormik } from "formik";

import { errorMsg, successMsg } from "../services/feedbackService";

interface UpdateBookProps {
  isBookListChange: Boolean;
  setIsBookListChange: React.Dispatch<React.SetStateAction<Boolean>>;
  setisBookUpdate: React.Dispatch<React.SetStateAction<Boolean>>;
  BookUpdateId: string;
}

const UpdateBook: FunctionComponent<UpdateBookProps> = ({
  isBookListChange,
  setIsBookListChange,
  setisBookUpdate,
  BookUpdateId,
}) => {
  let book: Book = {
    bookName: "",
    author: "",
    genre: "",
    price: 0,
  };

  const formik = useFormik<Book>({
    initialValues: {
      bookName: book.bookName,
      author: book.author,
      genre: book.genre,
      price: book.price,
    },
    validationSchema: yup.object({
      bookName: yup.string().required(),
      author: yup.string().required(),
      genre: yup.string().required(),
      price: yup.number().required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      updateBook(BookUpdateId, values)
        .then(()=>setIsBookListChange(!isBookListChange))
        .catch((err) => console.log(err));
      
      resetForm();
    },
  });

  useEffect(()=>{

      getBookById(BookUpdateId)
        .then((b) => {
          book = b.data;
          console.log(BookUpdateId, book);
          formik.setValues(book);
        })
        .catch((err) => errorMsg(`Error retrieve by ID ${BookUpdateId} - ${err}`));



  },[BookUpdateId])


  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h6 className="">Add new book record</h6>
        <div className="col-12" style={{ border: "2pt solid black" }}>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="floatingInput" className="col-12  mt-1">
              Book Name
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Book Name"
              name="bookName"
              style={{ border: "1pt solid black" }}
              value={formik.values.bookName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.bookName && formik.errors.bookName && (
              <p className="text-danger">{formik.errors.bookName}</p>
            )}

            <label htmlFor="floatingInput" className="col-12  mt-1">
              Author
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Author"
              name="author"
              style={{ border: "1pt solid black" }}
              value={formik.values.author}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.author && formik.errors.author && (
              <p className="text-danger">{formik.errors.author}</p>
            )}

            <label htmlFor="floatingInput" className="col-12  mt-1">
              Genre
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Genre"
              name="genre"
              style={{ border: "1pt solid black" }}
              value={formik.values.genre}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.genre && formik.errors.genre && (
              <p className="text-danger">{formik.errors.genre}</p>
            )}

            <label htmlFor="floatingInput" className="col-12 mt-1">
              Price
            </label>

            <input
              type="number"
              className="form-control"
              placeholder="Price"
              name="price"
              style={{ border: "1pt solid black" }}
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.price && formik.errors.price && (
              <p className="text-danger">{formik.errors.price}</p>
            )}

            <button
              className="btn btn-success mt-2"
              type="submit"
              disabled={!formik.isValid || !formik.dirty}
            >
              Update Book
            </button>
          </form>
          <button
            className="btn btn-secondary mt-2"
            type="button"
            onClick={() => setisBookUpdate(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateBook;
