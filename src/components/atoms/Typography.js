import React from 'react';
import Typography from '@mui/material/Typography';

const Text = ({ variant, children, ...props }) => (
  <Typography variant={variant} {...props}>
    {children}
  </Typography>
);

export default Text;