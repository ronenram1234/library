import { FunctionComponent } from "react";
import { User } from "../interfaces/User";
import { FormikValues, useFormik } from "formik";
import * as yup from "yup";
import { addUser } from "../services/usersService";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface RegisterProps {
  userName: User;
  setUserName: React.Dispatch<React.SetStateAction<User>>;
}

const Register: FunctionComponent<RegisterProps> = ({
  userName,
  setUserName,
}) => {

    const navigate: NavigateFunction = useNavigate();
  const formik: FormikValues = useFormik<FormikValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    validationSchema: yup.object({
      firstName: yup.string(),
      lastName: yup.string(),
      email: yup.string().email().required(),
      pass: yup.string().required().min(4),
    }),
    onSubmit: (values) => {
      addUser(values as User)
        .then(() => navigate("/"))
        .catch((err) => console.log(err));
    },
  });
  return (
    <>
      <div className=" container d-flex justify-content-center align-item-center flex-column ">
        <h6 className="display-6">Register New User (*- mandatory fields)</h6>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="John"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">First Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="John"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Last Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="John"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">email*</label>
            {formik.touched.email && formik.errors.email && (
              <p className="text-danger">{formik.errors.email}</p>
            )}
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="pass"
              placeholder="John"
              name="pass"
              value={formik.values.pass}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">password*</label>
            {formik.touched.pass && formik.errors.pass && (
              <p className="text-danger">{formik.errors.pass}</p>
            )}
          </div>
          <button
            className="btn btn-success w-100 mb-3"
            type="submit"
            disabled={!formik.isValid || !formik.dirty}
          >
            Add User
          </button>
        </form>
        <a href="/">return to login</a>
      </div>
    </>
  );
};

export default Register;
