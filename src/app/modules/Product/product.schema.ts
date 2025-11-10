import gql from "graphql-tag";

export const productTypeDefs = gql`
type Product {
id: ID!
title: String!
description: String!
price: Number!
}

input CreateProductInput {
title: String!
description: String!
price: Number!
}

input UpdateProductInput {
title: String
description: String
price: Number
}

type Query {
products: [Product]!
product(id:ID!): Product
}

type Mutation {
createProduct(input:CreateInput): Product!
updateProduct(id: ID!,input:UpdateProductInput): Product!
deleteProduct(id: ID!): Product!
}



`