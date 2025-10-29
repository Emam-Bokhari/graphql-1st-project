import ApiError from "../../errors/ApiError";
import { TNews } from "./news.interface";
import { News } from "./news.model";


const createNewsToDB = async (input: TNews) => {
    const news = await News.create(input);
    if (!news) {
        throw new ApiError(400, "Failed to create news")
    };
    return news;
}

const getNewsFromDB = async () => {
    const news = await News.find();

    if (!news || news.length === 0) {
        throw new ApiError(404, "No news are found in the database")
    };

    return news;

}

const getNewsByIdFromDB = async (id: string) => {
    const news = await News.findById(id);
    if (!news) {
        throw new ApiError(404, `No news are found by this ${id}`);
    };

    return news;
}

const updateNewsByIdToDB = async (id: string, input: Partial<TNews>) => {
    const news = await News.findByIdAndUpdate(id, input, { new: true });
    if (!news) {
        throw new ApiError(400, "Failed to update news")
    };

    return news;
}

const deleteNewsByIdFromDB = async (id: string) => {
    const news = await News.findByIdAndDelete(id);
    if (!news) {
        throw new ApiError(400, `Failed to delete news by ${id}`)
    };

    return news;
}

export const NewsServices = {
    createNewsToDB,
    getNewsFromDB,
    getNewsByIdFromDB,
    updateNewsByIdToDB,
    deleteNewsByIdFromDB,
}