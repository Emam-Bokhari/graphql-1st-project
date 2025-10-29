import _ from 'lodash';
import { NewsServices } from './news.service';

export const newsResolvers = {
  Query: {
    news: async () => {
      return await NewsServices.getNewsFromDB();
    },
    newsById: async (_: any, { id }: { id: string }) => {
      return await NewsServices.getNewsByIdFromDB(id);
    },
  },
  Mutation: {
    createNews: async (_: any, { input }: { input: any }) => {
      return await NewsServices.createNewsToDB(input);
    },
    updateNews: async (_: any, { id, input }: { id: string; input: any }) => {
      return await NewsServices.updateNewsByIdToDB(id, input);
    },
    deleteNews: async (_: any, { id }: { id: string }) => {
      return await NewsServices.deleteNewsByIdFromDB(id);
    },
  },
};
