import Footer from "@/components/Footer";

export default function AffiliateDisclosure() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 34 }}>Affiliate Disclosure</h1>
      <p style={{ marginTop: 12, lineHeight: 1.7 }}>
        As an Amazon Associate I earn from qualifying purchases. Some links on this site may be affiliate links.
        This means we may receive a commission at no extra cost to you.
      </p>
      <Footer />
    </main>
  );
}
