const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql')

const superHeroes = [
  {id: 0, name: 'SuperMan', strength: 13, intelligence: 23, speed: 8},
  {id: 1, name: 'BatMan', strength: 11, intelligence: 18, speed: 6},
  {id: 2, name: 'Hulk', strength: 18, intelligence: 12, speed: 3},
  {id: 3, name: 'Mickey', strength: 7, intelligence: 34, speed: 7},
] 

const SuperHeroType = new GraphQLObjectType({
  name: 'SuperHero',
  fields: () => ({
    id: {type: GraphQLInt},
    name: { type: GraphQLString },
    strength: { type: GraphQLInt },
    intelligence: { type: GraphQLInt },
    speed: { type: GraphQLInt }
  })

})

const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    superHero: {
      type: SuperHeroType,
      args: {
        id: {type: GraphQLInt}
      },
      resolve(parentValue, args) {
        for (var i = 0; i < superHeroes.length; i++) {
          if(superHeroes[i].id === args.id) {
            return superHeroes[i]
          }
        }
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: rootQuery
})