import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

// const uri =
// "mongodb+srv://ndewon:nikahanfaztrack@development.ycqd3.mongodb.net/development?retryWrites=true&w=majority";

const uri = process.env.NEXT_PUBLIC_DB_URI;

const dbName = "development";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function database(req, res, next) {
  let cachedDbClient = null;
  let cachedDb = null;

  if (!cachedDb && !cachedDbClient) {
    const client = new MongoClient(uri, options);
    await client.connect();

    cachedDbClient = client;
    cachedDb = client.db(dbName);

    req.dbClient = cachedDbClient;
    req.db = cachedDb;

    return next();
  }

  req.dbClient = cachedDbClient;
  req.db = cachedDb;

  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
