import {useState, useEffect} from 'react'
import { useQuery, dehydrate, QueryClient  } from "react-query";
import { useRouter } from "next/router";
import {fetchPokemonList} from '../../utils/poke_requests'
import Presentational from './Presentational'
import Error from '../Error'
import Loading from '../Loading'

export async function getServerSideProps(context) {
  let page = 1;
  if (context.query.page) {
    page = parseInt(context.query.page);
  }
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ["pokemons", page],
    async () => await fetchPokemonList(page),
  );
  return { props: { dehydratedState: dehydrate(queryClient) } };
}

const Main = () => {
  const router = useRouter();
  const [page, setPage] = useState(parseInt(router.query.page) || 1);
  const {data, error} = useQuery(
    ["pokemons", page],
    async () => await fetchPokemonList(page),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (router.query.page) {
      setPage(parseInt(router.query.page));
    }
  }, [router.query.page]);

  const handleAddPokemon = () =>{
    router.push(`/pokeAdd`, undefined, { shallow: true });
  }

  const handleChangePage = (e, value) => {
    setPage(value);
    router.push(`/?page=${value}`, undefined, { shallow: true });
  }
  
  if(error){
    return <Error error={error}/>
  }
  if(!data){
    return <Loading />
  }
  const {count, previous, next, results} = data
  const props = {count, previous, next, results, page, handleChangePage, handleAddPokemon}
  return(<Presentational {...props} />)
  
  
}

export { Main as default }