import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #0a0b1d 0%, #17113d 25%, #2a1768 50%, #3a2aa0 72%, #2f5fdc 100%)",
          color: "#f8fbff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 18%, rgba(168, 85, 247, 0.55), transparent 28%), radial-gradient(circle at 82% 76%, rgba(96, 165, 250, 0.44), transparent 32%), radial-gradient(circle at 74% 24%, rgba(192, 132, 252, 0.28), transparent 20%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "36px",
            borderRadius: "28px",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(5, 10, 24, 0.24)",
            boxShadow: "0 28px 90px rgba(4, 10, 28, 0.45)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              color: "#7dd3fc",
              fontSize: 28,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: "999px",
                background: "#7c3aed",
                boxShadow: "0 0 22px rgba(168,85,247,0.8)",
              }}
            />
            Cybersecurity Portfolio
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: 840 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 76,
                fontWeight: 800,
                lineHeight: 1.02,
                textShadow: "0 0 30px rgba(191, 219, 254, 0.18)",
              }}
            >
              Malindu
              <br />
              Wijayarathna
            </div>
            <div
              style={{
                fontSize: 34,
                color: "#c4b5fd",
                fontWeight: 700,
              }}
            >
              Security Projects, Certifications, Skills, and Contact
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {["OWASP", "OSINT", "SOC", "Vulnerability Assessment"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  padding: "14px 24px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  fontSize: 26,
                  color: "#e9efff",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
