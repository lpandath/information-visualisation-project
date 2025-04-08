import { Box, Button, Paper, Typography } from '@mui/material';

import React from 'react';

export const ColorUsageExample: React.FC = () => {
  return (
    <Box sx={{ p: 3, maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom>
        Using TU Graz Color Variables
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        This example demonstrates how to use the TU Graz color variables in your components.
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Faculty Colors
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Paper sx={{ p: 2, bgcolor: 'var(--faculty-architecture)', color: 'white', width: 150, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Architecture
          </Paper>
          <Paper sx={{ p: 2, bgcolor: 'var(--faculty-civil-engineering)', color: 'white', width: 150, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Civil Engineering
          </Paper>
          <Paper sx={{ p: 2, bgcolor: 'var(--faculty-electrical-engineering)', color: 'white', width: 150, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Electrical Engineering
          </Paper>
          <Paper sx={{ p: 2, bgcolor: 'var(--faculty-mathematics)', color: 'white', width: 150, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Mathematics
          </Paper>
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Semantic Colors
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Paper sx={{ p: 2, bgcolor: 'var(--color-primary)', color: 'white', width: 150, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Primary Color
          </Paper>
          <Paper sx={{ p: 2, bgcolor: 'var(--color-secondary)', color: 'white', width: 150, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Secondary Color
          </Paper>
          <Paper sx={{ p: 2, bgcolor: 'var(--color-accent)', color: 'white', width: 150, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Accent Color
          </Paper>
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          UI Elements
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button variant="contained" sx={{ bgcolor: 'var(--color-primary)', '&:hover': { bgcolor: 'var(--faculty-mathematics)' } }}>
            Primary Button
          </Button>
          <Button variant="contained" sx={{ bgcolor: 'var(--color-secondary)', '&:hover': { bgcolor: 'var(--faculty-electrical-engineering)' } }}>
            Secondary Button
          </Button>
          <Button variant="outlined" sx={{ color: 'var(--color-primary)', borderColor: 'var(--color-primary)', '&:hover': { borderColor: 'var(--faculty-mathematics)', bgcolor: 'rgba(228, 21, 75, 0.04)' } }}>
            Outlined Button
          </Button>
          <Typography sx={{ color: 'var(--color-link)', textDecoration: 'underline', cursor: 'pointer' }}>
            This is a link using the link color variable
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}; 