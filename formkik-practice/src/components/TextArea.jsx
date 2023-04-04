import { ErrorMessage, Field } from "formik";
import React from "react";

function TextArea(props) {
  const { name, label, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
}

export default TextArea;
