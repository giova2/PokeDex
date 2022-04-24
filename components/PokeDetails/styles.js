import { styled } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import CardContent from '@mui/material/CardContent';

export const StyledImageList = styled(ImageList)(({theme})=>({
  [theme.breakpoints.down('sm')]: {
    width: 200,
    height: 200,
  },
  [theme.breakpoints.up('sm')]: {
    width: 500, 
    height: 450 
  },
}));

export const StyledCardContent = styled(CardContent)(({theme})=>({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}))