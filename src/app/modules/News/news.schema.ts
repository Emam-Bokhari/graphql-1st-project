import gql from "graphql-tag";

export const newsTypeDefs = gql`

type News {
id: ID!
title: String!
content: String!
category: String!
authorName: String!
}

type Query {
news: [News]!
newsById(id: ID!): News
}

input CreateNewsInput {
title: String!
content: String!
category: String!
authorName: String!
}

input UpdateNewsInput {
title: String
content: String
category: String
authorName: String
}

type Mutation {
createNews: (input:CreateNewsInput): News!
updateNews: (id: ID!,input:UpdateNewsInput): News!
deleteNews: (id: ID!): News!
}

`