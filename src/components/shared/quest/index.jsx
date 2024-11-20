import React from 'react';

import { Box, Grid, Stack, Container, Typography } from '@mui/material';

import { faqs } from './data';
import faqImg from '../../../assets/faq1.png';

const FAQs = () => (
  <Box
    sx={{
      backgroundColor: '#216c7429',
      minHeight: '90vh',
      overflow: 'hidden', // Ensure content doesn't overflow the container
    }}
  >
    <Box
      sx={{
        display: 'flex',
        animation: { md: 'move 20s linear infinite', xs: 'move 10s linear infinite' },
      }}
    >
      {faqs?.map((item, index) => (
        <Typography
          key={item?.id}
          sx={{
            fontSize: { md: '48px', xs: '24px' },
            fontFamily: 'Urbanist',
            fontWeight: '800',
            whiteSpace: 'nowrap', // Prevent line breaks
            color: index % 2 === 0 ? '#18909C' : 'transparent', // Text color for even/odd
            WebkitTextStroke: {
              md: index % 2 === 0 ? 'none' : '2px #18909C',
              xs: index % 2 === 0 ? 'none' : '1px #18909C',
            }, // Stroke for odd questions
            textAlign: 'center',

            display: 'inline-block', // Allow animation to affect individual items
            padding: '8px 16px',
            margin: '16px 0',
          }}
        >
          {item?.question}
        </Typography>
      ))}
    </Box>

    <Container sx={{ marginTop: '3rem', paddingBottom: '1rem' }}>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Box sx={{ width: { md: '100%', xs: '90%' } }}>
            <img src={faqImg} alt="" />
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Stack spacing={3}>
            {faqs?.map((item) => (
              <Box
                key={item?.id}
                sx={{
                  borderRadius: '16px',
                  border: '1px solid #fff',
                  boxShadow: '0px 8px 16px 0px rgba(9,66,38,0.06)',
                  backgroundColor: '#fff',
                  maxWidth: '100%',
                  padding: '40px',
                  ':hover': { border: '1px solid #18909C' },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Urbanist',
                    marginBottom: '1rem',
                    textAlign: 'left',
                    fontSize: '24px',
                    lineHeight: '28.8px',
                    fontWeight: '600',
                    color: '#0d5961',
                  }}
                >
                  {item?.question}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '25px',
                    fontFamily: 'Urbanist',
                  }}
                >
                  {item?.answer}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>

    {/* Add keyframes for the animation */}
    <style>
      {`
        @keyframes move {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}
    </style>
  </Box>
);

export default FAQs;
