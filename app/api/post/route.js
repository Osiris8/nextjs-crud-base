import Post from "../../models/post";
import { connectToDB } from "../../utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    //const posts = await Post.find().sort({ createdAt: -1 });
    const posts = await Post.find({}).populate("author");

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch posts", { status: 500 });
  }
};
