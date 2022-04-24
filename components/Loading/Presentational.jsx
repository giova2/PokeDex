import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import {StyledBox} from './styles'

const Presentational = ({message = 'Loading'}) => {
  return(
    <Container fixed>
      <StyledBox sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
        <Typography align="center" variant="h4" gutterBottom component="div">
          {message}
        </Typography>
      </StyledBox>
    </Container>
  );
}

export { Presentational as default }