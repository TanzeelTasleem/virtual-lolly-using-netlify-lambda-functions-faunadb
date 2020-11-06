const { ApolloServer, gql } = require("apollo-server-lambda")

const faunadb = require("faunadb")
const q = faunadb.query
const shortid = require('shortid');
require("dotenv").config()

const typeDefs = gql`
  type Query {
    getLollies: [lolly]
  }
  type lolly {
    senderName: String!
    recipient: String!
    msg: String!
    lollyTop: String!
    lollyMid: String!
    lollyBotm: String!
    lollyPath : String!
  }
  type Mutation {
    createLolly(
      senderName: String!
      recipient: String!
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
      const client = new faunadb.Client({
        secret: process.env.FAUNA_SECRET,
      })
      try {
        const result = await client.query(
          q.Map(
            q.Paginate(q.Documents(q.Collection("lollies"))),
            q.Lambda(x => q.Get(x))
          )
        )
        return result.data.map(item => {
          return {
            senderName : item.data.senderName,
            recipient: item.data.recipient,
            msg: item.data.msg,
            lollyTop: item.data.lollyTop,
            lollyMid: item.data.lollyMid,
            lollyBotm: item.data.lollyBotm,
            lollyPath : item.data.lollyPath 
          }
        })
      } catch (error) {
        return error.message
      }
    },
  },
  Mutation: {
    createLolly: async (_, args) => {
        const client = new faunadb.Client({
          secret: process.env.FAUNA_SECRET,
        })
        args.lollyPath = shortid.generate();
        try {
          const result = await client.query(
            q.Create(q.Collection("lollies"),{
              data : args
            })
          )
          const response = await axios.post('https://api.netlify.com/build_hooks/5fa44d2cb92311009001d836')
          console.log(await response)
         
          return {
            senderName : result.data.senderName,
            recipient: result.data.recipient,
            msg: result.data.msg,
            lollyTop: result.data.lollyTop,
            lollyMid: result.data.lollyMid,
            lollyBotm: result.data.lollyBotm,
            lollyPath : result.data.lollyPath 
        }
        } catch (error) {
          return error.message
        }
      }
    },
  }
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
})

exports.handler = server.createHandler()

// https://api.netlify.com/build_hooks/5fa44d2cb92311009001d836