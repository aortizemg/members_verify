import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import logo from '../../../assets/logo.png';

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" sx={{ background: '#fff', boxShadow: 'none', padding: '.7rem 0rem' }}>
      <Container>
        <Toolbar
          disableGutters
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Box sx={{ width: { xs: '50px', md: '60px' } }}>
            <img src={logo} alt="" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Button
              variant="outlined"
              sx={{
                border: '1px solid #18909C',
                color: '#18909C',
                ':hover': { background: '#18909C', border: '1px solid #18909C', color: '#fff' },
              }}
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
            <Button
              variant=""
              sx={{
                background: '#18909C',
                color: '#fff',
                ':hover': { background: '#0d596173' },
              }}
              onClick={() => navigate('/login')}
            >
              Get Started
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
