import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <Button
              component={Link}
              to="/"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Dashboard
            </Button>
            <Button
              component={Link}
              to="/add"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Add Book
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
