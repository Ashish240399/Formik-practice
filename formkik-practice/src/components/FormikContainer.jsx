import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikController from "./FormikController";
function FormikContainer() {
  const dropDownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
  ];
  const radioOptions = [
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
  ];
  const initialValues = {
    email: "",
    description: "",
    select: "",
    radio: [],
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required !"),
    description: Yup.string().required("Required description!"),
    select: Yup.string().required("Required select!"),
    radio: Yup.array().required("Required radio!"),
  });
  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <FormikController
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikController
              control="textarea"
              type="textarea"
              name="description"
              label="Description"
            />
            <FormikController
              control="select"
              name="select"
              label="select"
              options={dropDownOptions}
            />
            <FormikController
              control="radio"
              options={radioOptions}
              name="radio"
              label="Select one"
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
