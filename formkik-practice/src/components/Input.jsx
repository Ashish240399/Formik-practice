import { ErrorMessage, Field } from "formik";
import React from "react";

function Input(props) {
  const { name, label, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
}

export default Input;
