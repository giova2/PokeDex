import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';

export const StyledBodyGrid = styled(Grid)(()=>({
  height: '90vh',
  overflow: 'auto'
}))

export const StyledPaginationGrid = styled(Grid)(()=>({
  display: 'flex',
  height: '10vh'
}))

