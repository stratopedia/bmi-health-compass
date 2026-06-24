interface Props {
  bmi: number;
}

export default function HealthCompassGauge({ bmi }: Props) {
  const clampedBMI = Math.min(Math.max(bmi, 10), 40);

  const angle = ((clampedBMI - 10) / 30) * 180 - 90;

  return (
    <div className="gauge-container">
      <svg viewBox="0 0 300 180" width="100%" height="280">
        {/* Underweight */}
        <path
          d="M30 150 A120 120 0 0 1 90 45"
          stroke="#60a5fa"
          strokeWidth="18"
          fill="none"
        />

        {/* Normal */}
        <path
          d="M90 45 A120 120 0 0 1 150 30"
          stroke="#22c55e"
          strokeWidth="18"
          fill="none"
        />

        {/* Overweight */}
        <path
          d="M150 30 A120 120 0 0 1 220 45"
          stroke="#f59e0b"
          strokeWidth="18"
          fill="none"
        />

        {/* Obese */}
        <path
          d="M220 45 A120 120 0 0 1 270 150"
          stroke="#ef4444"
          strokeWidth="18"
          fill="none"
        />

        {/* Needle */}
        <g transform="translate(150,150)">
          <line
            x1="0"
            y1="0"
            x2={90 * Math.cos((angle * Math.PI) / 180)}
            y2={90 * Math.sin((angle * Math.PI) / 180)}
            stroke="#1e293b"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <circle r="8" fill="#1e293b" />
        </g>
      </svg>

      <div className="gauge-labels">
        <span>Under</span>
        <span>Normal</span>
        <span>Over</span>
        <span>Obese</span>
      </div>
    </div>
  );
}