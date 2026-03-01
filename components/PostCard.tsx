import Link from "next/link";
import { Post } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import config from "@/lib/config";

interface PostCardProps {
    post: Post;
}

export default function PostCard({ post }: PostCardProps) {
    const { frontmatter, slug, type, readingTime, href } = post;

    const category = config.categories.find(
        (c) => c.slug === frontmatter.category
    );

    return (
        <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
            {/* Card Header */}
            <div
                className={`h-2 w-full ${type === "best"
                        ? "bg-gradient-to-r from-amber-400 to-orange-500"
                        : "bg-gradient-to-r from-blue-400 to-indigo-500"
                    }`}
            />

            <div className="flex flex-col flex-1 p-6">
                {/* Badges */}
                <div className="flex items-center gap-2 mb-3">
                    <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${type === "best"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                    >
                        {type === "best" ? "⭐ Best Pick" : "🔍 Review"}
                    </span>
                    {category && (
                        <Link
                            href={`/category/${category.slug}`}
                            className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-800 transition-colors"
                        >
                            {category.icon} {category.name}
                        </Link>
                    )}
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors line-clamp-2">
                    <Link href={href} className="stretched-link">
                        {frontmatter.title}
                    </Link>
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1">
                    {frontmatter.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                        <time dateTime={frontmatter.date}>
                            {formatDate(frontmatter.date)}
                        </time>
                        <span>·</span>
                        <span>{readingTime}</span>
                    </div>
                    <span className="text-xs font-semibold text-amber-600 group-hover:text-amber-700">
                        Read more →
                    </span>
                </div>
            </div>
        </article>
    );
}
