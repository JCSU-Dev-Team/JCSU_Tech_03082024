import React from 'react';
import { Container, Box, Typography } from '@mui/material';

function Home() {
  return (
    <Container>
      <Box
        mt={4}
        sx={{
          minHeight: 'calc(100vh - 64px)',
          backgroundImage: `url(${process.env.PUBLIC_URL}/home.jpg)`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          padding: '2rem',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to Fan Engagement
        </Typography>
        <Typography variant="body1">
          This is the homepage of our fan engagement platform. Here, users can share their thoughts, upload videos, and interact with other users.
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
