export default function SvgRightTriangle() {
  return (
    <svg viewBox="0 0 220 180" className="w-full max-w-sm mx-auto">
      <polygon
        points="30,150 190,150 30,30"
        fill="rgba(59,130,246,0.1)"
        stroke="#38bdf8"
        strokeWidth="2"
      />
      <rect x="30" y="130" width="20" height="20" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="110" y="170" textAnchor="middle" fill="#e2e8f0" fontSize="12">
        ভূমি (adjacent)
      </text>
      <text x="10" y="90" transform="rotate(-90 10 90)" fill="#e2e8f0" fontSize="12">
        লম্ব (opposite)
      </text>
      <text x="110" y="70" fill="#e2e8f0" fontSize="12">
        অতিভুজ (hypotenuse)
      </text>
    </svg>
  );
}
