'use client';

import { Box, Button, Container, Typography } from '@mui/material';

export default function HeroSection() {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/church-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to Grace Fellowship Church
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          “Where faith grows and lives are transformed.”
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Join us every Sunday at 10:00 AM on Google Meet
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://meet.google.com/"
          target="_blank"
          sx={{ borderRadius: 2 }}
        >
          Join Service
        </Button>
      </Container>
    </Box>
  );
}
