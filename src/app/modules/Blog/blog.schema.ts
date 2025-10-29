import gql from 'graphql-tag';

export const blogTypeDefs = gql`
  type Blog {
    id: ID!
    title: String!
    content: String!
    author: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    blogs: [Blog]!
    blog(id: ID!): Blog
  }

  type Mutation {
    createBlog(input: CreateBlogInput!): Blog!
    updateBlog(id: ID!, input: UpdateBlogInput!): Blog!
    deleteBlog(id: ID!): Blog!
  }

  input CreateBlogInput {
    title: String!
    content: String!
    author: String!
  }

  input UpdateBlogInput {
    title: String
    content: String
    author: String
  }
`;
