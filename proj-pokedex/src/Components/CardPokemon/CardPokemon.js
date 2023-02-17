import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { goToDetails } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import {
  CatchButton,
  PokemonCard,
  DetailsButton,
  PokemonBola,
  ImgPokemons,
} from "./styled";
import logoPokebola from "../../assets/logoPokebola.png";
import { getTypes } from "../../utils/ReturnPokemonType";
import { getColors } from "../../utils/ReturnCardColor";
import { GlobalContext } from "../../Contexs/GlobalContex";

export const CardPokemon = ({ pokemon }) => {
  const {addPokemon, pokemons, setDetalhes} = useContext(GlobalContext)
console.log(pokemons);

  const navigate = useNavigate();
  const [pokedexCard, setPokedexCard] = useState(null); //alterado para null, pois é o valor inicial apropriado

  const requestApi = axios.create({ baseURL: `${pokemon.url}` });

  const requestCard = async () => {
    const response = await requestApi.get();
    const data = await response.data;
    setPokedexCard(data);
  };

  useEffect(() => {
    requestCard();
  }, []); //removido a dependência, pois não há nenhuma mudança que exige um novo requestCard()

  //verificação para evitar erros caso pokedexCard ainda não tenha sido definido
  if (!pokedexCard) {
    return null;
  }

  return (
    <PokemonCard
      style={{
        backgroundColor: `${getColors(
          pokedexCard.types !== undefined && pokedexCard.types[0].type.name
        )}`,
      }}
    >
      <div>
        <div className="id">#{pokedexCard.id}</div>
        <div className="nomePokemon">{pokedexCard.name}</div>
        <div className="type">
          <span>
            {getTypes(
              pokedexCard.types !== undefined && pokedexCard.types[0].type.name
            )}
          </span>
          <span>
            {getTypes(
              pokedexCard.types !== undefined && pokedexCard.types[1]?.type.name
            )}
          </span>
        </div>
        <div onClick={()=>setDetalhes(pokedexCard)}>
        <DetailsButton onClick={() => goToDetails(navigate, pokedexCard.name)}>
          Detalhes
        </DetailsButton>
        </div>
      </div>
      <div>
        <ImgPokemons>
          <img
            src={
              pokedexCard.sprites?.other?.["official-artwork"]?.[
                "front_default"
              ]
            }
            alt={pokedexCard.name} 
          />
        </ImgPokemons>
        <PokemonBola>
          <img src={logoPokebola} alt="Logo Pokebola" />
        </PokemonBola>
      </div>
      <CatchButton onClick={()=> addPokemon(pokedexCard)}>Capturar!</CatchButton>
    </PokemonCard>
  );
};
