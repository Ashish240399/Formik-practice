import { ErrorMessage, Field, Form } from "formik";
import React from "react";

//can be made as checkbox for multiple selection with same
function RadioButton(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  //   type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value == option.value}
                  //   checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.value}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
}

export default RadioButton;
