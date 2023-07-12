import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" component="div" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              We are Weather company.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" component="div" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center" component="div">
            Copyright ©
            <Link color="inherit" href="https://www.devima.solutions//">
              Devima Solutions
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;
