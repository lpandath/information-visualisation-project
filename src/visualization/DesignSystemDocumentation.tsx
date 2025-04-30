import { Box, Paper, Typography } from '@mui/material';

import React from 'react';

/**
 * Our visualization components documentation
 * Shows how we built different parts of our visualization project:
 * - How we structured our components
 * - Population data visualization we created
 * - Color choices based on TU Graz colors
 * - Examples of our components
 * - How we made sure everything works well together
 */
export const DesignSystemDocumentation: React.FC = () => {
  return (
    <Box sx={{ p: 4, maxWidth: '1400px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Our Data Visualization Project
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="body1" paragraph>
          For our information visualization course, we created these components to show population data in a clear and interesting way.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(33.333% - 16px)' } }}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Our Style Choices
              </Typography>
              <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                <li>Colors we picked for different data types</li>
                <li>Text sizes that are easy to read</li>
                <li>Spacing that looks clean</li>
                <li>Simple animations to make it interesting</li>
              </Typography>
            </Paper>
          </Box>
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(33.333% - 16px)' } }}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Our Components
              </Typography>
              <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                <li>Charts we built to show data</li>
                <li>Interactive parts we added</li>
                <li>Making sure everyone can use it</li>
                <li>Making it work on all screen sizes</li>
              </Typography>
            </Paper>
          </Box>
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(33.333% - 16px)' } }}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                How We Made It
              </Typography>
              <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                <li>Our approach to building it</li>
                <li>Making sure it&apos;s easy to use</li>
                <li>Making it run smoothly</li>
                <li>How we keep track of changes</li>
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="body1" paragraph>
          As part of our project requirements, we used TU Graz&apos;s official color palette from their design guidelines (tu4u.tugraz.at). These colors are specifically chosen for their readability and consistency with the university&apos;s visual identity.
        </Typography>
        <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h2" gutterBottom>
            TU Graz Institution Color Palette
          </Typography>
          <Typography variant="body1" paragraph>
            Official color palette for TU Graz faculties and branding. Each color card shows the color sample along with its CMYK, RGB, and HEX values.
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 3,
              justifyContent: 'center'
            }}
          >
            {[
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
            ].map((color) => (
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
        </Paper>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="body1" paragraph>
          Following TU Graz&apos;s design system requirements, we implemented their typography guidelines to ensure consistency with the university&apos;s visual standards.
        </Typography>
        <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h2" gutterBottom>
            TU Graz Typography Guidelines
          </Typography>
          <Typography variant="body1" paragraph>
            Official typography system for TU Graz, including font families, sizes, and line heights for different text elements.
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h2" gutterBottom>
              Headings
            </Typography>
            <Typography variant="h1" gutterBottom>
              Heading 1 - Arial, 20pt, 24pt line height
            </Typography>
            <Typography variant="h2" gutterBottom>
              Heading 2 - Arial Bold, 14pt, 17pt line height
            </Typography>
            <Typography variant="h3" gutterBottom>
              Heading 3 - Arial Bold, 12pt, 15pt line height
            </Typography>
            <Typography variant="h4" gutterBottom>
              Heading 4 - Arial Bold, 10pt, 15pt line height
            </Typography>

            <Typography variant="h2" sx={{ mt: 4 }} gutterBottom>
              Body Text
            </Typography>
            <Typography variant="body1" gutterBottom>
              Body 1 - Arial, 10pt, 15pt line height. This is the standard body text style for general content.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Body 2 - Cambria, 11pt, 15pt line height. This is the alternative serif font style for scientific works.
            </Typography>

            <Typography variant="h2" sx={{ mt: 4 }} gutterBottom>
              Additional Styles
            </Typography>
            <Typography variant="caption" gutterBottom>
              Caption - Arial, 7.5pt, 10pt line height. Used for footnotes and image captions.
            </Typography>
            <Typography 
              variant="body1" 
              gutterBottom 
              sx={{ 
                color: 'primary.main',
                textDecoration: 'underline'
              }}
            >
              Link - Arial, 10pt, 15pt line height, blue and underlined. Example: https://tu4u.tugraz.at/
            </Typography>
            <Typography 
              variant="body1" 
              gutterBottom 
              sx={{ 
                fontWeight: 900
              }}
            >
              Emphasis - Arial Black, 10pt, 15pt line height. Used to highlight specific content.
            </Typography>

            <Typography variant="h2" sx={{ mt: 4 }} gutterBottom>
              Lists
            </Typography>
            <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
              <li>First list item with bullet point</li>
              <li>Second list item with bullet point</li>
              <li>Third list item with bullet point</li>
            </Typography>
          </Box>
        </Paper>
      </Box>

    </Box>
  );
}; 