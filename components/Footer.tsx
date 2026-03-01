export default function Footer() {
  return (
    <footer style={{ padding: 24, borderTop: "1px solid #e5e7eb", marginTop: 32 }}>
      <div style={{ fontSize: 14 }}>
        As an Amazon Associate I earn from qualifying purchases.
      </div>
      <div style={{ fontSize: 12, marginTop: 8, opacity: 0.75 }}>
        © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
