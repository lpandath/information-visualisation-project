import { Box, Paper, Typography } from '@mui/material';

import React from 'react';

interface ColorVariable {
  name: string;
  value: string;
  category: string;
}

export const ColorVariablesDisplay: React.FC = () => {
  const colorVariables: ColorVariable[] = [
    // Faculty Colors
    { name: '--faculty-architecture', value: '#CC9933', category: 'Faculty Colors' },
    { name: '--faculty-civil-engineering', value: '#663333', category: 'Faculty Colors' },
    { name: '--faculty-electrical-engineering', value: '#0066CC', category: 'Faculty Colors' },
    { name: '--faculty-mechanical-engineering', value: '#666699', category: 'Faculty Colors' },
    { name: '--faculty-technical-chemistry', value: '#19B4E3', category: 'Faculty Colors' },
    { name: '--faculty-computer-science', value: '#3D5E3C', category: 'Faculty Colors' },
    { name: '--faculty-mathematics', value: '#E4154B', category: 'Faculty Colors' },
    { name: '--faculty-arts', value: '#E63946', category: 'Additional Faculty Colors' },
    { name: '--faculty-science', value: '#457B9D', category: 'Additional Faculty Colors' },
    { name: '--faculty-engineering', value: '#2A9D8F', category: 'Additional Faculty Colors' },
    { name: '--faculty-medicine', value: '#E9C46A', category: 'Additional Faculty Colors' },
    { name: '--faculty-law', value: '#8338EC', category: 'Additional Faculty Colors' },
    { name: '--faculty-business', value: '#FB8500', category: 'Additional Faculty Colors' },
    
    // Black Colors
    { name: '--color-pure-black', value: '#000000', category: 'Black Colors' },
    { name: '--color-deep-black', value: '#000000', category: 'Black Colors' },
    
    // Semantic Colors
    { name: '--color-primary', value: 'var(--faculty-mathematics)', category: 'Semantic Colors' },
    { name: '--color-secondary', value: 'var(--faculty-electrical-engineering)', category: 'Semantic Colors' },
    { name: '--color-accent', value: 'var(--faculty-technical-chemistry)', category: 'Semantic Colors' },
    { name: '--color-text', value: 'var(--color-pure-black)', category: 'Semantic Colors' },
    { name: '--color-background', value: '#FFFFFF', category: 'Semantic Colors' },
    { name: '--color-link', value: 'var(--faculty-electrical-engineering)', category: 'Semantic Colors' },
    
    // Additional Semantic Colors
    { name: '--primary', value: '#1D3557', category: 'Additional Semantic Colors' },
    { name: '--secondary', value: '#6C757D', category: 'Additional Semantic Colors' },
    { name: '--success', value: '#28A745', category: 'Additional Semantic Colors' },
    { name: '--danger', value: '#DC3545', category: 'Additional Semantic Colors' },
    { name: '--warning', value: '#FFC107', category: 'Additional Semantic Colors' },
    { name: '--info', value: '#17A2B8', category: 'Additional Semantic Colors' },
    
    // UI Colors
    { name: '--background', value: '#F8F9FA', category: 'UI Colors' },
    { name: '--surface', value: '#FFFFFF', category: 'UI Colors' },
    { name: '--text-primary', value: '#212529', category: 'UI Colors' },
    { name: '--text-secondary', value: '#6C757D', category: 'UI Colors' },
    { name: '--border', value: '#DEE2E6', category: 'UI Colors' },
  ];

  // Group colors by category
  const colorsByCategory = colorVariables.reduce((acc, color) => {
    if (!acc[color.category]) {
      acc[color.category] = [];
    }
    acc[color.category].push(color);
    return acc;
  }, {} as Record<string, ColorVariable[]>);

  return (
    <Box sx={{ p: 3, maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom>
        CSS Color Variables Debug
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        This component displays all the CSS color variables defined in the application.
      </Typography>

      {Object.entries(colorsByCategory).map(([category, colors]) => (
        <Box key={category} sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            {category}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {colors.map((color) => (
              <Paper
                key={color.name}
                sx={{
                  p: 2,
                  width: 200,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  style={{
                    width: '100%',
                    height: 60,
                    backgroundColor: `var(${color.name})`,
                    marginBottom: 8,
                    borderRadius: 4,
                    border: '1px solid #ddd',
                  }}
                />
                <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                  {color.name}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {color.value}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}; 