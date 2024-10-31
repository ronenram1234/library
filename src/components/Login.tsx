import { FunctionComponent } from "react";
import {  useFormik } from "formik";
import * as yup from "yup";
import { User } from "../interfaces/User";
import { checkUserExist } from "../services/usersService";
// import { NavigateFunction, useNavigate } from "react-router-dom";

interface LoginProps {

  isLoginRequired:boolean, 
  setIsLoginRequired:React.Dispatch<React.SetStateAction<boolean>>
  setUserName:React.Dispatch<React.SetStateAction<User>>

}

const Login: FunctionComponent<LoginProps> = ({isLoginRequired,setIsLoginRequired,setUserName }) => {
  // const navigate: NavigateFunction = useNavigate();

    const formik = useFormik<User>({
    initialValues: {
      email: "",
      pass: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required(),
      pass: yup.string().required().min(4),
    }),
    onSubmit: async (values) => {
      console.log(values);
      const UserEXist = await checkUserExist(values);

      if (UserEXist) {
        console.log(values.email, UserEXist);
        // navigate("/home");
        setIsLoginRequired(false)
        setUserName(values)
      }
    },
  });

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div
          className="col-4 text-center m-3"
          style={{ border: "2pt solid black" }}
        >
          <h1 className="text-center">LOGIN</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="john@doe.com"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-danger">{formik.errors.email}</p>
            )}

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                autoComplete="off"
                placeholder="password"
                name="pass"
                value={formik.values.pass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="floatingInput">Password</label>
            </div>
            {formik.touched.pass && formik.errors.pass && (
              <p className="text-danger">{formik.errors.pass}</p>
            )}

            <button
              className="btn btn-success col-4"
              type="submit"
            disabled={!formik.isValid || !formik.dirty}
              // onClick={() => handleClick()}
            >
              Login
            </button>
          </form>
          <a href="/register">new user registration</a>
          
        
        </div>
        
      </div>
    </>
  );
};

export default Login;
