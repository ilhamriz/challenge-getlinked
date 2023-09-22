import axios from "axios";
import * as Yup from "yup";
import { FormikProvider, useFormik } from "formik";
import usePage from "../../hooks/usePage";
import { Box } from "@mui/material";
import { Buttons, FieldCustomInput } from "../../components/Form";
import { useState } from "react";
import css from "./ContactForm.module.scss";
import { ArrowLeftIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

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

function ContactForm() {
  const URL_API = import.meta.env.VITE_URL_API;
  const { loader, notif } = usePage();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    <FormikProvider value={formik}>
      <Box className={css.wrapper}>
        <Box className={css.back} onClick={() => navigate(-1)}>
          <img src={ArrowLeftIcon} alt="Back" />
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
          className={css.inner}
          autoComplete="off"
        >
          <Box className={css.title}>
            <Box>Questions or need assistance?</Box>
            <Box>Let us know about it!</Box>
          </Box>
          <Box className={css.subtitle}>
            Email us below to any question related to our event
          </Box>
          <Box className={css.container}>
            <FieldCustomInput name="first_name" placeholder={`First Name`} />
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
            <Buttons type="submit" disabled={loading} onClick={submitForm}>
              Submit
            </Buttons>
          </Box>
        </Box>
      </Box>
    </FormikProvider>
  );
}

export default ContactForm;
