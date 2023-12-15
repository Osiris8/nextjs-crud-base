import Post from "../../../models/post";
import { connectToDB } from "../../../utils/database";

export const POST = async (request) => {
  const { title, content, author } = await request.json();

  try {
    await connectToDB();
    const newPost = new Post({
      title: title,
      content: content,
      author: author,
    });

    await newPost.save();
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new post", { status: 500 });
  }
};
