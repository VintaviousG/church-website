// app/page.tsx
'use client';

import { Typography, Box, Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Box textAlign="center" sx={{ mt: 8 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Grace Community Church
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Join us every Sunday on Google Meet for service and fellowship.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        href="https://meet.google.com" // replace with your real link
        target="_blank"
        sx={{ mt: 3 }}
      >
        Join Service
      </Button>
    </Box>
  );
}

