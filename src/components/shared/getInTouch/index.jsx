import React from 'react';

import { Box, Button, Typography } from '@mui/material';

import bg from '../../../assets/image2.jpg';

const GetInTouch = () => (
  <Box
    sx={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50vh',
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      '::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(13, 89, 97, 0.7)', // Adjust the color and transparency
        zIndex: 1,
      },
    }}
  >
    <Box sx={{ zIndex: 99, textAlign: 'center' }}>
      <Typography sx={{ color: '#fff', fontSize: { md: '48px', xs: '24px' }, fontWeight: '800' }}>
        File Your Report Immediately
      </Typography>
      <Button
        sx={{
          color: '#18909C',
          background: '#fff',
          fontSize: '1rem',
          padding: '10px',
          mt: 2,
          ':hover': { background: '#fff' },
        }}
      >
        Get Started
      </Button>
    </Box>
  </Box>
);

export default GetInTouch;
