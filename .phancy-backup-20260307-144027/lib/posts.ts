import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type PostType = "best" | "review";

export interface PostFrontmatter {
    title: string;
    description: string;
    date: string; // YYYY-MM-DD
    category: string; // category slug
    tags: string[];
    type: PostType;
    featuredImage?: string;
    draft?: boolean;
}

export interface Post {
    slug: string;
    type: PostType;
    frontmatter: PostFrontmatter;
    content: string;
    readingTime: string;
    href: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

function getPostsFromDir(type: PostType): Post[] {
    const dir = path.join(CONTENT_DIR, type);

    if (!fs.existsSync(dir)) return [];

    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

    return files
        .map((file) => {
            const slug = file.replace(/\.mdx$/, "");
            const filePath = path.join(dir, file);
            const raw = fs.readFileSync(filePath, "utf8");
            const { data, content } = matter(raw);
            const rt = readingTime(content);

            const frontmatter = data as PostFrontmatter;

            // Skip drafts in production
            if (frontmatter.draft && process.env.NODE_ENV === "production") {
                return null;
            }

            return {
                slug,
                type,
                frontmatter,
                content,
                readingTime: rt.text,
                href: `/${type}/${slug}`,
            } satisfies Post;
        })
        .filter(Boolean) as Post[];
}

export function getAllPosts(): Post[] {
    const bestPosts = getPostsFromDir("best");
    const reviewPosts = getPostsFromDir("review");

    return [...bestPosts, ...reviewPosts].sort(
        (a, b) =>
            new Date(b.frontmatter.date).getTime() -
            new Date(a.frontmatter.date).getTime()
    );
}

export function getPostBySlug(type: PostType, slug: string): Post | null {
    const filePath = path.join(CONTENT_DIR, type, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    const rt = readingTime(content);

    return {
        slug,
        type,
        frontmatter: data as PostFrontmatter,
        content,
        readingTime: rt.text,
        href: `/${type}/${slug}`,
    };
}

export function getPostsByCategory(categorySlug: string): Post[] {
    return getAllPosts().filter(
        (post) => post.frontmatter.category === categorySlug
    );
}

export function getLatestPosts(count: number = 8): Post[] {
    return getAllPosts().slice(0, count);
}

export function getAllSlugs(): { type: PostType; slug: string }[] {
    const best = getPostsFromDir("best").map((p) => ({
        type: "best" as PostType,
        slug: p.slug,
    }));
    const reviews = getPostsFromDir("review").map((p) => ({
        type: "review" as PostType,
        slug: p.slug,
    }));
    return [...best, ...reviews];
}

export function getAllPostSlugs(type: PostType): string[] {
    return getPostsFromDir(type).map((p) => p.slug);
}

export function getUsedCategories(): string[] {
    const posts = getAllPosts();
    const cats = new Set(posts.map((p) => p.frontmatter.category));
    return Array.from(cats);
}
