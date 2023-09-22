import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
} from "@mui/material";

function Component({ name, ...props }) {
  return (
    <Field name={name}>
      {({ meta, field }) => (
        <Box>
          <Box>Pilih Bank/e-money</Box>
          <FormControl style={{ width: "100%" }}>
            <Select id="field-bank" {...field}>
              <MenuItem value="BRI">BRI</MenuItem>
              <MenuItem value="BCA">BCA</MenuItem>
              <MenuItem value="OVO">OVO</MenuItem>
            </Select>
          </FormControl>
          {meta.touched && meta.error ? (
            <FormHelperText error={true}>{meta.error}</FormHelperText>
          ) : null}
        </Box>
      )}
    </Field>
  );
}

Component.propTypes = {};

export default Component;
