import clientPromise from "@/db/mongodb"

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db("medical-backend")
  switch (req.method) {
    // case "POST":
    //   let bodyObject = JSON.parse(req.body);
    //   let newPost = await db.collection("posts").insertOne(bodyObject);
    //   res.json(newPost.ops[0]);
    //   break;
    case "GET":
      const posts = await db.collection("reservation").find({}).toArray();
      res.json({ status: 200, data: posts });
      break;
  }
}