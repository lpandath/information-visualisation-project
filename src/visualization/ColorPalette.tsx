import { Box, Paper, Typography } from '@mui/material';

import React from 'react';

interface ColorInfo {
  name: string;
  cmyk: string;
  rgb: string;
  hex: string;
  pantone?: string;
  cssVar: string;
}

interface ColorPaletteProps {
  title?: string;
  description?: string;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({ 
  title = 'TU Graz Institution Color Palette',
  description = 'Official color palette for TU Graz faculties and branding'
}) => {
  const colors: ColorInfo[] = [
    {
      name: 'Architecture',
      cmyk: '14/44/93/1',
      rgb: '204/153/51',
      hex: '#CC9933',
      cssVar: '--faculty-architecture',
    },
    {
      name: 'Civil Engineering',
      cmyk: '37/84/70/43',
      rgb: '102/51/51',
      hex: '#663333',
      cssVar: '--faculty-civil-engineering',
    },
    {
      name: 'Electrical Engineering and Information Technology',
      cmyk: '90/58/0/0',
      rgb: '0/102/204',
      hex: '#0066CC',
      cssVar: '--faculty-electrical-engineering',
    },
    {
      name: 'Mechanical Engineering and Business Administration',
      cmyk: '69/62/10/1',
      rgb: '102/102/153',
      hex: '#666699',
      cssVar: '--faculty-mechanical-engineering',
    },
    {
      name: 'Technical Chemistry, Process Engineering and Biotechnology',
      cmyk: '71/5/5/0',
      rgb: '25/180/227',
      hex: '#19B4E3',
      cssVar: '--faculty-technical-chemistry',
    },
    {
      name: 'Computer Science and Biomedical Engineering',
      cmyk: '91/33/99/23',
      rgb: '61/94/60',
      hex: '#3D5E3C',
      cssVar: '--faculty-computer-science',
    },
    {
      name: 'Mathematics, Physics and Geodesy',
      cmyk: '0/96/57/0',
      rgb: '247/1/70',
      hex: '#E4154B',
      pantone: 'Pantone 199C',
      cssVar: '--faculty-mathematics',
    },
    {
      name: 'Pure Black',
      cmyk: '0/0/0/100',
      rgb: '0/0/0',
      hex: '#000000',
      pantone: 'Pantone Neutral Black C',
      cssVar: '--color-pure-black',
    },
    {
      name: 'Deep Black',
      cmyk: '40/20/20/100',
      rgb: '0/0/0',
      hex: '#000000',
      cssVar: '--color-deep-black',
    },
  ];

  return (
    <Box sx={{ p: 2, maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" sx={{ mb: 3 }}>
          {description}
        </Typography>
      )}
      <Box 
        sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 3,
          justifyContent: 'center'
        }}
      >
        {colors.map((color) => (
          <Box 
            key={color.name}
            sx={{ 
              flexBasis: { xs: '100%', sm: 'calc(50% - 24px)', md: 'calc(33.333% - 24px)' },
              minWidth: { xs: '100%', sm: 'calc(50% - 24px)', md: 'calc(33.333% - 24px)' },
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
              }}
            >
              <Box
                sx={{
                  height: 100,
                  backgroundColor: `var(${color.cssVar})`,
                  mb: 2,
                  borderRadius: 1,
                  border: '1px solid #ddd',
                  boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)',
                }}
              />
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                {color.name}
              </Typography>
              <Box sx={{ mt: 'auto' }}>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  <strong>CSS Variable:</strong> {color.cssVar}
                </Typography>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  <strong>CMYK:</strong> {color.cmyk}
                </Typography>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  <strong>RGB:</strong> {color.rgb}
                </Typography>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  <strong>HEX:</strong> {color.hex}
                </Typography>
                {color.pantone && (
                  <Typography variant="body2">
                    <strong>Pantone:</strong> {color.pantone}
                  </Typography>
                )}
              </Box>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
}; 