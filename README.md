<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[contributors-shield]: https://img.shields.io/github/contributors/zereft/pokedex.svg
[contributors-url]: https://github.com/zereft/pokedex/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/zereft/pokedex.svg
[forks-url]: https://github.com/zereft/pokedex/network/members
[stars-shield]: https://img.shields.io/github/stars/zereft/pokedex.svg
[stars-url]: https://github.com/zereft/pokedex/stargazers
[issues-shield]: https://img.shields.io/github/issues/zereft/pokedex.svg
[issues-url]: https://github.com/zereft/pokedex/issues
[license-shield]: https://img.shields.io/badge/license-Open%20Source-blue.svg
[license-url]: https://opensource.org/licenses
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-blue.svg
[linkedin-url]: https://www.linkedin.com/in/tu-usuario/

[react-shield]: https://img.shields.io/badge/-React%20JS-61DAFB.svg
[react-url]: https://reactjs.org/
[redux-toolkit-shield]: https://img.shields.io/badge/-Redux%20Toolkit-764ABC.svg
[redux-toolkit-url]: https://redux-toolkit.js.org/
[graphql-shield]: https://img.shields.io/badge/-GraphQL-E10098.svg
[graphql-url]: https://graphql.org/

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![React JS][react-shield]][react-url]
[![Redux Toolkit][redux-toolkit-shield]][redux-toolkit-url]
[![GraphQL][graphql-shield]][graphql-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

# Pokédex

## Aplicación de React JS con GraphQL usando la API de <a href="https://pokeapi.co/">PokeAPI</a>

Aplicación que utiliza React JS y GraphQL para interactuar con la API de PokeAPI, Esta aplicación te permitirá explorar y obtener información detallada sobre los Pokémon utilizando una interfaz de usuario amigable.

## Descripción

Esta aplicación está construida utilizando React JS y GraphQL para acceder a los datos proporcionados por la API de PokeAPI. La API de PokeAPI ofrece información completa sobre los Pokémon, incluyendo detalles de especies, habilidades, movimientos, tipos y más. Al utilizar GraphQL, podemos obtener de manera eficiente solo los datos específicos que necesitamos, lo que resulta en una experiencia de usuario más rápida y receptiva.

## Funcionalidades

- **Exploración de Pokémon:** Navega a través de la lista de Pokémon disponibles y visualiza su información básica.

- **Detalles de Pokémon:** Obtiene detalles más profundos de un Pokémon específico, incluyendo sus habilidades, movimientos y otros atributos.

- **Búsqueda Avanzada:** Utiliza consultas GraphQL para buscar Pokémon basados en criterios específicos, como tipo, habilidades, estadísticas, etc.

## Instrucciones para el Uso

### React JS

- La aplicación está construida con React JS. Para ejecutarla en tu entorno local, sigue estos pasos:

  1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.

  2. Clona este repositorio en tu máquina local:
     ```
     git clone https://github.com/zereft/pokedex.git
     ```

  3. Navega al directorio del proyecto:
     ```
     cd pokedex
     ```

  4. Instala las dependencias de Node.js:
     ```
     npm install
     ```

  5. Inicia la aplicación React:
     ```
     npm start
     ```

  6. Abre tu navegador web y visita `http://localhost:3000` para ver la aplicación en funcionamiento.

### Redux Toolkit

- Redux Toolkit se utiliza para gestionar el estado de la aplicación. Los slices y la configuración de Redux Toolkit ya están implementados en el proyecto.

### GraphQL con Apollo Client

- Apollo Client se utiliza para trabajar con GraphQL. La configuración del cliente Apollo y las consultas/mutaciones GraphQL ya están integradas en el proyecto.

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).