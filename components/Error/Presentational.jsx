import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Presentational = ({error}) => {
  // #cfe8fc
  return(
    <Container fixed>
      <Box sx={{ bgcolor: '#3333cc', height: '100vh' }} >
        {error}
      </Box>
    </Container>
  );
}

export { Presentational as default }