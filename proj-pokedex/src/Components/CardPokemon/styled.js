import styled from "styled-components";

export const PokemonCard = styled.div`
display: flex;
position: relative;
width: 440px;
height: 210px;
border-radius: 12px;
padding-left: 25px;
padding-block: 20px;

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

.type{
  display: flex;
  gap: 5px;
}

.nomePokemon{
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
`
export const ImgPokemons = styled.div`
position: absolute;
top: -55px;
right: 15px;
width: 193px;
height: 193px;
z-index: 999;
`
export const PokemonBola = styled.div`
position: absolute;
right: 0;
top: 0;
`
export const CatchButton = styled.button`
position: absolute;
right: 20px;
width: 146px;
height: 38px;
background: #ffffff;
border-radius: 8px;
border: none;
bottom: 15px;
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





