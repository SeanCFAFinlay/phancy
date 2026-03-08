import { notFound } from "next/navigation";
import AmazonButton from "@/components/amazon-button";
import { getAllBlogPosts, getBlogBySlug, getProductById, type BlogPost } from "@/lib/products";

export function generateStaticParams() {
  return getAllBlogPosts().map((post: BlogPost) => ({ slug: post.slug }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) return notFound();

  const recommended = getProductById(post.recommendedProductId);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-4xl font-black tracking-tight">{post.title}</h1>
      <p className="mt-3 text-zinc-600">{post.excerpt}</p>

      <article className="mt-8">
        {post.content.map((paragraph: string, i: number) => (
          <p key={i} className="mb-4 text-base leading-7 text-zinc-700">
            {paragraph}
          </p>
        ))}
      </article>

      {recommended ? (
        <div className="mt-10 rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wide text-pink-600">
            Recommended Product
          </div>
          <h2 className="mt-2 text-2xl font-black">{recommended.name}</h2>
          <p className="mt-2 text-zinc-600">{recommended.description}</p>
          <div className="mt-4">
            <AmazonButton href={recommended.amazonUrl} />
          </div>
        </div>
      ) : null}
    </main>
  );
}