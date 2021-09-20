import { MongoClient } from "mongodb";

let cachedDb = null;

const uri = process.env.NEXT_PUBLIC_DB_URI;
const dbName = process.env.NEXT_PUBLIC_DB_NAME;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDb = async () => {
  if (cachedDb) {
    return Promise.resolve(cachedDb);
  }

  try {
    const client = await MongoClient.connect(uri, options);

    const db = client.db(dbName);

    console.log("New database connection");
    cachedDb = db;

    return cachedDb;
  } catch (err) {
    console.log("Mongo connection error: ", err);
    return err;
  }
};

export default connectDb;
