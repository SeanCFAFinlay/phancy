import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import ProductCard from "@/components/ProductCard";
import { headingId } from "@/lib/toc";
import { extractProductCards } from "@/lib/productBlocks";

function productIdFromTitle(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[`"'!?.,:;()]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

export default function MDXContent({ source }: { source: string }) {
  // Pre-extract to keep IDs consistent with ComparisonGrid
  const products = extractProductCards(source);
  const idMap = new Map<string, string>();
  for (const p of products) idMap.set(p.title, p.id);

  return (
    <MDXRemote
      source={source}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      components={{
        ProductCard: (props: any) => {
          const title = typeof props.title === "string" ? props.title : "product";
          const id = idMap.get(title) ?? productIdFromTitle(title);
          return (
            <div id={id} style={{ scrollMarginTop: 90 }}>
              <ProductCard {...props} />
            </div>
          );
        },
        h2: (props: any) => {
          const text = typeof props.children === "string" ? props.children : "";
          return <h2 id={headingId(text)} {...props} />;
        },
        h3: (props: any) => {
          const text = typeof props.children === "string" ? props.children : "";
          return <h3 id={headingId(text)} {...props} />;
        },
        a: (props: any) => <a {...props} style={{ textDecoration: "underline" }} />,
        blockquote: (props: any) => (
          <blockquote {...props} style={{ borderLeft: "4px solid var(--border)", paddingLeft: 12, opacity: 0.9 }} />
        ),
      }}
    />
  );
}
