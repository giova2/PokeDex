import {getPokemonListUrl, getPokemonUrl} from './poke_api_urls'

const grabKeyWithTruthyImgUrl = (sprites) => {
  const filteredKeys = Object.keys(sprites).filter((key) => key.startsWith('front_') && !!sprites[key])
  return filteredKeys.length > 0 ? filteredKeys[0] : null
}

export const fetchPokemonList = async (page) => {
  const result = await fetch(`${process.env.pokeApiUrl}${getPokemonListUrl(page)}`)
  const {count, previous, next, results} = await result.json()
  
  const responseResults = await Promise.all(results.map(async ({name, url}, index) => {
      const response = await fetch(url)
      const results = await response.json()
      const {sprites, id} = results
      const imgSpriteKey = grabKeyWithTruthyImgUrl(sprites)
      return {
        name,
        imgUrl: sprites[imgSpriteKey], // I grab the first img of front images that has a truthy value
        id
      }
    })
  )
  return {count, previous, next, results: responseResults}
}

export const fetchPokemonDetail = async (id) =>{
  const result = await fetch(`${process.env.pokeApiUrl}${getPokemonUrl(id)}`)
  return await result.json()
}