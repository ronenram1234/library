import { FunctionComponent } from "react";
import { FormikValues, useFormik } from "formik";
import * as yup from "yup";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const formik: FormikValues = useFormik<FormikValues>({
    initialValues: {
      email: "",
      pass: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required(),
      pass: yup.string().required().min(4),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // const formik: FormikValues = useFormik<FormikValues>

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="col-4 text-center">
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
            </div>
            {formik.touched.pass && formik.errors.pass && (
              <p className="text-danger">{formik.errors.pass}</p>
            )}

            <button className="btn btn-success col-4">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
