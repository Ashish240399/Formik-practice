import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
function FormikContainer() {
  const initialValues = {};
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = Yup.object({});
  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
