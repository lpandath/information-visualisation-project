// Copyright (c) 2025 Laura Thaci. All rights reserved.

import { Box, Typography as MuiTypography } from '@mui/material';

import React from 'react';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'caption' | 'link' | 'list' | 'listItem' | 'emphasis';
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Typography: React.FC<TypographyProps> = ({ variant, children, style }) => {
  const getTypographyStyles = () => {
    switch (variant) {
      case 'h1':
        return {
          fontFamily: 'Arial, sans-serif',
          fontSize: '20px',
          lineHeight: '24px',
          fontWeight: 400,
          ...style,
        };
      case 'h2':
        return {
          fontFamily: 'Arial, sans-serif',
          fontSize: '14px',
          lineHeight: '17px',
          fontWeight: 700,
          ...style,
        };
      case 'h3':
        return {
          fontFamily: 'Arial, sans-serif',
          fontSize: '12px',
          lineHeight: '15px',
          fontWeight: 700,
          ...style,
        };
      case 'h4':
        return {
          fontFamily: 'Arial, sans-serif',
          fontSize: '10px',
          lineHeight: '15px',
          fontWeight: 700,
          ...style,
        };
      case 'body1':
        return {
          fontFamily: 'Arial, sans-serif',
          fontSize: '10px',
          lineHeight: '15px',
          fontWeight: 400,
          ...style,
        };
      case 'body2':
        return {
          fontFamily: 'Cambria, serif',
          fontSize: '11px',
          lineHeight: '15px',
          fontWeight: 400,
          ...style,
        };
      case 'caption':
        return {
          fontFamily: 'Arial, sans-serif',
          fontSize: '7.5px',
          lineHeight: '10px',
          fontWeight: 400,
          ...style,
        };
      case 'link':
        return {
          fontFamily: 'Arial, sans-serif',
          fontSize: '10px',
          lineHeight: '15px',
          fontWeight: 400,
          color: '#0066CC',
          textDecoration: 'underline',
          ...style,
        };
      case 'list':
        return {
          fontFamily: 'Arial, sans-serif',
          fontSize: '10px',
          lineHeight: '15px',
          fontWeight: 400,
          paddingLeft: '20px',
          ...style,
        };
      case 'listItem':
        return {
          fontFamily: 'Arial, sans-serif',
          fontSize: '10px',
          lineHeight: '15px',
          fontWeight: 400,
          '&::before': {
            content: '"§"',
            marginRight: '8px',
          },
          ...style,
        };
      case 'emphasis':
        return {
          fontFamily: 'Arial, sans-serif',
          fontSize: '10px',
          lineHeight: '15px',
          fontWeight: 900,
          ...style,
        };
      default:
        return {
          ...style,
        };
    }
  };

  const renderContent = () => {
    if (variant === 'list') {
      return (
        <Box component="ul" sx={getTypographyStyles()}>
          {React.Children.map(children, (child) => (
            <Box component="li" sx={getTypographyStyles()}>
              {child}
            </Box>
          ))}
        </Box>
      );
    }

    return (
      <MuiTypography sx={getTypographyStyles()}>
        {children}
      </MuiTypography>
    );
  };

  return renderContent();
};
