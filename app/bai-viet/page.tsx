import fs from "fs";
import path from "path";

async function getAllPosts() {
  const files = fs.readdirSync(path.join(process.cwd(), "app/data/posts"));
  return files.map((file) => {
    const slug = file.replace(".json", "");
    const content = JSON.parse(
      fs.readFileSync(
        path.join(process.cwd(), `app/data/posts/${file}`),
        "utf-8",
      ),
    );
    return { slug, title: content.title };
  });
}

export default async function BlogList() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-3xl font-bold">Bài viết mới nhất</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a
              href={`/blog/${post.slug}`}
              className="text-blue-500 hover:underline"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
