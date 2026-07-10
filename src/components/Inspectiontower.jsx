
/* Geometry  */
const FLOOR_H = 34;
const FLOORS = [
  // width, depth per floor, bottom , top
  [170, 125], [170, 125], [170, 125],
  [135, 100], [135, 100], [135, 100],
  [100, 78], [100, 78], [100, 78],
];
const TOWER_H = FLOORS.length * FLOOR_H; // 306px

const EDGE = "rgba(96, 110, 134, 0.5)";
const GOLD = "#CCA030";

const centered = (w, h) => ({
  position: "absolute",
  left: 0,
  top: 0,
  width: w,
  height: h,
  marginLeft: -w / 2,
  marginTop: -h / 2,
});

/** wireframe floor */
function Floor({ w, d, yCenter }) {
  const faces = [
    [w, 0, d / 2],    // front
    [w, 180, d / 2],  // back
    [d, 90, w / 2],   // right
    [d, -90, w / 2],  // left
  ];
  return faces.map(([fw, ry, tz], i) => (
    <div
      key={i}
      style={{
        ...centered(fw, FLOOR_H),
        border: `1px solid ${EDGE}`,
        transform: `translateY(${-yCenter}px) rotateY(${ry}deg) translateZ(${tz}px)`,
      }}
    />
  ));
}

function CornerNodes({ w, d, yTop }) {
  const corners = [
    [-w / 2, -d / 2], [w / 2, -d / 2],
    [-w / 2, d / 2], [w / 2, d / 2],
  ];
  return corners.map(([x, z], i) => (
    <div
      key={i}
      className="tower-node"
      style={{
        ...centered(4, 4),
        borderRadius: "50%",
        background: GOLD,
        transform: `translate3d(${x}px, ${-yTop}px, ${z}px)`,
      }}
    />
  ));
}

export default function InspectionTower() {
  return (
    <div
      className="w-full h-full flex items-center justify-center overflow-hidden"
      aria-hidden="true"
      style={{ perspective: "1000px" }}
    >
      <style>{`
        @keyframes tower-spin {
          from { transform: rotateY(0deg); }
          to   { transform: rotateY(360deg); }
        }
        @keyframes tower-sweep {
          0%, 100% { transform: translateY(-10px); }
          50%      { transform: translateY(${-(TOWER_H - 10)}px); }
        }
        @keyframes tower-glow {
          0%, 100% { opacity: 0.55; }
          50%      { opacity: 0.95; }
        }
        @keyframes tower-node-pulse {
          0%, 100% { opacity: 0.35; }
          50%      { opacity: 0.85; }
        }
        .tower-group { animation: tower-spin 46s linear infinite; }
        .tower-sweep { animation: tower-sweep 9s ease-in-out infinite; }
        .tower-ring  { animation: tower-glow 2.4s ease-in-out infinite; }
        .tower-node  { animation: tower-node-pulse 3s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .tower-group, .tower-sweep, .tower-ring, .tower-node { animation: none; }
          .tower-sweep { transform: translateY(${-TOWER_H / 2}px); } /* park mid-height */
        }
      `}</style>

      {/* Stage */}
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(18deg) translateY(${TOWER_H * 0.42}px)`,
        }}
      >
        <div
          className="tower-group"
          style={{ position: "relative", width: 0, height: 0, transformStyle: "preserve-3d" }}
        >
          {/* Floors */}
          {FLOORS.map(([w, d], i) => (
            <Floor key={`f${i}`} w={w} d={d} yCenter={i * FLOOR_H + FLOOR_H / 2} />
          ))}

          {/* Corner nodes */}
          {FLOORS.map(([w, d], i) => (
            <CornerNodes key={`n${i}`} w={w} d={d} yTop={(i + 1) * FLOOR_H} />
          ))}

          {/* Inspection sweep */}
          <div className="tower-sweep" style={{ transformStyle: "preserve-3d" }}>
            <div
              className="tower-ring"
              style={{
                ...centered(230, 230),
                borderRadius: "50%",
                border: `2.5px solid ${GOLD}`,
                boxShadow: "0 0 16px rgba(204,160,48,0.4)",
                transform: "rotateX(90deg)",
              }}
            />
          </div>

          {/* Ground grid */}
          <div
            style={{
              ...centered(460, 460),
              transform: "rotateX(90deg)",
              backgroundImage: `
                repeating-linear-gradient(0deg, rgba(58,70,90,0.55) 0 1px, transparent 1px 34px),
                repeating-linear-gradient(90deg, rgba(58,70,90,0.55) 0 1px, transparent 1px 34px)
              `,
              WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 72%)",
              maskImage: "radial-gradient(circle, black 30%, transparent 72%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}