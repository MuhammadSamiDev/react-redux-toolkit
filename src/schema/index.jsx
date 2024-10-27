import * as Yup from "yup";
export const addUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Too Short")
    .max(100, "Too Long")
    .required("Required"),
  father_name: Yup.string()
    .min(4, "Too Short")
    .max(100, "Too Long")
    .required("Required"),
  email: Yup.string().email("Invalid Email!").required("Required"),
  date_of_birth: Yup.date("Invalid Date"),
});

export const todoSchema = Yup.object().shape({
  todo: Yup.string().required("This field is required"),
});
