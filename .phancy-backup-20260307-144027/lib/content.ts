import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostType = "best" | "review";

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  category: string; // slug
  tags: string[];
  type: PostType;
};

export type Post = {
  slug: string;
  type: PostType;
  frontmatter: PostFrontmatter;
  content: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

function getDir(type: PostType) {
  return path.join(CONTENT_ROOT, type);
}

export function getAllPosts(): Post[] {
  const types: PostType[] = ["best", "review"];
  const posts: Post[] = [];

  for (const type of types) {
    const dir = getDir(type);
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
    for (const file of files) {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const parsed = matter(raw);

      posts.push({
        slug,
        type,
        frontmatter: parsed.data as PostFrontmatter,
        content: parsed.content.trim(),
      });
    }
  }

  return posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export function getPost(type: PostType, slug: string): Post | null {
  const file = path.join(getDir(type), `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;

  const raw = fs.readFileSync(file, "utf8");
  const parsed = matter(raw);

  return {
    slug,
    type,
    frontmatter: parsed.data as PostFrontmatter,
    content: parsed.content.trim(),
  };
}

export function getCategorySlugs(): string[] {
  const posts = getAllPosts();
  return Array.from(new Set(posts.map((p) => p.frontmatter.category))).sort();
}

export function getPostSlugs(type: PostType): string[] {
  return getAllPosts()
    .filter((p) => p.type === type)
    .map((p) => p.slug);
}
