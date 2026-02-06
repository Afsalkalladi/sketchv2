import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sketch Robotics - Everything Starts From a Sketch";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            SKETCH ROBOTICS
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 300,
              color: "#a0a0a0",
              lineHeight: 1.3,
            }}
          >
            Everything Starts From a Sketch
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 300,
              color: "#666666",
              lineHeight: 1.5,
              marginTop: "10px",
              maxWidth: "700px",
            }}
          >
            Innovative Robotics & AI Solutions | Make in India | Kochi, Kerala
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: 18,
            color: "#444444",
          }}
        >
          sketchrobotics.in
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
