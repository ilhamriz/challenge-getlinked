import {
  Option,
  optionClasses,
  Popper,
  Select,
  selectClasses,
} from "@mui/base";
import { FormControl, FormHelperText } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box, styled } from "@mui/system";
import { Field } from "formik";
import React from "react";

const colors = {
  title: "#14142b",
  body: "#FFFFFF",
  background: "rgba(255, 255, 255, 0.03)",
  border: "#FFFFFF",
  background_hover: "rgba(255, 255, 255, 0.1)",
  outline: "#D434FE",
};

const Button = React.forwardRef(function Button(props, ref) {
  const { ownerState, ...other } = props;
  return (
    <button type="button" id={ownerState?.name} {...other} ref={ref}>
      {other.children}
    </button>
  );
});

const StyledButton = styled(Button, { shouldForwardProp: () => true })(
  () => `
  width: 100%;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  line-height: 1.5;
  color: ${colors["body"]};
  background: ${colors["background"]};
  border: 2px solid ${colors["border"]};
  border-radius: 4px;
  padding: 15px 27px;
  text-align: left;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    background: ${colors["background_hover"]};
  }

  &.${selectClasses.focusVisible} {
    outline: 3px solid ${colors["outline"]};
  }

  &.${selectClasses.expanded} {
    &::after {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'%3E%3C/path%3E%3Cpath d='M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z' fill='rgba(255,255,255,1)'%3E%3C/path%3E%3C/svg%3E");
    }
  }

  &::after {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'%3E%3C/path%3E%3Cpath d='M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z' fill='rgba(255,255,255,1)'%3E%3C/path%3E%3C/svg%3E");
    float: right;
    height: 24px;
  }
  `
);

const StyledListbox = styled("ul")(
  () => `
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  box-sizing: border-box;
  padding: 4px;
  margin: 4px 0;
  min-width: 300px;
  background: #FFFFFF;
  border: 2px solid ${colors["border"]};
  border-radius: 4px;
  color: ${colors["title"]};
  overflow: auto;
  outline: 0px;
  `
);

const StyledOption = styled(Option)(
  () => `
  list-style: none;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: .15s ease;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionClasses.highlighted}.${optionClasses.selected} {
    background-color: ${colors["outline"]};
    color: ${colors["title"]};
  }

  &:hover:not(.${optionClasses.disabled}) {
    background-color: ${grey[200]};
    color: ${colors["title"]};
  }
  `
);

const StyledPopper = styled(Popper)`
  z-index: 1;
`;

function CustomSelect(props) {
  const slots = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <Select {...props} slots={slots} />;
}

function Component({ name, listOption }) {
  return (
    <Field name={name}>
      {({
        meta,
        field: { value: fieldValue, ...restField },
        form: { setFieldValue },
      }) => (
        <Box>
          <FormControl style={{ width: "100%" }}>
            <CustomSelect
              {...restField}
              value={fieldValue}
              onChange={(e, value) => setFieldValue(name, value)}
            >
              {listOption?.map((list) => (
                <StyledOption key={list.id} value={list.id}>
                  {list.name}
                </StyledOption>
              ))}
            </CustomSelect>
          </FormControl>
          {meta.touched && meta.error ? (
            <FormHelperText error={true}>{meta.error}</FormHelperText>
          ) : null}
        </Box>
      )}
    </Field>
  );
}

export default Component;
