import React, { useContext } from 'react'
import { DetailsButton, ImgPokemons, PokedexContainer, PokedexStyled, PokemonStyled } from './styled'
import logo from '../../imagens/logo.png'
import { GlobalContext } from '../../Contexs/GlobalContex'
import { getTypes } from '../../utils/ReturnPokemonType'
import { Button } from "@chakra-ui/react";
import { getColors } from "../../utils/ReturnCardColor";
import { goToDetails } from '../../Routes/Coordinator'
import { useNavigate } from "react-router-dom";
import logoPokebola from "../../assets/logoPokebola.png";

export const PokedexPage = () => {
const {pokemons, removePokemon}= useContext(GlobalContext)
const {setDetalhes} = useContext(GlobalContext)
const navigate = useNavigate();
  
return (
<div>
  <PokedexStyled>
    <div className='logopokedex'>
    <img src={logo}/>
    <h1>Todos Pokemons</h1>
    </div>
  </PokedexStyled>
  
  <PokedexContainer >
    <div className='meusPokemons'>Meus Pokemons</div>
    {pokemons.map((pokemon)=>{
    return(
    <PokemonStyled
    style={{
      backgroundColor: `${getColors(
        pokemon.types !== undefined && pokemon.types[0].type.name
      )}`,
    }}
    >
      <div className='namePokemon'>{pokemon.name}</div>
      <div className='id'>#{pokemon.id}</div>
      <Button onClick={()=> removePokemon(pokemon) }>Excluir</Button>
      <ImgPokemons>


      <img src={pokemon.sprites?.other?.["official-artwork"]?.["front_default"]} alt={pokemon.name}/>
      </ImgPokemons>
      <img src={logoPokebola} alt="Logo Pokebola" />

      <span>
            {getTypes(
              pokemon.types !== undefined && pokemon.types[0].type.name
            )}
          </span>
          <span>
            {getTypes(
              pokemon.types !== undefined && pokemon.types[1]?.type.name
            )}
          </span>
          <div onClick={()=>setDetalhes(pokemon)}>
        <DetailsButton onClick={() => goToDetails(navigate, pokemon.name)}>
          Detalhes
        </DetailsButton>
        </div>
    </PokemonStyled>
        ) 
      })}
    </PokedexContainer>
    </div>
  )
}
