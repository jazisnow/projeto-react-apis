Readme - Pokédex
Esse projeto consiste em uma aplicação web que permite ao usuário visualizar uma lista de Pokémons e adicionar ou remover Pokémons da sua Pokedex pessoal. Ele foi desenvolvido em React, utilizando a biblioteca Chakra UI para a estilização dos componentes.

Home
Na página inicial, é possível visualizar todos os Pokémons disponíveis na API PokeAPI, com seus respectivos nomes, tipos e números. Além disso, é possível clicar no botão "Detalhes" para acessar a página de detalhes de cada Pokémon.

Detalhes
Na página de detalhes, o usuário pode visualizar informações mais detalhadas sobre o Pokémon, como sua imagem, altura, peso e habilidades. Além disso, é possível adicionar ou remover o Pokémon da Pokedex pessoal.

Pokedex
Na página da Pokedex, o usuário pode visualizar todos os Pokémons que adicionou à sua coleção pessoal. É possível remover cada Pokémon individualmente da lista.

Componentes
CardPokemon
Componente responsável pela exibição de cada Pokémon na página inicial. Ele recebe as informações do Pokémon como uma propriedade e as exibe em um card personalizado. O usuário pode clicar no botão "Detalhes" para acessar a página de detalhes do Pokémon.

Header
Componente responsável pela exibição do cabeçalho em todas as páginas da aplicação. Ele contém o logo da Pokédex e um botão que permite ao usuário acessar a página da Pokedex.

Button
Componente personalizado que utiliza a biblioteca Chakra UI para a estilização dos botões na aplicação.

PokedexContainer
Componente responsável pela exibição da lista de Pokémons na página da Pokedex.

DetailsContainer
Componente responsável pela exibição das informações detalhadas do Pokémon na página de detalhes.

API
O projeto utiliza a API PokeAPI para obter as informações dos Pokémons. Ele utiliza a biblioteca Axios para realizar as requisições HTTP à API.



