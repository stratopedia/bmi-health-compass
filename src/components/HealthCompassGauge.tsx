import React from "react";

interface Props {
  bmi: number;
}

export default function HealthCompassGauge({ bmi }: Props) {
  const minBMI = 10;
  const maxBMI = 40;

  const bmiStops = [10, 18.5, 25, 30, 40];

  const clampedBMI = Math.max(minBMI, Math.min(maxBMI, bmi));

  // Map BMI directly to 180° semicircle
  let percentage = 0;

  if (clampedBMI <= 18.5) {
    percentage = ((clampedBMI - 10) / (18.5 - 10)) * 0.25;
  } else if (clampedBMI <= 25) {
    percentage = 0.25 + ((clampedBMI - 18.5) / (25 - 18.5)) * 0.25;
  } else if (clampedBMI <= 30) {
    percentage = 0.5 + ((clampedBMI - 25) / (30 - 25)) * 0.25;
  } else {
    percentage = 0.75 + ((clampedBMI - 30) / (40 - 30)) * 0.25;
  }

  const angle = Math.PI * (1 - percentage);

  const needleLength = 95;

  const x2 = needleLength * Math.cos(angle);

  const y2 = -needleLength * Math.sin(angle);

  return (
    <div className="gauge-container">
      <svg viewBox="0 0 300 180" width="100%" height="260">
        {/* Underweight */}
        <path
          d="M30 150 A120 120 0 0 1 98 40"
          stroke="#3b82f6"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
        />

        {/* Normal */}
        <path
          d="M98 40 A120 120 0 0 1 162 30"
          stroke="#22c55e"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
        />

        {/* Overweight */}
        <path
          d="M162 30 A120 120 0 0 1 212 52"
          stroke="#f59e0b"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
        />

        {/* Obese */}
        <path
          d="M212 52 A120 120 0 0 1 270 150"
          stroke="#ef4444"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
        />

        {/* Needle */}
        <g transform="translate(150,150)">
          <line
            x1="0"
            y1="0"
            x2={x2}
            y2={y2}
            stroke="#0f172a"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <circle cx="0" cy="0" r="10" fill="#0f172a" />
        </g>

        {/* Scale Labels */}
        <text x="18" y="165" fontSize="10">
          {bmiStops[0]}
        </text>

        <text x="82" y="35" fontSize="10">
          {bmiStops[1]}
        </text>

        <text x="145" y="20" fontSize="10">
          {bmiStops[2]}
        </text>

        <text x="205" y="40" fontSize="10">
          {bmiStops[3]}
        </text>

        <text x="270" y="165" fontSize="10">
          {bmiStops[4]}
        </text>
      </svg>

      <div className="gauge-labels">
        <span className="under">
          Underweight
          <br />
          10 - 18.5
        </span>
        <span className="normal">
          Normal weight
          <br />
          18.5 - 25
        </span>
        <span className="over">
          Overweight
          <br />
          25 - 30
        </span>
        <span className="obese">
          Obese
          <br />
          30 - 40
        </span>
      </div>
    </div>
  );
}
