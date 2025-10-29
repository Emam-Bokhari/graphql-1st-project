import { model, Schema } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      required: true,
      min: 6,
    },
    content: {
      type: String,
      required: true,
      min: 100,
    },
    author: {
      type: String,
      required: true,
      min: 6,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Blog = model('Blog', blogSchema);
