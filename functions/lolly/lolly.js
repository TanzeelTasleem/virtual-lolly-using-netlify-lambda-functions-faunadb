const { ApolloServer, gql } = require("apollo-server-lambda")

const faunadb = require("faunadb")
const q = faunadb.query

require("dotenv").config()

const typeDefs = gql`
  type Query {
    getLollies: [lolly]
  }
  type lolly {
    senderName: String!
    reciptentName: String!
    msg: String!
    lollyTop: String!
    lollyMid: String!
    lollyBotm: String!
  }
  type Mutation {
    createLolly(
      senderName: String!
      reciptentName: String!
      msg: String!
      lollyTop: String!
      lollyMid: String!
      lollyBotm: String!
    ): lolly
  }
`
const resolvers = {
  Query: {
    getLollies: async () => {
      return [
        {
          senderName: "bhfdshbfdsbj",
          reciptentName: "bhfdshbfdsbj",
          msg: "bhfdshbfdsbj",
          lollyTop: "bhfdshbfdsbj",
          lollyMid: "bhfdshbfdsbj",
          lollyBotm: "bhfdshbfdsbj",
        },
      ]
    },
  },
  Mutation: {
    createLolly: async (_, args) => {
      return {
        senderName: args.senderName,
        reciptentName: args.reciptentName,
        msg: args.msg,
        lollyTop: args.lollyTop,
        lollyMid: args.lollyMid,
        lollyBotm: args.lollyBotm,
      }
    },
  },
}
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
})

exports.handler = server.createHandler()
