import { gqlResponse } from "../../shared/graphqlResponse";
import { TBlog } from "./blog.interface";
import { BlogServices } from "./blog.service"

export const blogResolvers = {
    Query: {
        blogs: async () => {
            const blogs = await BlogServices.getBlogsFromDB();
            return blogs;
        },
        blog: async (_: any, { id }: { id: string }) => {
            return await BlogServices.getBlogByIdFromDB(id); 
        },
    },
    Mutation: {
        createBlog: async (_: any, {input}: { input: any }) => {
            const blog = await BlogServices.createBlogToDB(input);
            return blog;
        }
    }
}