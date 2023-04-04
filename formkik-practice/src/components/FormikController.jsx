import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";
import RadioButton from "./RadioButton";

function FormikController(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "checkbox":
    case "radio":
      return <RadioButton {...rest} />;
    case "data":
    default:
      return null;
  }
}

export default FormikController;
