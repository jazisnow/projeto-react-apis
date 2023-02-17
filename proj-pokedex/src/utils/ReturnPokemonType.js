import bug from "../assets/pokemon-types/bug.png";
import fire from "../assets/pokemon-types/fire.png";
import flying from "../assets/pokemon-types/flying.png";
import grass from "../assets/pokemon-types/grass.png";
import normal from "../assets/pokemon-types/normal.png";
import poison from "../assets/pokemon-types/poison.png";
import water from "../assets/pokemon-types/water.png";

export const getTypes = type => {
  switch (type) {
    case 'grass':
      return <img src={grass} alt="" />
    case 'poison':
      return <img src={poison} alt="" />
    case 'fire':
      return <img src={fire} alt="" />
    case 'flying':
      return  <img src={flying} alt="" />
    case 'water':
      return <img src={water} alt="" />
    case 'bug':
      return <img src={bug} alt="" />
    case 'normal':
      return <img src={normal} alt="" />
    default:
      return ''
  }
}



  