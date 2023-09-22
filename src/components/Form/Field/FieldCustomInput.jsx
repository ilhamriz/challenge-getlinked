import PropTypes from "prop-types";
import { Box, FormHelperText } from "@mui/material";
import { Field } from "formik";
import CustomInput from "./CustomInput";

function Component({ name, placeholder, type, ...props }) {
  return (
    <Field name={name}>
      {({ meta, field: { onChange, value: fieldValue, ...restField } }) => (
        <Box>
          <CustomInput
            {...restField}
            aria-label={placeholder}
            placeholder={placeholder}
            value={fieldValue}
            onChange={onChange}
            type={type}
            {...props}
          />
          {meta.touched && meta.error ? (
            <FormHelperText error={true}>{meta.error}</FormHelperText>
          ) : null}
        </Box>
      )}
    </Field>
  );
}

Component.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Component.defaultProps = {
  type: "text",
};

export default Component;
