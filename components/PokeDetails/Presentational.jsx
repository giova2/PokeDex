import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {StyledImageList, StyledCardContent} from './styles'
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image'
import Button from '@mui/material/Button';
import {rgbDataURL} from '../styles'

const Presentational = ({pokemonName, abilities, speciesName, sprites, handleCancel}) => {
  
  return(      
  <Container maxWidth="sm">
    <Button onClick={handleCancel} >Go To PokeList</Button>
    <Card variant="outlined">
      <StyledCardContent>
        <Typography align="center" variant="h4" gutterBottom component="div">
          {pokemonName}
        </Typography>
        <StyledImageList cols={3}>
          {Object.keys(sprites).map((key) => {
            if(!sprites[key] || typeof sprites[key] !== 'string'){
              return null
            }
            return (
              <ImageListItem key={key}>
                <Image
                  alt={key}
                  src={sprites[key]}
                  placeholder="blur"
                  blurDataURL={rgbDataURL(5, 60, 200)}
                  width={100}
                  height={100}
                  objectFit="contain"
                />
              </ImageListItem>)
          })
          }
        </StyledImageList>
        <Typography align="center" variant="h6" gutterBottom component="div">
          Species: {speciesName}
        </Typography>
        <Typography align="center" variant="h6" gutterBottom component="div">
          Abilities:
        </Typography>
        <List dense>
          {abilities.map(({ability:{ name }, is_hidden: isHidden}) => (
            <ListItem key={name}>
              <ListItemText
                primary={name}
                secondary={isHidden ? 'Hidden' : 'Available'}
              />
            </ListItem>
          ))}
        </List>
      </StyledCardContent>
    </Card>
    
  </Container>);
}

export { Presentational as default }