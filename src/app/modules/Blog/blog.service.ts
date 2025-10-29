import ApiError from "../../errors/ApiError";
import { Blog } from "./blog.model"

const createBlogToDB = async () => {
    const blogs = await Blog.find();
    if (!blogs || blogs.length === 0) {
        throw new ApiError(404, "No blogs are found in the database")
    };
    return blogs;
}



export const BlogServices = {
    createBlogToDB,
}