import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";
import logo from "../../imagens/logo.png";
import { DetailsContainer, DetailsStyled } from "./styled";
import { GlobalContext } from "../../Contexs/GlobalContex";
import { getTypes } from "../../utils/ReturnPokemonType";


export const DetailsPage = () => {
  const {pokemons, removePokemon}= useContext(GlobalContext)
  const { detalhes } = useContext(GlobalContext);
  console.log(detalhes);

  return (
    <div>
      <DetailsStyled>
        <img src={logo} />
        <Button  onClick={()=> removePokemon(pokemons) }>Excluir da Pokedex</Button>
      </DetailsStyled>

      <DetailsContainer>
        <h1 className="h1">Detalhes</h1>
        <div className="details">
          <div>
            <div>
              <img
                src={
                  detalhes.sprites !== undefined &&
                  detalhes.sprites["front_default"]
                }
              />
            </div>
            <div>
              <img
                src={
                  detalhes.sprites !== undefined &&
                  detalhes.sprites["back_default"]
                }
              />
            </div>
          </div>

          <div>
            <ul>
              <h1>{detalhes.stats && "Base stats"}</h1>
              {detalhes.stats !== undefined &&
                detalhes.stats.map((stats) => {
                  return (
                    <li>
                      {stats.stat.name}
                      {stats.base_stat}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div>
            <div>
              #{detalhes.id}
              {detalhes.name}
              <span>
                {getTypes(
                  detalhes.types !== undefined && detalhes.types[0].type.name
                )}
              </span>
              <span>
                {getTypes(
                  detalhes.types !== undefined && detalhes.types[1]?.type.name
                )}
              </span>
            </div>
            <div className="moves">
              <div>
                <span>
                  {detalhes.moves !== undefined && detalhes.moves[0].move.name}
                </span>
                <span>
                  {detalhes.moves !== undefined && detalhes.moves[1].move.name}
                </span>
                <span>
                  {detalhes.moves !== undefined && detalhes.moves[2].move.name}
                </span>
                <span>
                  {detalhes.moves !== undefined && detalhes.moves[3].move.name}
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
            src={
              detalhes.sprites?.other?.["official-artwork"]?.[
                "front_default"
              ]
            }
            alt={detalhes.name} 
          />
      </DetailsContainer>
    </div>
  );
};
