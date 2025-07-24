import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { typeDefs, resolvers } from "./routes/car-routes.js";
import createCarsTable from "./data/create-cars-table.js";
import { startStandaloneServer } from "@apollo/server/standalone";

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });

await startStandaloneServer(server, {
  listen: { port: port },
});

createCarsTable();
