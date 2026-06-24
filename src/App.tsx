import { useState } from "react";
import HealthCompassGauge from "./components/HealthCompassGauge";

export default function App() {
  const [age, setAge] = useState(24);
  const [gender, setGender] = useState("Female");

  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(10);

  const [weight, setWeight] = useState(70);

  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const cm = feet * 30.48 + inches * 2.54;

    const value = weight / Math.pow(cm / 100, 2);

    setBMI(Number(value.toFixed(1)));

    if (value < 18.5) {
      setCategory("Underweight");
    } else if (value < 25) {
      setCategory("Normal Weight");
    } else if (value < 30) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  };

  return (
    <div className="container">
      <div className="hero">
        <h1>Health Compass BMI Calculator</h1>
        <p>Check your healthy body weight instantly</p>
      </div>

      <div className="card">
        <div className="field">
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>

        <div className="field">
          <label>Gender</label>

          <div className="gender-group">
            <button
              className={gender === "Male" ? "active" : ""}
              onClick={() => setGender("Male")}
            >
              Male
            </button>

            <button
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
            <div>
              <label className="small-label">Feet</label>
              <input
                type="number"
                value={feet}
                onChange={(e) => setFeet(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="small-label">Inches</label>
              <input
                type="number"
                value={inches}
                onChange={(e) => setInches(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="helper">
            {feet}' {inches}" = {(feet * 30.48 + inches * 2.54).toFixed(1)} cm
          </div>
        </div>

        <div className="field">
          <label>Weight (KG)</label>

          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>

        <button className="btn" onClick={calculateBMI}>
          Calculate BMI
        </button>
      </div>

      {bmi && (
        <>
          <div className="card result-card">
            <div className="bmi-number">{bmi}</div>

            <div className="category">{category}</div>

            <div className="health-score">
              Health Score: {Math.max(0, 100 - Math.abs(22 - bmi) * 4).toFixed(0)}
              /100
            </div>
          </div>

          <div className="card">
            <HealthCompassGauge bmi={bmi} />
          </div>
        </>
      )}
    </div>
  );
}