# Profite E-commerce

Este projeto foi desenvolvido com o intuito de resolver o desafio proposto pela Profite

## Desenvolvimento

- ES7 (Spread operator e Async function, features da versão mais recente do JavaScript)
- React
- Sass
- Webpack
- [Create React App](https://github.com/facebookincubator/create-react-app)
- Git

## Estrutura do projeto

A estrutura do projeto organizada da seguinte forma: São criadas as pastas assets (para imagens, icones, etc..), components (para os componentes), HOC (para os Higher Order Components), services (para serviços externos, como a API). Cada componente tem sua pasta contendo um index.js (o componente propriamente dito) e seu estilo (.css/.scss). Componentes que são exclusivamente filhos de outro componente estão na pasta deste. O arquivo index.css é usado para estilo global, neste caso, como um normalize.

## Observação

A versão de desenvolvimento deste projeto pode apresentar problemas no Windows, pois o SO não lida bem com o arquivo nomedo Aux.js (Não sei dizer se já foi corrigido). Porém **o projeto não apresenta este problema em produção**.
