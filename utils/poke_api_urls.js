import {DEFAULT_LIST_LIMIT} from '../constants/api'

export const getPokemonListUrl = (page) => {
  const offset = (page-1) * DEFAULT_LIST_LIMIT
  return `pokemon?limit=${DEFAULT_LIST_LIMIT}&offset=${offset}`
}

export const getPokemonUrl = (id) => `pokemon/${id}`