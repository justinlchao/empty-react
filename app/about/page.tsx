import Link from "next/link";

export default function About() {
  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0a", color: "#fff", fontFamily: "Georgia, serif" }}>
      
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: "1px solid #222" }}>
        <span style={{ fontSize: "18px", letterSpacing: "2px", color: "#6c63ff" }}>JUSTIN</span>
        <div style={{ display: "flex", gap: "32px" }}>
          <Link href="/" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px" }}>Home</Link>
          <Link href="/about" style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>About</Link>
        </div>
      </nav>

      <section style={{ padding: "80px 48px", maxWidth: "680px" }}>
        <p style={{ color: "#6c63ff", fontSize: "13px", letterSpacing: "4px", marginBottom: "16px" }}>ABOUT ME</p>
        <h1 style={{ fontSize: "48px", fontWeight: "400", margin: "0 0 32px" }}>A little about Justin</h1>
        <p style={{ color: "#aaa", fontSize: "18px", lineHeight: "1.8", marginBottom: "24px" }}>
          I'm a student learning web development. I enjoy building things and figuring out how stuff works.
        </p>
        <p style={{ color: "#aaa", fontSize: "18px", lineHeight: "1.8", marginBottom: "40px" }}>
          Currently exploring Next.js, design, and whatever else seems interesting.
        </p>
        <Link href="/" style={{ color: "#6c63ff", textDecoration: "none", fontSize: "14px" }}>← Back to home</Link>
      </section>
    </main>
  );
}