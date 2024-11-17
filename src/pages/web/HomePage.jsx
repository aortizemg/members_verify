import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Container } from '@mui/material';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Button onClick={() => navigate('/login')}>Login</Button>
    </Container>
  );
};

export default HomePage;
