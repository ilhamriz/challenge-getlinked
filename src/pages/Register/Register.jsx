import { Box, Checkbox, Container } from "@mui/material";
import css from "./Register.module.scss";
import { FormikProvider, useFormik } from "formik";
import axios from "axios";
import { useState, useEffect } from "react";
import usePage from "../../hooks/usePage";
import * as Yup from "yup";
import {
  Buttons,
  FieldCustomInput,
  FieldCustomSelect,
} from "../../components/Form";
import { man_sit_on_chair, man_woman_walk } from "../../assets/images";
import Dialog from "../../components/Dialog/Dialog";
import { StarIcon } from "../../assets/icons";

const initialValues = {
  team_name: "",
  email: "",
  phone_number: "",
  project_topic: "",
  category: "",
  group_size: "",
};

const validationSchema = Yup.object().shape({
  team_name: Yup.string().required("Team's Name is required"),
  phone_number: Yup.string().required("Phone Number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  project_topic: Yup.string().required("Project Topic is required"),
  category: Yup.string().required("Category is required"),
  group_size: Yup.string().required("Group Size is required"),
});

const groupSizeOption = [
  {
    id: "",
    name: "Select",
  },
  {
    id: 10,
    name: "Small",
  },
  {
    id: 50,
    name: "Medium",
  },
  {
    id: 100,
    name: "Large",
  },
];

function Register() {
  const URL_API = import.meta.env.VITE_URL_API;
  const { loader, notif } = usePage();
  const [loading, setLoading] = useState(false);
  const [categoryOption, setCategoryOption] = useState([]);
  const [checked, setChecked] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const axiosInstance = axios.create({});

    const options = {
      url: `${URL_API}/hackathon/categories-list`,
      method: "GET",
    };

    axiosInstance(options)
      .then((response) => {
        const defaultValue = {
          id: "",
          name: "Select your category",
        };

        setCategoryOption([defaultValue, ...response.data]);
      })
      .catch((error) => {
        console.log(error);
        notif(error.message);
      });
  }, []);

  const submit = (formValue) => {
    loader(true);
    setLoading(true);
    const axiosInstance = axios.create({});
    const data = {
      privacy_poclicy_accepted: checked,
      ...formValue,
    };

    const options = {
      url: `${URL_API}/hackathon/registration`,
      method: "POST",
      data: data,
    };

    axiosInstance(options)
      .then(() => {
        loader(false);
        setLoading(false);
        setOpenDialog(true);
        resetForm();
      })
      .catch((error) => {
        loader(false);
        setLoading(false);
        notif(error.response);
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
                    <Box className={css.form_title__images}>
                      <img src={man_sit_on_chair} alt="Man sit on chair" />
                    </Box>
                  </Box>
                  <Box className={css.form_subtitle}>
                    <Box className={css.form_subtitle__movement}>
                      <span>Be part of this movement!</span>
                      <Box className={css.form_subtitle__movement__image}>
                        <img src={man_woman_walk} alt="Man and woman walk" />
                      </Box>
                    </Box>
                    <Box>CREATE YOUR ACCOUNT</Box>
                  </Box>
                  <Box className={css.form_container}>
                    <Box>
                      <Box className={css.caption}>Team&apos;s Name</Box>
                      <FieldCustomInput
                        name="team_name"
                        placeholder={`Enter the name of your group`}
                      />
                    </Box>
                    <Box>
                      <Box className={css.caption}>Phone</Box>
                      <FieldCustomInput
                        name="phone_number"
                        placeholder={`Enter your phone number`}
                        onKeyPress={(e) => handleNumber(e)}
                      />
                    </Box>
                    <Box>
                      <Box className={css.caption}>Email</Box>
                      <FieldCustomInput
                        name="email"
                        placeholder={`Enter your email address`}
                      />
                    </Box>
                    <Box>
                      <Box className={css.caption}>Project Topic</Box>
                      <FieldCustomInput
                        name="project_topic"
                        placeholder={`What is your group project topic`}
                      />
                    </Box>
                    <Box>
                      <Box className={css.caption}>Category</Box>
                      <FieldCustomSelect
                        name="category"
                        listOption={categoryOption}
                      />
                    </Box>
                    <Box>
                      <Box className={css.caption}>Group Size</Box>
                      <FieldCustomSelect
                        name="group_size"
                        listOption={groupSizeOption}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Box className={css.agreed_note}>
                      Please review your registration details before submitting
                    </Box>
                    <Box className={css.agreed_content}>
                      <Checkbox
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                        disableRipple
                        sx={{
                          color: "white",
                          padding: 0,
                          "&.Mui-checked": {
                            color: "#d434fe",
                          },
                        }}
                      />
                      <span>
                        I agreed with the event terms and conditions and privacy
                        policy
                      </span>
                    </Box>
                  </Box>
                  <Buttons
                    type="submit"
                    disabled={!checked || loading}
                    onClick={submitForm}
                  >
                    Register Now
                  </Buttons>
                </Box>
              </Box>
            </FormikProvider>
          </Box>
        </Box>

        <Box className={css.circle_1}>
          <Box className="purple-circle" />
        </Box>
        <Box className={css.circle_2}>
          <Box className="purple-circle" />
        </Box>
        <Box className={css.star_1}>
          <StarIcon />
        </Box>
        <Box className={css.star_2}>
          <StarIcon />
        </Box>
        <Box className={css.star_3}>
          <StarIcon />
        </Box>
        <Box className={css.star_4}>
          <StarIcon />
        </Box>
        <Box className={css.star_5}>
          <StarIcon />
        </Box>
      </Container>

      <Dialog open={openDialog} close={() => setOpenDialog(false)} />
    </section>
  );
}

export default Register;
