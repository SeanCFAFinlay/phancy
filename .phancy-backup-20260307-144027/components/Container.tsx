export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "28px 18px" }}>
      {children}
    </div>
  );
}
