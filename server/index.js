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
    }

    type Query {
        AllPokemons(limit: Int): [Pokemon]
        PokemonByID(id: Int): Pokemon
    }
    `;

    const getAttributes = async (id) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return {
            id: response.data.id,
            order: response.data.order,
            name: response.data.name,
            sprite: response.data.sprites.other["official-artwork"].front_default,
            types: response.data.types.map((attr) => attr.type.name),
        };
    };

    const resolvers = {
    Query: {
        AllPokemons: async (_, { limit }) => {
        try {   
            const pokemons = await Promise.all(
                Array.from({length: limit || 151}).map(async (pokemon, index) => ({
                    attr: await getAttributes(index + 1),
                }))
            );

            return pokemons;

        } catch (error) {
            throw new Error(error);
        }
        },
        PokemonByID: async (_, {id}) => {
            try{
                return{
                    attr: await getAttributes(id)
                }
            }catch (error){
                throw new Error(error);
            }
        }
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