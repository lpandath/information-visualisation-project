import { Box, Typography } from '@mui/material';

import React from 'react';

export const CSSVariablesTest: React.FC = () => {
  return (
    <Box sx={{ p: 3, maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom>
        CSS Variables Test
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Direct Color Values
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ width: 100, height: 100, backgroundColor: '#CC9933', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            #CC9933
          </Box>
          <Box sx={{ width: 100, height: 100, backgroundColor: '#E4154B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            #E4154B
          </Box>
          <Box sx={{ width: 100, height: 100, backgroundColor: '#0066CC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            #0066CC
          </Box>
        </Box>
      </Box>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          CSS Variables (Using style prop)
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Box 
            style={{ 
              width: '100px', 
              height: '100px', 
              backgroundColor: 'var(--faculty-architecture)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white' 
            }}
          >
            --faculty-architecture
          </Box>
          <Box 
            style={{ 
              width: '100px', 
              height: '100px', 
              backgroundColor: 'var(--faculty-mathematics)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white' 
            }}
          >
            --faculty-mathematics
          </Box>
          <Box 
            style={{ 
              width: '100px', 
              height: '100px', 
              backgroundColor: 'var(--faculty-electrical-engineering)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white' 
            }}
          >
            --faculty-electrical-engineering
          </Box>
        </Box>
      </Box>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          CSS Variables (Using sx prop)
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Box 
            sx={{ 
              width: 100, 
              height: 100, 
              backgroundColor: 'var(--faculty-architecture)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white' 
            }}
          >
            --faculty-architecture
          </Box>
          <Box 
            sx={{ 
              width: 100, 
              height: 100, 
              backgroundColor: 'var(--faculty-mathematics)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white' 
            }}
          >
            --faculty-mathematics
          </Box>
          <Box 
            sx={{ 
              width: 100, 
              height: 100, 
              backgroundColor: 'var(--faculty-electrical-engineering)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white' 
            }}
          >
            --faculty-electrical-engineering
          </Box>
        </Box>
      </Box>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Semantic Colors
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Box 
            style={{ 
              width: '100px', 
              height: '100px', 
              backgroundColor: 'var(--color-primary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white' 
            }}
          >
            --color-primary
          </Box>
          <Box 
            style={{ 
              width: '100px', 
              height: '100px', 
              backgroundColor: 'var(--color-secondary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white' 
            }}
          >
            --color-secondary
          </Box>
          <Box 
            style={{ 
              width: '100px', 
              height: '100px', 
              backgroundColor: 'var(--color-accent)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white' 
            }}
          >
            --color-accent
          </Box>
        </Box>
      </Box>
      
      <Box>
        <Typography variant="h6" gutterBottom>
          Additional Semantic Colors
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Box 
            style={{ 
              width: '100px', 
              height: '100px', 
              backgroundColor: 'var(--primary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white' 
            }}
          >
            --primary
          </Box>
          <Box 
            style={{ 
              width: '100px', 
              height: '100px', 
              backgroundColor: 'var(--secondary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white' 
            }}
          >
            --secondary
          </Box>
          <Box 
            style={{ 
              width: '100px', 
              height: '100px', 
              backgroundColor: 'var(--success)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white' 
            }}
          >
            --success
          </Box>
        </Box>
      </Box>
    </Box>
  );
}; 