import React from "react";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import { Input } from "@mui/base";

const colors = {
  text: "#FFFFFF",
  placeholder: "#FFFFFF",
  background: "rgba(255, 255, 255, 0.03)",
  border: "#FFFFFF",
  background_hover: "rgba(255, 255, 255, 0.1)",
  outline: "#D434FE",
};

const defaultForm = `
  width: 100%;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: ${colors["text"]};
  background: ${colors["background"]};
  border: 2px solid ${colors["border"]};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 14px 30px;
  letter-spacing: 0.01em;

  &::placeholder {
    color: ${colors["placeholder"]};
  }

  &:hover {
    background: ${colors["background_hover"]};
  }

  &:focus {
    outline: 3px solid ${colors["outline"]};
  }

  @media (max-width: 425px) {
    padding: 14px 24px;
  }
`;

const StyledInputElement = styled("input")(() => defaultForm);

const StyledTextareaElement = styled(TextareaAutosize)(() => defaultForm);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <Input
      ref={ref}
      slots={{
        input: StyledInputElement,
        textarea: props.multiline ? StyledTextareaElement : null,
      }}
      slotProps={{ input: { onChange: props.onChange } }}
      {...props}
    />
  );
});

function Components({ ...props }) {
  return <CustomInput {...props} />;
}

Components.propTypes = {};

export default Components;
