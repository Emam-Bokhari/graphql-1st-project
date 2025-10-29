import { BlogServices } from './blog.service';

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
    createBlog: async (_: any, { input }: { input: any }) => {
      const blog = await BlogServices.createBlogToDB(input);
      return blog;
    },
    updateBlog: async (_: any, { id, input }: { id: string; input: any }) => {
      return await BlogServices.updateBlogByIdToDB(id, input);
    },
    deleteBlog: async (_: any, { id }: { id: string }) => {
      return await BlogServices.deleteBlogByIdFromDB(id);
    },
  },
};
