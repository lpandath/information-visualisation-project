import { Box, Paper, Typography } from '@mui/material';

import React from 'react';

export const ColorPalettePresentation: React.FC = () => {
  return (
    <Box sx={{ p: 4, maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        TU Graz Color System
      </Typography>

      {/* Faculty Colors Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Faculty Colors
        </Typography>
        <Typography variant="body1" paragraph>
          Each faculty at TU Graz is represented by a distinct color, creating a cohesive visual identity while maintaining individual recognition.
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, mb: 3, flexWrap: 'wrap' }}>
          {[
            { color: 'var(--faculty-architecture)', name: 'Architecture' },
            { color: 'var(--faculty-civil-engineering)', name: 'Civil Engineering' },
            { color: 'var(--faculty-electrical-engineering)', name: 'Electrical Engineering' },
            { color: 'var(--faculty-mathematics)', name: 'Mathematics' },
          ].map((item) => (
            <Paper
              key={item.name}
              elevation={3}
              sx={{
                p: 2,
                width: 150,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Box
                style={{
                  height: '60px',
                  backgroundColor: item.color,
                  borderRadius: '4px',
                }}
              />
              <Typography variant="body2">{item.name}</Typography>
            </Paper>
          ))}
        </Box>
        <Box sx={{ pl: 2 }}>
          <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Box
              component="span"
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: 'primary.main',
                mr: 2,
              }}
            />
            Colors are chosen to be distinct and memorable, ensuring clear differentiation between faculties
          </Typography>
          <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="span"
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: 'primary.main',
                mr: 2,
              }}
            />
            Each color maintains sufficient contrast for accessibility and readability
          </Typography>
        </Box>
      </Box>

      {/* Semantic Colors Section */}
      <Box>
        <Typography variant="h5" gutterBottom color="primary">
          Semantic Colors
        </Typography>
        <Typography variant="body1" paragraph>
          Our semantic color system provides consistent meaning across the interface, improving user experience and accessibility.
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, mb: 3, flexWrap: 'wrap' }}>
          {[
            { color: 'var(--primary)', name: 'Primary' },
            { color: 'var(--secondary)', name: 'Secondary' },
            { color: 'var(--success)', name: 'Success' },
            { color: 'var(--warning)', name: 'Warning' },
          ].map((item) => (
            <Paper
              key={item.name}
              elevation={3}
              sx={{
                p: 2,
                width: 150,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Box
                style={{
                  height: '60px',
                  backgroundColor: item.color,
                  borderRadius: '4px',
                }}
              />
              <Typography variant="body2">{item.name}</Typography>
            </Paper>
          ))}
        </Box>
        <Box sx={{ pl: 2 }}>
          <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Box
              component="span"
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: 'primary.main',
                mr: 2,
              }}
            />
            Primary and secondary colors establish visual hierarchy and brand identity
          </Typography>
          <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="span"
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: 'primary.main',
                mr: 2,
              }}
            />
            Status colors (success, warning, etc.) provide immediate visual feedback
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}; 