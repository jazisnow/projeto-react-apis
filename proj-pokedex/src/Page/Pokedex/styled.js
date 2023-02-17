import styled from "styled-components";

export const PokedexStyled = styled.div`
display: flex;
flex-direction: column;
width: 100%;
background-color: #FFFFFF;
height: 18vh;

img{
display: flex;  
margin-top: 21px;
width: 18vw;
margin-left: 750px;
}
`
export const DetailsButton = styled.button`
position: absolute;
bottom: 20px;
width: 74px;
height: 24px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-decoration-line: underline;
color: #FFFFFF;
z-index: 2;
`
export const PokedexContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
flex-wrap: wrap;
height: 100vh;
gap: 50px;
background-color: #5E5E5E;

.meusPokemons{
display: flex;
margin-left: 40px;
margin-top: 50px;
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: #FFFFFF;
}
`
export  const PokemonStyled = styled.div`
display: flex;
margin: 50px;
width: 500px;

.id{
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
width: 30px;
height: 19px;
}

.namePokemon{
height: 39px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: #FFFFFF;
transform: translateY(-7px);
::first-letter {
text-transform: uppercase;
}
}

Button {
display: flex;
justify-content: end;
align-items: center;
left: 550px;
width: 480px;
background-color: #FF6262;
}
`
export const ImgPokemons = styled.div`
top: -55px;
right: 15px;
width: 193px;
height: 193px;
z-index: 999;
`
