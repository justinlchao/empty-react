"use client";

export default function Home() {
  return (
    <main style={{
      height: "100vh",
      overflowY: "scroll",
      scrollSnapType: "y mandatory",
      fontFamily: "Georgia, serif",
    }}>

      {/* Slide 1 */}
      <section style={{
        height: "100vh",
        scrollSnapAlign: "start",
        background: "#0f0f0f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "slideIn 0.8s ease-out",
      }}>
        <div style={{
          background: "#1a1a2e",
          border: "1px solid #333",
          borderRadius: "16px",
          padding: "60px 80px",
          textAlign: "center",
          animation: "fadeUp 1s ease-out",
        }}>
          <p style={{ color: "#888", fontSize: "14px", letterSpacing: "4px", marginBottom: "16px" }}>
            HELLO THERE
          </p>
          <h1 style={{ color: "#fff", fontSize: "52px", fontWeight: "400", margin: "0" }}>
            Hi, my name is <span style={{ color: "#6c63ff" }}>Justin</span>
          </h1>
          <p style={{ color: "#555", marginTop: "24px", fontSize: "14px" }}>↓ scroll down</p>
        </div>
      </section>

      {/* Slide 2 */}
      <section style={{
        height: "100vh",
        scrollSnapAlign: "start",
        background: "#6c63ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "60px 80px",
          textAlign: "center",
        }}>
          <p style={{ color: "#aaa", fontSize: "14px", letterSpacing: "4px", marginBottom: "16px" }}>
            GLAD YOU'RE HERE
          </p>
          <h1 style={{ color: "#0f0f0f", fontSize: "52px", fontWeight: "400", margin: "0" }}>
            Welcome 👋
          </h1>
          <p style={{ color: "#555", marginTop: "16px", fontSize: "18px" }}>
            Take a look around.
          </p>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}