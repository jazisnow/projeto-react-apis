import { Button } from "@chakra-ui/react";
import React from "react";
import { HeaderStyled } from "./styled";
import logo from "../../imagens/logo.png";
import { useNavigate } from "react-router-dom";
import { goToPokedexPage } from "../../Routes/Coordinator";

export const Header = () => {
const navigate = useNavigate();
return (
    <HeaderStyled>
    <div className="logoPokemon">
        <img src={logo} />
    </div>
    <div>
        <Button onClick={() => goToPokedexPage(navigate)}>Pokedex</Button>
    </div>
    </HeaderStyled>
);
};
