// app/layout.tsx
'use client';

import { ReactNode } from 'react';
import { CssBaseline, ThemeProvider, Container } from '@mui/material';
import theme from '@/theme/theme';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
            {children}
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
