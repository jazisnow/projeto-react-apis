  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { CardPokemon } from "../../Components/CardPokemon/CardPokemon";
  import { Header } from "../../Components/Header/Header";
  import { Container, Home, HomeContainer } from "./styled";

  export const HomePage = () => {
  const [pokemons, setPokemons] = useState([])
  const getPokemons = axios.create({
  baseURL:"https://pokeapi.co/api/v2/pokemon"
  })

  const pokedexReque = async()=>{
  const response = await getPokemons.get()
  const data = await response.data.results
  setPokemons(data)
  }
      useEffect(()=>{
        pokedexReque()
      },[])
    
    return (
      <Home>
        <Header />
        <HomeContainer>
        <Container>
          <p>Todos Pokemons</p>
        </Container>
          {pokemons.map((pokemon)=>{
            return <CardPokemon pokemon={pokemon}/>
          })}
        </HomeContainer>
      </Home>
    );
  };


