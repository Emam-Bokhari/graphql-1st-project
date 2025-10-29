import { merge } from 'lodash';
import { blogResolvers } from '../modules/Blog/blog.resolver';
import { newsResolvers } from '../modules/News/news.resolver';

export const resolvers = merge(blogResolvers, newsResolvers);
