import React from 'react';
import { Container, Box, Typography } from '@mui/material';

function Home() {
  return (
    <Container>
      <Box mt={4} sx={{ minHeight: 'calc(100vh - 64px)' }}>
        <Typography variant="h4" gutterBottom>
          Welcome Fan Engagement
        </Typography>
        <Typography variant="body1">
          This is the homepage of our fan engagement platform. Here, users can share their thoughts, upload videos, and interact with other users.
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
