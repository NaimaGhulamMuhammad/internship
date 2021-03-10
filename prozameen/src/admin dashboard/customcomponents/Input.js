import React from "react";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {
  TextField,
  IconButton,
  Grid,
  InputAdornment
} from "@material-ui/core";

const Input = ({
  name,
  half,
  autoFocus,
  type,
  label,
  handleChange,
  showPassword,
  multiline,
  rows,
  id
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        type={type}
        variant="outlined"
        label={label}
        fullWidth
        required
        multiline={multiline}
        rows={rows}
        id={id}
        autoFocus={autoFocus}
        onChange={handleChange}
        InputProps={
          name === "password" ? {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={showPassword}>
                  {type === "password" ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              </InputAdornment>
            )
          } : null
        }
      />
    </Grid>
  );
};
export default Input;
