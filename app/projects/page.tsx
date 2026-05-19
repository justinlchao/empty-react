import Link from "next/link";

const projects: Record<string, { title: string; description: string; tag: string; details: string }> = {
  "weather-app": {
    title: "Weather App",
    tag: "React",
    description: "A real-time weather dashboard",
    details: "Built using the OpenWeather API. Displays current conditions, temperature, and a 5-day forecast. Users can search any city in the world.",
  },
  "portfolio": {
    title: "Portfolio Site",
    tag: "Next.js",
    description: "This site, built with Next.js",
    details: "Designed and built from scratch using Next.js App Router. Features dynamic routing, multiple pages, and a clean dark aesthetic.",
  },
  "todo-list": {
    title: "Todo List",
    tag: "TypeScript",
    description: "A clean task manager app",
    details: "A minimalist task manager with add, complete, and delete functionality. Built with TypeScript for type safety.",
  },
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id];

  if (!project) {
    return (
      <main style={{ minHeight: "100vh", background: "#0a0a0a", color: "#fff", fontFamily: "Georgia, serif", padding: "80px 48px" }}>
        <h1>Project not found</h1>
        <Link href="/" style={{ color: "#6c63ff" }}>← Back home</Link>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0a", color: "#fff", fontFamily: "Georgia, serif" }}>

      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: "1px solid #222" }}>
        <span style={{ fontSize: "18px", letterSpacing: "2px", color: "#6c63ff" }}>JUSTIN</span>
        <div style={{ display: "flex", gap: "32px" }}>
          <Link href="/" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px" }}>Home</Link>
          <Link href="/about" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px" }}>About</Link>
        </div>
      </nav>

      <section style={{ padding: "80px 48px", maxWidth: "680px" }}>
        <span style={{ fontSize: "11px", background: "#1a1a2e", color: "#6c63ff", padding: "4px 10px", borderRadius: "4px", letterSpacing: "1px" }}>{project.tag}</span>
        <h1 style={{ fontSize: "48px", fontWeight: "400", margin: "24px 0 16px" }}>{project.title}</h1>
        <p style={{ color: "#aaa", fontSize: "20px", marginBottom: "32px" }}>{project.description}</p>
        <p style={{ color: "#777", fontSize: "16px", lineHeight: "1.8", marginBottom: "48px" }}>{project.details}</p>
        <Link href="/" style={{ color: "#6c63ff", textDecoration: "none", fontSize: "14px" }}>← Back to all projects</Link>
      </section>
    </main>
  );
}