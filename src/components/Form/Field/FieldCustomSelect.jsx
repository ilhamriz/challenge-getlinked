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
  body: "#4e4b66",
  background: "#FFFFFF",
  border: "#4e4b66",
  background_hover: "#F7F7FC",
  outline: "#BE9C9E",
};

const StyledButton = styled("button")(
  ({ theme }) => `
  width: 100%;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${colors["body"]};
  background: ${colors["background"]};
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  text-align: left;

  &:hover {
    background: ${colors["background_hover"]};
  }

  &.${selectClasses.focusVisible} {
    outline: 3px solid ${colors["outline"]};
  }

  &.${selectClasses.expanded} {
    &::after {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z'/%3E%3C/svg%3E");
    }
  }

  &::after {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z'/%3E%3C/svg%3E");
    float: right;
    height: 24px;
  }
  `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: "Inter", sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  padding: 5px;
  margin: 4px 0;
  min-width: 320px;
  background: ${colors["background"]};
  border: 1px solid ${grey[300]};
  border-radius: 8px;
  color: ${colors["body"]};
  overflow: auto;
  outline: 0px;
  `
);

const StyledOption = styled(Option)(
  ({ theme }) => `
  list-style: none;
  padding: 12px;
  border-radius: 0.45em;
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
    background-color: ${grey[100]};
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
        field: { onChange, value: fieldValue, ...restField },
        form: { setFieldValue },
      }) => (
        <Box>
          <FormControl style={{ width: "100%" }}>
            <CustomSelect
              {...restField}
              value={fieldValue}
              onChange={(e, value) => setFieldValue(name, value)}
            >
              {listOption?.map((list, idx) => (
                <StyledOption key={idx} value={list.value}>
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
