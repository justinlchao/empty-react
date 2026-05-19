"use client";
import Link from "next/link";

const projects = [
  { id: "weather-app", title: "Weather App", description: "A real-time weather dashboard", tag: "React" },
  { id: "portfolio", title: "Portfolio Site", description: "This site, built with Next.js", tag: "Next.js" },
  { id: "todo-list", title: "Todo List", description: "A clean task manager app", tag: "TypeScript" },
];

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0a", color: "#fff", fontFamily: "Georgia, serif" }}>
      
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: "1px solid #222" }}>
        <span style={{ fontSize: "18px", letterSpacing: "2px", color: "#6c63ff" }}>JUSTIN</span>
        <div style={{ display: "flex", gap: "32px" }}>
          <Link href="/" style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>Home</Link>
          <Link href="/about" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px" }}>About</Link>
        </div>
      </nav>

      <section style={{ padding: "100px 48px 60px", maxWidth: "800px" }}>
        <p style={{ color: "#6c63ff", fontSize: "14px", letterSpacing: "4px", marginBottom: "16px" }}>HELLO WORLD</p>
        <h1 style={{ fontSize: "64px", fontWeight: "400", lineHeight: "1.1", margin: "0 0 24px" }}>
          Hi, I'm <span style={{ color: "#6c63ff" }}>Justin</span>
        </h1>
        <p style={{ color: "#aaa", fontSize: "20px", lineHeight: "1.7", maxWidth: "560px" }}>
          I build things for the web. Student, developer, and curious person.
        </p>
        <Link href="/about" style={{
          display: "inline-block", marginTop: "32px", padding: "14px 32px",
          background: "#6c63ff", color: "#fff", borderRadius: "8px",
          textDecoration: "none", fontSize: "14px", letterSpacing: "1px"
        }}>
          Learn more about me →
        </Link>
      </section>

      <section style={{ padding: "40px 48px 80px" }}>
        <h2 style={{ fontSize: "13px", letterSpacing: "4px", color: "#555", marginBottom: "32px" }}>PROJECTS</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          {projects.map((p) => (
            <Link key={p.id} href={`/projects/${p.id}`} style={{ textDecoration: "none" }}>
              <div style={{
                background: "#111", border: "1px solid #222", borderRadius: "12px",
                padding: "28px", cursor: "pointer",
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#6c63ff")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#222")}
              >
                <span style={{ fontSize: "11px", background: "#1a1a2e", color: "#6c63ff", padding: "4px 10px", borderRadius: "4px", letterSpacing: "1px" }}>{p.tag}</span>
                <h3 style={{ color: "#fff", fontSize: "20px", fontWeight: "400", margin: "16px 0 8px" }}>{p.title}</h3>
                <p style={{ color: "#666", fontSize: "14px", margin: "0" }}>{p.description}</p>
                <p style={{ color: "#6c63ff", fontSize: "13px", marginTop: "16px" }}>View project →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
