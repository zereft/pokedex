import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import axios from 'axios';

const typeDefs = `
  type Pokemon {
    attr: PokemonAttributes
  }

  type PokemonAttributes {
    id: Int
    order: Int
    name: String
    sprite: String
    types: [String]
    color: String
    description: String
    mythical: Boolean
    legendary: Boolean
    evolutionChain: String
  }

  type ChainEvolution {
    evolutions: [String]
  }

  type Query {
    AllPokemons(limit: Int): [Pokemon]
    PokemonByID(id: Int): Pokemon
    GetChainEvolution(url: String): ChainEvolution
  }
`;

const getAttributes = async (id) => {
  const general = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const species = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

  return {
    id: general.data.id,
    order: general.data.order,
    name: general.data.name,
    sprite: general.data.sprites.other["official-artwork"].front_default,
    types: general.data.types.map((attr) => attr.type.name),
    color: species.data.color.name,
    description: species.data.flavor_text_entries[7].flavor_text,
    mythical: species.data.is_mythical,
    legendary: species.data.is_legendary,
    evolutionChain: species.data.evolution_chain.url,
  };
};

const extractSpeciesNames = (evolution, evolutions) => {
  if (evolution.species) {
    evolutions.push(evolution.species.name);

    if (evolution.evolves_to && evolution.evolves_to.length > 0) {
      evolution.evolves_to.forEach((ev) => {
        extractSpeciesNames(ev, evolutions);
      });
    }
  }
};

const getEvolutionsByChain = async (url) => {
  const chain = await axios.get(url);
  const evolutions = [];

  extractSpeciesNames(chain.data.chain, evolutions);

  return {
    evolutions: evolutions
  };
}


const resolvers = {
  Query: {
    AllPokemons: async (_, { limit }) => {
      try {
        const pokemons = await Promise.all(
          Array.from({ length: limit || 151 }).map(async (_, index) => ({
            attr: await getAttributes(index + 1),
          }))
        );

        return pokemons;
      } catch (error) {
        throw new Error(error);
      }
    },
    PokemonByID: async (_, { id }) => {
      try {
        return {
          attr: await getAttributes(id),
        };
      } catch (error) {
        throw new Error(error);
      }
    },
    GetChainEvolution: async (_, { url }) => {
      try {
        return await getEvolutionsByChain(url);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);