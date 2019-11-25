import path from 'path';
import {fileLoader,mergeTypes,mergeResolvers} from 'merge-graphql-schemas';

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'), { recursive: true });
const resolversArray = fileLoader(path.join(__dirname, './**/*.resolvers.*'), { extensions: ['.js'] });
const typeDefs = mergeTypes(typesArray, { all: true });
const resolvers = mergeResolvers(resolversArray, { all: true });
module.exports={
    typeDefs,
    resolvers
};