import React, { useState, useEffect } from 'react';

import { Box, Typography } from '@mui/material';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Calculate the time left until January 1, 2025
    const targetDate = new Date('2025-01-01T00:00:00');

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Countdown has ended
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timerId = setInterval(updateTimer, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  return (
    <Box
      className="countdown-container"
      sx={{
        background: '#0d5961',
        color: '#fff',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        gap: { xs: '8px', md: '10px' },
        padding: '0.75rem 0rem',
        alignItems: 'center',
        position: 'fixed',
        right: 0,
        top: { sm: '75px', xs: '70px', md: '85px' },
        left: 0,
        zIndex: 1101,
      }}
    >
      <Typography sx={{ fontSize: { xs: '.85rem', md: '1rem' } }}>
        File your BOI report by
      </Typography>
      <Box className="countdown" sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Typography
          id="days"
          sx={{ fontSize: { xs: '.65rem', md: '1rem', textTransform: 'uppercase' } }}
        >
          {timeLeft.days} Days
        </Typography>
        <Typography
          id="hours"
          sx={{ fontSize: { xs: '.65rem', md: '1rem', textTransform: 'uppercase' } }}
        >
          {timeLeft.hours} Hours
        </Typography>
        <Typography
          id="minutes"
          sx={{ fontSize: { xs: '.65rem', md: '1rem', textTransform: 'uppercase' } }}
        >
          {timeLeft.minutes} Minutes
        </Typography>
        <Typography
          id="seconds"
          sx={{ fontSize: { xs: '.65rem', md: '1rem', textTransform: 'uppercase' } }}
        >
          {timeLeft.seconds} Seconds
        </Typography>
      </Box>
    </Box>
  );
};

export default Timer;
