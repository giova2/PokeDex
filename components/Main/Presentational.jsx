import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { DEFAULT_LIST_LIMIT } from '../../constants/api';
import {StyledBodyGrid, StyledPaginationGrid} from './styles'
import PokeListItem from './PokeListItem'


const Presentational = ({
  page, 
  count, 
  results, 
  handleChangePage, 
  handleAddPokemon
}) => {
  return (
    <Container maxWidth="xl">
      <StyledBodyGrid sx={{ flexGrow: 1 }} container justifyContent="left" alignItems="center" spacing={2}>
        {results.map(({name, imgUrl, id}) => {
          const props = {name, imgUrl, id}
          return (<PokeListItem key={`${name}${id}`} {...props}/>)
        })}
      </StyledBodyGrid>
      <StyledPaginationGrid sx={{ flexGrow: 1 }} container justifyContent="center" spacing={2}>
        <Grid item xs={8}>
          <Typography>Page: {page}</Typography>
          <Pagination count={Math.ceil(count / DEFAULT_LIST_LIMIT)} page={page} onChange={handleChangePage} />  
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={handleAddPokemon}>Add Pokemon</Button>
        </Grid>
      </StyledPaginationGrid>
    </Container>
  );
}

export { Presentational as default }
