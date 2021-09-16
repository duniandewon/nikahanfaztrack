import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  try {
    let doc = await req.db.collection("greet").find().toArray();

    res.json({
      status: res.statusCode,
      success: true,
      message: "successfully got all messages",
      data: doc,
    });
  } catch (err) {
    res.statusCode = 400;
    res.json({ status: res.statusCode, success: false, message: err.message });
  }
});

handler.post(async (req, res) => {
  try {
    const message = {
      ...req.body,
      date: new Date(),
    };
    await req.db.collection("greet").insertOne(message);

    res.json({
      status: res.statusCode,
      success: true,
      message: "successfully sent a message",
    });
  } catch (err) {
    res.statusCode = 400;
    res.json({ status: res.statusCode, success: false, message: err.message });
  }
});

export default handler;
