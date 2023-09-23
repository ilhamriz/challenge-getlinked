import { Box, Dialog } from "@mui/material";
import css from "./Dialog.module.scss";
import { Buttons } from "../Form";
import { emoji_dialog, success } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { StarIcon } from "../../assets/icons";

function DialogRegister({ open, close }) {
  const navigate = useNavigate();
  const handleClose = () => {
    close();
    navigate("/");
  };

  return (
    <Dialog
      open={open}
      scroll="body"
      sx={{ backgroundColor: "rgba(21, 14, 40, 0.83)" }}
      PaperProps={{
        style: {
          maxWidth: 700,
          backgroundColor: "transparent",
        },
      }}
    >
      <Box className={css.wrapper}>
        <Box className={css.image}>
          <img src={success} alt="Success" />
        </Box>
        <Box className={css.title}>
          Congratulations
          <br />
          you have successfully Registered!
        </Box>
        <Box className={css.body}>
          Yes, it was easy and you did it! check your mail box for next step{" "}
          <img src={emoji_dialog} alt="Emoji" />
        </Box>
        <Buttons onClick={() => handleClose()} style={{ width: "100%" }}>
          Back
        </Buttons>

        <Box className={css.star_1}>
          <StarIcon />
        </Box>
        <Box className={css.star_2}>
          <StarIcon />
        </Box>
        <Box className={css.star_3}>
          <StarIcon />
        </Box>
      </Box>
    </Dialog>
  );
}

export default DialogRegister;
