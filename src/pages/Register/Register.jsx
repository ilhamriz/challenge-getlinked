import { Box, Container } from "@mui/material";
import css from "./Register.module.scss";
import { FormikProvider, useFormik } from "formik";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import usePage from "../../hooks/usePage";
import * as Yup from "yup";
import { Buttons, FieldCustomInput } from "../../components/Form";
import { man_sit_on_chair } from "../../assets/images";

const initialValues = {
  first_name: "",
  email: "",
  phone_number: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone_number: Yup.string().required("Phone Number is required"),
  message: Yup.string().required("Message is required"),
});

function Register() {
  const URL_API = import.meta.env.VITE_URL_API;
  const { loader, notif } = usePage();
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const submit = (formValue) => {
    loader(true);
    setLoading(true);
    const axiosInstance = axios.create({});

    const options = {
      url: `${URL_API}/hackathon/contact-form`,
      method: "POST",
      data: formValue,
    };

    axiosInstance(options)
      .then(() => {
        loader(false);
        setLoading(false);
        notif("Your report has been sent");
        resetForm();
      })
      .catch((error) => {
        console.log(error);
        loader(false);
        setLoading(false);
        notif(error.message);
      });
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: submit,
  });

  const { resetForm, submitForm, handleSubmit } = formik;

  const handleNumber = (event) => {
    if (!(event.charCode >= 48 && event.charCode <= 57)) {
      event.preventDefault();
    }
  };

  return (
    <section className={css.wrapper}>
      <h1 className="hidden">Register</h1>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box className={css.inner}>
          <Box className={css.images}>
            <img src={man_sit_on_chair} alt="Man sit on chair" />
          </Box>
          <Box>
            <FormikProvider value={formik}>
              <Box className={css.form_wrapper}>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  className={css.form_inner}
                  autoComplete="off"
                >
                  <Box className={css.form_title}>
                    <Box>Register</Box>
                  </Box>
                  <Box className={css.form_subtitle}>
                    Email us below to any question related to our event
                  </Box>
                  <Box className={css.form_container}>
                    <FieldCustomInput
                      name="first_name"
                      placeholder={`First Name`}
                    />
                    <FieldCustomInput name="email" placeholder={`Email`} />
                    <FieldCustomInput
                      name="phone_number"
                      placeholder={`Phone Number`}
                      onKeyPress={(e) => handleNumber(e)}
                    />
                    <FieldCustomInput
                      name="message"
                      placeholder={`Message`}
                      multiline={true}
                      minRows={4}
                      maxRows={6}
                    />
                  </Box>
                  <Box alignSelf={"center"}>
                    <Buttons
                      type="submit"
                      disabled={loading}
                      onClick={submitForm}
                    >
                      Submit
                    </Buttons>
                  </Box>
                </Box>
              </Box>
            </FormikProvider>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

export default Register;
