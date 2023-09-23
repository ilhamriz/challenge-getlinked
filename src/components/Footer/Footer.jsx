import { Box, Container } from "@mui/material";
import css from "./Footer.module.scss";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MapIcon,
  PhoneIcon,
  StarIcon,
  TwitterXIcon,
} from "../../assets/icons";

function Footer() {
  return (
    <footer className={css.wrapper}>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box className={css.inner}>
          <Box className={css.container}>
            <Box className={css.content}>
              <Box>
                <Box className={css.content__title}>
                  get<span>linked</span>
                </Box>
                <Box className={css.content__body}>
                  Getlinked Tech Hackathon is a technology innovation program
                  established by a group of organizations with the aim of
                  showcasing young and talented individuals in the field of
                  technology
                </Box>
              </Box>
              <Box className={css.terms}>
                <Box>Terms of Use</Box>
                <Box className={css.terms__divider} />
                <Box>Privacy Policy</Box>
              </Box>
            </Box>
            <Box className={css.useful}>
              <span className={css.useful__title}>Useful Links</span>
              <Box className={css.useful__content}>
                <Box>Overview</Box>
                <Box>Timeline</Box>
                <Box>FAQs</Box>
                <Box>Register</Box>
                <Box className={css.useful__sosmed}>
                  <span>Follow us</span>
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
            </Box>
            <Box className={css.contact}>
              <span>Contact Us</span>
              <Box className={css.contact__content}>
                <Box className={css.contact__phone}>
                  <PhoneIcon />
                  <Box>+234 679 81819</Box>
                </Box>
                <Box className={css.contact__location}>
                  <MapIcon />
                  <Box>
                    27,Alara Street
                    <br />
                    Yaba 100012
                    <br />
                    Lagos State
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={css.copyright}>
            All rights reserved. © getlinked Ltd.
          </Box>
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
    </footer>
  );
}

export default Footer;
