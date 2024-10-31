import { FunctionComponent } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Book } from "../interfaces/Book";
import { addBook } from "../services/bookService";

interface NewBookProps {
  isBookListChange: Boolean;
  setIsBookListChange: React.Dispatch<React.SetStateAction<Boolean>>;
}

const NewBook: FunctionComponent<NewBookProps> = ({
  isBookListChange,
  setIsBookListChange,
}) => {
  const formik = useFormik<Book>({
    initialValues: {
      bookName: "",
      author: "",
      genre: "",
      price: 0,
    },
    validationSchema: yup.object({
      bookName: yup.string().required(),
      author: yup.string().required(),
      genre: yup.string().required(),
      price: yup.number().required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      addBook(values as Book)
        .then()
        .catch((err) => console.log(err));
      setIsBookListChange(!isBookListChange);
      resetForm();
    },
  });

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
              // onClick={() => handleClick()}
            >
              + Add Book
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewBook;
