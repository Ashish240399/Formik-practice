import { ErrorMessage, Field } from "formik";
import React from "react";

function Select(props) {
  const { name, label, options, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name} as="select">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
}

export default Select;
