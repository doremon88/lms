/* eslint-disable no-undef */
import { GraphQLClient } from "graphql-request";

const HASURA_GRAPHQL = {
  endpoint: process.env.HASURA_GRAPHQL_ENDPOINT || "http://localhost:8080/v1/graphql",
  adminSecret: process.env.HASURA_GRAPHQL_ADMIN_SECRET || "b8dev1234"
}

export const client = new GraphQLClient(HASURA_GRAPHQL.endpoint, {
  headers: { "x-hasura-admin-secret": HASURA_GRAPHQL.adminSecret },
});
