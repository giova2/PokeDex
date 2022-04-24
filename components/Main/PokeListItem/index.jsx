import { useRouter } from "next/router";
import Presentational from './Presentational'

const PokeListItem = (props) => {
  const router = useRouter();
  const handleDetails = (id) => {
    router.push(`/pokeDetails/?id=${id}`, undefined, { shallow: true });
  }
  return(<Presentational handleDetails={handleDetails} {...props} />);
}

export { PokeListItem as default }