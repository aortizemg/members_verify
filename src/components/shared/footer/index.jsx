import React from 'react';

import { Box, Container, Typography } from '@mui/material';

const Footer = () => (
  <Container sx={{ padding: { md: '8rem 0rem', xs: '4rem 0rem' } }}>
    <Box>
      <Typography
        sx={{ fontSize: { md: '32px', xs: '16px' }, textAlign: 'center', fontWeight: '800' }}
      >
        File Your BOI Quickly and Easily with{' '}
        <span style={{ color: '#18909C' }}> Membersverify.com</span>. Our user-friendly platform and
        expert support streamline the process for your association.
      </Typography>
    </Box>
  </Container>
);

export default Footer;
