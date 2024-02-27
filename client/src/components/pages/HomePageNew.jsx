import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions/pokemonActions";

const HomePageNew = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return <div>HomePageNew</div>;
};

export default HomePageNew;
