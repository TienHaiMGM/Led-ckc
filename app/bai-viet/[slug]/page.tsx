import fs from "fs";
import path from "path";

type BlogPost = {
  title: string;
  content: string;
  date: string;
};

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), `app/data/posts/${slug}.json`);
    const content = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    return <h1>Bài viết không tồn tại</h1>;
  }

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      <div className="mt-4 text-lg">{post.content}</div>
    </div>
  );
}
