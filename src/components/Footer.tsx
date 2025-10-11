// components/Footer.tsx
'use client';

import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        py: 3,
        mt: 4,
        borderTop: '1px solid #ddd',
        backgroundColor: '#f8f9fa',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Grace Community Church. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
