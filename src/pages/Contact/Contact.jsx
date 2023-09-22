import css from "./Contact.module.scss";
import { Box, Container } from "@mui/material";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  StarIcon,
  TwitterXIcon,
} from "../../assets/icons";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className={css.wrapper}>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box className={css.inner}>
          <Box className={css.touch}>
            <Box className={css.touch__title}>Get in touch</Box>
            <Box mb={"17px"}>
              Contact
              <br />
              Information
            </Box>
            <Box mb={"21px"}>
              <Box>27,Alara Street</Box>
              <Box>Yaba 100012</Box>
              <Box>Lagos State</Box>
            </Box>
            <Box mb={"22px"}>Call Us : 07067981819</Box>
            <Box>
              we are open from Monday-Friday
              <br />
              08:00am - 05:00pm
            </Box>
          </Box>
          <Box className={css.sosmed}>
            <Box>Share on</Box>
            <Box className={css.icons}>
              <a href="https://www.instagram.com/ilhamriz7/">
                <InstagramIcon />
              </a>
              <a href="https://twitter.com/Ilhamriz7">
                <TwitterXIcon />
              </a>
              <a href="">
                <FacebookIcon />
              </a>
              <a href="https://www.linkedin.com/in/milhamrizky/">
                <LinkedinIcon />
              </a>
            </Box>
          </Box>
          <Box className={css.form}>
            <ContactForm />
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
      </Container>
    </div>
  );
}

export default Contact;
