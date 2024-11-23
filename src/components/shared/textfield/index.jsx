import React from 'react';
import PropTypes from 'prop-types';

import { Box, TextField, Typography } from '@mui/material';

const CustomTextField = ({ label, name, onChange, error, helperText, value, disabled, type }) => {
  console.log(value);

  return (
    <Box>
      <Typography sx={{ paddingLeft: '10px', fontSize: '14px' }}>{label}</Typography>
      <TextField
        fullWidth
        value={value}
        name={name}
        onChange={onChange}
        error={error}
        helperText={helperText}
        disabled={disabled}
        type={type}
      />
    </Box>
  );
};

export default CustomTextField;
CustomTextField.propTypes = {
  label: PropTypes.any,
  name: PropTypes.any,
  onChange: PropTypes.any,
  error: PropTypes.any,
  helperText: PropTypes.any,
  value: PropTypes.any,
  disabled: PropTypes.any,
  type: PropTypes.any,
};
