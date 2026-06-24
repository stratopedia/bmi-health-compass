import { useState } from "react";
import HealthCompassGauge from "./components/HealthCompassGauge";

export default function App() {

  const [ageYears, setAgeYears] = useState("24");
  const [ageMonths, setAgeMonths] = useState("0");

  const [gender, setGender] = useState("Female");

  const [feet, setFeet] = useState("5");
  const [inches, setInches] = useState("10");

  const [weight, setWeight] = useState("60");

  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const [errors, setErrors] = useState<string[]>([]);

  const calculateBMI = () => {
    const validationErrors: string[] = [];

    const totalMonths = Number(ageYears) * 12 + Number(ageMonths);

    if (totalMonths <= 0) {
      validationErrors.push("Age must be greater than 0.");
    }

    if (!ageYears || Number(ageYears) <= 0 || Number(ageYears) > 120) {
      validationErrors.push("Year must be between 1 and 120.");
    }

    if (!ageMonths || Number(ageMonths) < 0 || Number(ageMonths) > 12) {
      validationErrors.push("Month must be between 0 and 11.");
    }

    if (!feet || Number(feet) < 0) {
      validationErrors.push("Feet cannot be negative.");
    }

    if (!Number.isInteger(Number(feet))) {
      validationErrors.push("Feet must be a whole number.");
    }

    if (!inches || Number(inches) < 0 || Number(inches) > 11) {
      validationErrors.push("Inches must be between 0 and 11.");
    }

    if (!Number.isInteger(Number(inches))) {
      validationErrors.push("Inches must be a whole number.");
    }

    if (!weight || Number(weight) <= 0) {
      validationErrors.push("Weight must be greater than 0.");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors([]);

    const cm = Number(feet) * 30.48 + Number(inches) * 2.54;

    const bmiValue = Number(weight) / Math.pow(cm / 100, 2);

    const roundedBMI = Number(bmiValue.toFixed(1));

    setBMI(roundedBMI);

    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue < 25) {
      setCategory("Normal Weight");
    } else if (bmiValue < 30) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  };

  const healthScore =
    bmi === null ? 0 : bmi < 18.5 ? 70 : bmi < 25 ? 95 : bmi < 30 ? 75 : 50;

  const heightInCm = Number(feet || 0) * 30.48 + Number(inches || 0) * 2.54;

  const weightInLbs = Number(weight || 0) * 2.20462;

  return (
    <div className="container">
      <div className="hero">
        <h1>Health Compass BMI Calculator</h1>
        <p>Check your healthy body weight instantly</p>
      </div>

      <div className="card">

        <div className="field">
          <label>Age</label>

        <div className="grid2">
          <div className="select-wrapper">
            <label className="small-label">Years</label>
            <select
              value={ageYears}
              onChange={(e) =>
                setAgeYears(e.target.value)
              }
            >
            {Array.from(
              { length: 121 },
              (_, i) => i
            ).map((year) => (
              <option
                key={year}
                value={year}
              >
                {year}
              </option>
            ))}
          </select>
          </div>

          <div className="select-wrapper">
            <label className="small-label">Months</label>
              <select
              value={ageMonths}
              onChange={(e) =>
                setAgeMonths(e.target.value)
              }
              >
              {Array.from(
                { length: 12 },
                (_, i) => i
              ).map((month) => (
                <option
                  key={month}
                  value={month}
                >
                  {month}
                </option>
              ))}
              </select>
          </div>
      </div>
    
      <div className="helper">
        Age: {ageYears} years {ageMonths} months
      </div>
      </div>
        
        <div className="field">
          <label>Gender</label>

          <div className="gender-group">
            <button
              type="button"
              className={gender === "Male" ? "active" : ""}
              onClick={() => setGender("Male")}
            >
              Male
            </button>

            <button
              type="button"
              className={gender === "Female" ? "active" : ""}
              onClick={() => setGender("Female")}
            >
              Female
            </button>
          </div>
        </div>

        <div className="field">
          <label>Height</label>

          <div className="grid2">
            <div className="select-wrapper">
              <label className="small-label">Feet</label>
              <select value={feet} onChange={(e) => setFeet(e.target.value)}>
                {Array.from({ length: 9 }, (_, i) => i).map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>

            <div className="select-wrapper">
              <label className="small-label">Inches</label>
              <select
                value={inches}
                onChange={(e) => setInches(e.target.value)}
              >
                {Array.from({ length: 12 }, (_, i) => i).map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="helper">
            {feet || 0}' {inches || 0}" = {heightInCm.toFixed(1)} cm
          </div>
        </div>

        <div className="field">
          <label>Weight (KG)</label>

          <input
            type="number"
            min="0"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <div className="helper">
            {weight || 0} kg = {weightInLbs.toFixed(1)} lbs
          </div>
        </div>

        {errors.length > 0 && (
          <div className="error-box">
            {errors.map((err) => (
              <div key={err}>• {err}</div>
            ))}
          </div>
        )}

        <button className="btn" onClick={calculateBMI}>
          Calculate BMI
        </button>
      </div>

      {bmi !== null && (
        <>
          <div className="card result-card">
            <div className="age-display">
              Age: {ageYears}y {ageMonths}m
            </div>
            <div className="bmi-number">{bmi}</div>

            <div
              className="category"
              style={{
                color:
                  category === "Normal Weight"
                    ? "#22c55e"
                    : category === "Underweight"
                      ? "#3b82f6"
                      : category === "Overweight"
                        ? "#f59e0b"
                        : "#ef4444",
              }}
            >
              {category}
            </div>

            <div className="health-score">Health Score: {healthScore}/100</div>
          </div>

          <h3 className="gauge-title">Health Compass</h3>
          <div className="card">
            <HealthCompassGauge bmi={bmi} />
          </div>
        </>
      )}
    </div>
  );
}
