export const  goToHomePage = (navigate) => {
    navigate('/')
}
export const  goToPokedexPage = (navigate) => {
    navigate('/Pokedex')
}
export const  goToDetails = (navigate, name) => {
    navigate(`/Details/${name}`)
}