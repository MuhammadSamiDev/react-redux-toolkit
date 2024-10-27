import { ErrorMessage, Form, Formik } from "formik";
import { addUserSchema } from "../../schema";
import { useDispatch } from "react-redux";
import { addUser } from "../../services/userData";

const AddUser = () => {
  const dispatch = useDispatch();
  const inititalValue = {
    name: "",
    father_name: "",
    email: "",
    date_of_birth: "",
  };
  const handleSubmit = async (values, { resetForm }) => {
    // const formData = new FormData();
    // formData.append('name',values.name);
    // formData.append('email',values.email);
    // formData.append('father_name',values.father_name);
    // formData.append('date_of_birth',values.date_of_birth);
    dispatch(addUser(values));
    resetForm({ values: inititalValue });
  };
  const handleChange = (e, setFieldValue) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };
  return (
    <div>
      <Formik
        initialValues={inititalValue}
        onSubmit={handleSubmit}
        validationSchema={addUserSchema}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="formInput">
              <label htmlFor="name">Name:</label>
              <input
                value={values.name}
                type="text"
                name="name"
                onChange={(e) => handleChange(e, setFieldValue)}
                placeholder="Enter Your Name"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="formInput">
              <label htmlFor="email">Email:</label>
              <input
                value={values.email}
                type="email"
                name="email"
                onChange={(e) => handleChange(e, setFieldValue)}
                placeholder="Enter Your Email"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="formInput">
              <label htmlFor="father_name">Father Name:</label>
              <input
                value={values.father_name}
                type="text"
                name="father_name"
                onChange={(e) => handleChange(e, setFieldValue)}
                placeholder="Enter Your Father Name"
              />
              <ErrorMessage
                name="father_name"
                component="div"
                className="error"
              />
            </div>
            <div className="formInput">
              <label htmlFor="name">Date Of Birth:</label>
              <input
                value={values.date_of_birth}
                type="date"
                name="date_of_birth"
                onChange={(e) => handleChange(e, setFieldValue)}
                placeholder="Enter Date Of Birth"
              />
              <ErrorMessage
                name="date_of_birth"
                component="div"
                className="error"
              />
            </div>
            <div style={{ marginTop: 10 }}>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddUser;
