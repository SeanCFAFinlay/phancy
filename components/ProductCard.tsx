import config from "@/lib/config";

interface ProductCardProps {
    title: string;
    description: string;
    amazonUrl: string;
    image?: string;
    pros?: string[];
    cons?: string[];
    badge?: string;
}

export default function ProductCard({
    title,
    description,
    amazonUrl,
    image,
    pros,
    cons,
    badge,
}: ProductCardProps) {
    // Append Amazon Associates tag to URL
    const affiliateUrl = amazonUrl.includes("?")
        ? `${amazonUrl}&tag=${config.amazonTag}`
        : `${amazonUrl}?tag=${config.amazonTag}`;

    return (
        <div className="relative rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 shadow-sm">
            {badge && (
                <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                        {badge}
                    </span>
                </div>
            )}

            <div className="flex flex-col sm:flex-row gap-5">
                {/* Product Image Placeholder */}
                <div className="flex-shrink-0">
                    <div className="relative h-32 w-32 sm:h-40 sm:w-40 mx-auto sm:mx-0 overflow-hidden rounded-xl bg-white border border-amber-200 flex items-center justify-center">
                        {image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={image}
                                alt={title}
                                className="h-full w-full object-contain p-2"
                            />
                        ) : (
                            <div className="flex flex-col items-center gap-1 text-amber-300">
                                <svg
                                    className="h-12 w-12"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                <span className="text-xs">Product</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {description}
                    </p>

                    {/* Pros & Cons */}
                    {(pros || cons) && (
                        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                            {pros && pros.length > 0 && (
                                <div>
                                    <p className="font-semibold text-green-700 mb-1.5">Pros</p>
                                    <ul className="space-y-1">
                                        {pros.map((pro, i) => (
                                            <li key={i} className="flex items-start gap-1.5 text-gray-700">
                                                <span className="mt-0.5 text-green-500 flex-shrink-0">✓</span>
                                                {pro}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {cons && cons.length > 0 && (
                                <div>
                                    <p className="font-semibold text-red-700 mb-1.5">Cons</p>
                                    <ul className="space-y-1">
                                        {cons.map((con, i) => (
                                            <li key={i} className="flex items-start gap-1.5 text-gray-700">
                                                <span className="mt-0.5 text-red-400 flex-shrink-0">✗</span>
                                                {con}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {/* CTA */}
                    <a
                        href={affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow sponsored"
                        className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-amber-600 active:scale-95 transition-all"
                    >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                        Check Price on Amazon
                    </a>
                    <p className="mt-2 text-xs text-gray-500">
                        * Affiliate link — we may earn a commission
                    </p>
                </div>
            </div>
        </div>
    );
}
