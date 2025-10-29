import { merge } from "lodash";
import { blogResolvers } from "../modules/Blog/blog.resolver";

export const resolvers = merge(
    blogResolvers
)