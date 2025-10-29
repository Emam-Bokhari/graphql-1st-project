import ApiError from "../../errors/ApiError";
import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model"

const createBlogToDB = async (payload: TBlog) => {
    const blog = await Blog.create(payload);
    if (!blog) {
        throw new ApiError(400, "Failed to create blog")
    };
    return blog;
}

const getBlogsFromDB = async () => {
    const blogs = await Blog.find();

    if (!blogs || blogs.length === 0) {
        throw new ApiError(404, "No blogs are found in the database")
    };

    return blogs;

}

const getBlogByIdFromDB = async (id: string) => {
    const blog = await Blog.findById(id);
    if (!blog) {
        throw new ApiError(404, `No blog are found by this ${id}`);
    };

    return blog;
}

const updateBlogByIdToDB = async (id: string, payload: Partial<TBlog>) => {
    const blog = await Blog.findByIdAndUpdate(id, payload, { new: true });
    if (!blog) {
        throw new ApiError(400, "Failed to update blog")
    };

    return blog;
}

export const BlogServices = {
    createBlogToDB,
    getBlogsFromDB,
    getBlogByIdFromDB,
    updateBlogByIdToDB,
}