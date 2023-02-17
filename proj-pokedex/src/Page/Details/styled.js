import styled from "styled-components";

export const DetailsStyled = styled.div`
display: flex;
align-items: center;
padding: 50px;
width: 100%;
height: 18vh;
background-color: #FFFFFF;

img{
display: flex;  
margin-top: -5px;
width: 18vw;
margin-left: 700px;       
}

Button{
display: flex;
justify-content: end;
align-items: center;
left: 550px;
width: 180px;
background-color: #FF6262;
}
`
export const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
background-color:#5E5E5E;
height: 82vh;

.details{
display: flex;
margin-left: 40px;
margin-top: 50px;
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: #FFFFFF;
.moves > div{
    display: flex;
    flex-direction: column;
}

}


.h1{
display: flex;
align-items: center;
margin-left: 40px;
height: 18vh;
width: 100%;
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: #FFFFFF;
}
`
export const BaseContainer = styled.div`
  width: 350px;
  height: 100%;
  margin-left: 34px;
  margin-right: 68px;
  background-color: #ffffff;
  border-radius: 8px;`
;
export const TituloStats = styled.h1`
  color: black;
  width: 100%;
  font-size: 36px;
  font-weight: 700;

 
  
  `
;
