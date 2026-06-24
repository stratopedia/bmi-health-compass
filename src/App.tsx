import { useState } from "react";
export default function App() {
  const [age, setAge] = useState(24);
  const [gender, setGender] = useState("Female");
  const [feet, setFeet] = useState(5);
  const [inch, setInch] = useState(10);
  const [weight, setWeight] = useState(70);
  const [res, setRes] = useState<any>();
  const calc = () => {
    const cm = feet * 30.48 + inch * 2.54;
    const bmi = weight / ((cm / 100) * (cm / 100));
    setRes({
      bmi: bmi.toFixed(1),
      cat:
        bmi < 18.5
          ? "Underweight"
          : bmi < 25
            ? "Normal Weight"
            : bmi < 30
              ? "Overweight"
              : "Obese",
    });
  };
  return (
    <div className="container">
      <div className="hero">
        <h1>Health Compass BMI Calculator</h1>
        <p>Check your healthy body weight instantly</p>
      </div>
      <div className="card">
        <label>Age</label>
        <input value={age} onChange={(e) => setAge(+e.target.value)} />
        <br />
        <label>Gender</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option>Female</option>
          <option>Male</option>
        </select>
        <div className="grid2">
          <div>
            <label>Feet</label>
            <input value={feet} onChange={(e) => setFeet(+e.target.value)} />
          </div>
          <div>
            <label>Inches</label>
            <input value={inch} onChange={(e) => setInch(+e.target.value)} />
          </div>
        </div>
        <label>Weight (KG)</label>
        <input value={weight} onChange={(e) => setWeight(+e.target.value)} />
        <br />
        <button className="btn" onClick={calc}>
          Calculate BMI
        </button>
      </div>
      {res && (
        <>
          <div className="card result">
            <div className="score">{res.bmi}</div>
            <h2>{res.cat}</h2>
          </div>
          <div className="card result">
            <h3>Health Compass</h3>
            <p>Gauge placeholder ready for next upgrade</p>
          </div>
        </>
      )}
    </div>
  );
}
