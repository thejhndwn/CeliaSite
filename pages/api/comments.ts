import { NextApiRequest, NextApiResponse } from "next";
import { sampleUserData } from "../../utils/sample-data";
import { addMessage } from "../../lib/forums";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    console.log("we made itttt")
    console.log(req)


  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error("Cannot find user data");
    }
    console.log("we made it")

    addMessage(req.body.forumId, req.body.name, req.body.message);
    console.log("we made it 2")

    res.status(200);
  } catch (err: any) {
    console.log("I don't understand")
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;