import connectDB from "../../utils/connectDB";

const getMessages = () => async (req, res) => {
  try {
    const db = await connectDB();
    const collection = await db.collection("greet");
    const greetings = await collection.find({}).toArray();

    res.status(200).json({
      status: 200,
      success: true,
      message: "successfully got all messages",
      data: greetings,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      success: false,
      message: err.message,
    });
  }
};

const postNewMessage = () => async (req, res) => {
  const message = {
    ...req.body,
    date: new Date(),
  };

  try {
    const db = await connectDB();
    const collection = await db.collection("greet");

    await collection.insertOne(message);

    res.status(200).json({
      status: 200,
      success: true,
      message: "successfully sent a message",
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      success: false,
      message: err.message,
    });
  }
};

const handler = (req, res) => {
  if (req.method === "GET") getMessages()(req, res);
  if (req.method === "POST") postNewMessage()(req, res);
};

export default handler;
