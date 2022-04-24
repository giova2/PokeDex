import {useState, useEffect} from 'react'
import { useRouter } from "next/router";
import { useQuery, dehydrate, QueryClient  } from "react-query";
import Presentational from './Presentational'
import Error from '../Error'
import Loading from '../Loading'
import {fetchPokemonDetail} from '../../utils/poke_requests'

export async function getServerSideProps(context) {
  if (context.query.id) {
    page = parseInt(context.query.id);
  }
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ["pokemons", id],
    async () => await fetchPokemonDetail(id),
  );
  return { props: { dehydratedState: dehydrate(queryClient) } };
}

const PokeDetails = () => {
  const router = useRouter();
  const [id, setId] = useState(parseInt(router.query.id));
  useEffect(() => {
    if (router.query.id) {
      setId(parseInt(router.query.id));
    }
  }, [router.query.id]);

  const {data, error} = useQuery(
    ["pokemon", id],
    async () => await fetchPokemonDetail(id),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const handleCancel = () =>{
    router.push('/', undefined)
  }
  if(error){
    return <Error error={error}/>
  }
  if(!data){
    return <Loading />
  }
  const {name: pokemonName, abilities, species: {name: speciesName}, sprites} = data
  const props = {pokemonName, abilities, speciesName, sprites, handleCancel}
  
  return(<Presentational {...props} />);
}

export { PokeDetails as default }