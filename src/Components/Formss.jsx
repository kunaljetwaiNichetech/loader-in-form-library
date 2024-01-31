import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
export default function Formss() {
  const inital = {
    email: "",
    password: "",
  };
  const validation = Yup.object().shape({
    email: Yup.string("").required("email is required"),
    password: Yup.string("").required("password is requred"),
  });
  return (
    <div>
      <Formik>
        <div>
          <label>Email</label>
          <Field type="text" name="email" />
        </div>
        <div>
          <label>Email</label>
          <Field type="text" name="password" />
        </div>
      </Formik>
    </div>
  );
}
