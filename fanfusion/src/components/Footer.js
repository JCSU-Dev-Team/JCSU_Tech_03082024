import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box mt={4} bgcolor="primary.main" color="white" py={2} textAlign="center">
      <Typography variant="body1">
        © 2024 FanFusion. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
