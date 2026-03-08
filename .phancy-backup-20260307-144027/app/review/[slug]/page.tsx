import { getPost, getPostSlugs } from "@/lib/content";
import PostLayout from "@/components/PostLayout";
import MDXContent from "@/components/MDXContent";
import { Metadata } from "next";
import { formatDate } from "@/lib/utils";
import { getTocItems } from "@/lib/toc";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("review", slug);

  if (!post) {
    return { title: "Not Found" };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export async function generateStaticParams() {
  const slugs = getPostSlugs("review");
  return slugs.map((slug) => ({ slug }));
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost("review", slug);

  if (!post) {
    return <div className="card p22">Post not found</div>;
  }

  const toc = getTocItems(post.content);
  const metaLine = `${formatDate(post.frontmatter.date)} • Reading time: 5 min`;

  return (
    <PostLayout
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      metaLine={metaLine}
      toc={toc}
    >
      <MDXContent source={post.content} />
    </PostLayout>
  );
}
