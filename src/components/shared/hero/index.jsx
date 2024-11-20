import React from 'react';

import { Box, Grid, Stack, Button, Container, Typography } from '@mui/material';

import bg from '../../../assets/bg.svg';

const Hero = () => (
  <Box
    sx={{
      position: 'relative',
      overflow: 'hidden',
      minHeight: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: { xs: '135px', sm: '100px', md: '100px' },
      paddingBottom: '2rem',
    }}
  >
    <Box
      sx={{
        display: { md: 'block', sm: 'none', xs: 'none' },
        backgroundImage: `url(${bg})`,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundSize: '100% auto', // Maintain the width and adjust the height automatically
        backgroundPosition: 'left top', // Fix the position
        backgroundRepeat: 'no-repeat', // Prevent tiling
        zIndex: -1,
        transform: 'scale(-1,-1)',
      }}
    />
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Stack spacing={2}>
            <Typography
              sx={{
                fontSize: { xs: '45px', md: '84px', sm: '65px' },
                fontWeight: 'bold',
                fontFamily: 'Urbanist',
                lineHeight: { md: '126px', xs: '1.4em' },
                textAlign: 'center',
              }}
            >
              Corporate Transparency Act Filing for HOAs
            </Typography>
            <Typography sx={{ textAlign: 'center', fontSize: { md: '1.5rem', xs: '1.2rem' } }}>
              Keep Your Association Compliant
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            sx={{
              background: '#0d5961',
              color: '#fff',
              fontSize: '1.2rem',
              padding: '.5rem 1.4rem',
              ':hover': { color: '#fff', background: '#0d596173' },
            }}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Hero;
