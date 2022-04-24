import Image from 'next/image'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { rgbDataURL } from '../../styles'
import { Item } from './styles'

const Presentational = ({name,
  imgUrl,
  id,
  handleDetails
}) => {
  return(
    <Grid item xs={6} sm={4} md={2} key={`${name}${imgUrl}`} >
      <Item>
        <Typography>{name}</Typography>
        <Image
          alt={name}
          src={imgUrl}
          placeholder="blur"
          blurDataURL={rgbDataURL(5, 60, 200)}
          width={100}
          height={100}
          objectFit="contain"
        />
        <Button size="small" onClick={() => handleDetails(id)}>Details</Button>
      </Item>
    </Grid>
  );
}

export { Presentational as default }
  
  