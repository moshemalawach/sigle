import constants from 'radiks-server/lib/lib/constants';

export const config = {
  mongoDBUrl:
    process.env.MONGODB_URL || 'mongodb://localhost:27017/sigle-server',
  radiksCollectionName: constants.COLLECTION as string,
  gumletUrl: process.env.GUMLET_URL,
};
