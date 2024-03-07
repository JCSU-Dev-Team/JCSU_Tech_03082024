import React from 'react';
import { Container, Box, Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

function Social() {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Social Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea component={Link} to="/for-you">
                <CardMedia
                  component="img"
                  height="140"
                  image={`${process.env.PUBLIC_URL}/for-you-image.jpg`} 
                  alt="For You Page"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    For You Page
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea component={Link} to="/upload">
                <CardMedia
                  component="img"
                  height="140"
                  image={`${process.env.PUBLIC_URL}/upload-image.jpg`}
                  alt="Upload Content"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Upload Content
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea component={Link} to="/view">
                <CardMedia
                  component="img"
                  height="140"
                  image={`${process.env.PUBLIC_URL}/view-image.jpg`} 
                  alt="View Content"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    View Content
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Social;
