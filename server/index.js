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
    evolutions: [String!]
  }

  type Query {
    AllPokemons(limit: Int): [Pokemon]
    PokemonByID(id: Int): Pokemon
  }
`;

const getAttributes = async (id) => {
  const general = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const species = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  const evChain = await axios.get(species.data.evolution_chain.url);

  const evolutions = [];

  const extractEvolutions = (chain) => {
    if (chain.species) {
      evolutions.push(chain.species.name);

      if (chain.evolves_to && chain.evolves_to.length > 0) {
        chain.evolves_to.forEach((ev) => {
          extractEvolutions(ev);
        });
      }
    }
  };

  extractEvolutions(evChain.data.chain);

  const filteredEvolutions = evolutions.slice(0, 3);

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
    evolutions: filteredEvolutions,
  };
};

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