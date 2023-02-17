import axios from "axios";
import React, { useReducer, useState } from "react";
import { BASE_URL } from "../Constants/url";
import { GlobalContext } from "./GlobalContex";

const initialState ={
    pokemons:[]
}

const pokedexFunction = (state, action)=> {
if(action.type === "add"){
const indexPokemonExistente = state.pokemons.findIndex(pokemon=> pokemon.id === action.pokemon.id)
const pokemonExistente = state.pokemons[indexPokemonExistente ]
let updatePokemons 
updatePokemons = pokemonExistente? state.pokemons : state.pokemons.concat(action.pokemon)

return{
    pokemons: updatePokemons
    }
}else if (action.type === "remove"){
    const removePokemon = state.pokemons.filter(pokemon =>pokemon.id !== action.pokemon.id)
    return{
        pokemons: removePokemon
    }
}
return initialState 
}
export const GlobalState = (props) => {
const [pokemon, setpokemon] = useState([])
const [detalhes, setDetalhes] = useState([])
const [pokemonState, dispatch] = useReducer(pokedexFunction, initialState)
//função que busca os pokemons no nosso banco de dados 
const getPokemon = ()=>{
axios.get(`${BASE_URL}/pokemon`)
}

//objeto por onde vai passar tudo que for colocado no estado global que sera pelo value
const addPokemon = (pokemon)=>{
    dispatch({type: "add", pokemon:pokemon})
}
const removePokemon = (pokemon)=>{
    dispatch({type: "remove", pokemon:pokemon})
}
const context = {
    pokemon, 
    setpokemon,
    getPokemon,
    pokemons: pokemonState.pokemons,
    addPokemon: addPokemon,
    removePokemon ,
    detalhes,
    setDetalhes
}


    return (
    <GlobalContext.Provider value={context}>
        {props.children}
    </GlobalContext.Provider>
);
};
