import { model, Schema } from "mongoose";
import { TNews } from "./news.interface";

const newsSchema = new Schema<TNews>({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true,
        versionKey: false,
    }
);

export const News = model("News", newsSchema);