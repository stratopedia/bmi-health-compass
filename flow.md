# BMI Health Compass - Application Flow

## 1. User Journey

```
Launch Application
        │
        ▼
Enter Age
        │
        ▼
Select Gender
        │
        ▼
Enter Height
        │
        ▼
Enter Weight
        │
        ▼
Calculate BMI
        │
        ▼
Validate Inputs
        │
   ┌────┴────┐
   │         │
Invalid    Valid
   │         │
Show Error  ▼
             Calculate BMI
                    │
                    ▼
            Determine Category
                    │
                    ▼
            Calculate Health Score
                    │
                    ▼
             Update Gauge
                    │
                    ▼
             Display Result
```

---

# 2. Input Processing Flow

## Age

```
Years
 +
Months
  │
  ▼
Total Age (Months)
```

Example:

```
4 Years + 7 Months

= 55 Months
```

---

## Height

### Feet / Inches Mode

```
Feet
 +
Inches
   │
   ▼
Total Inches
   │
   ▼
Centimeters
```

Formula:

```
((feet × 12) + inches) × 2.54
```

Example:

```
5'10"

70 × 2.54

177.8 cm
```

---

### CM Mode

```
CM
 │
 ▼
Meters
```

Formula:

```
cm / 100
```

---

## Weight

### KG Mode

```
Weight KG
    │
    ▼
Weight Pounds
```

Formula:

```
kg × 2.20462
```

---

### Pounds Mode

```
Weight Pounds
      │
      ▼
Weight KG
```

Formula:

```
lbs / 2.20462
```

---

# 3. BMI Calculation Flow

Formula:

```
BMI = Weight (kg)
      ----------
      Height² (m)
```

Example:

```
Weight = 70kg

Height = 1.778m

BMI = 70 / (1.778 × 1.778)

BMI = 22.1
```

---

# 4. Category Determination Flow

```
BMI
 │
 ▼

BMI < 18.5
      │
      ▼
Underweight

18.5 ≤ BMI < 25
      │
      ▼
Normal

25 ≤ BMI < 30
      │
      ▼
Overweight

BMI ≥ 30
      │
      ▼
Obese
```

---

# 5. Gauge Processing Flow

```
BMI Value
    │
    ▼
Clamp Between
10 and 40
    │
    ▼
Convert To Percentage
    │
    ▼
Convert To Angle
    │
    ▼
Move Gauge Indicator
    │
    ▼
Animate Position
```

---

# 6. Health Score Flow

```
BMI
 │
 ▼
Calculate Distance
From Ideal Range
 │
 ▼
Generate Score
 │
 ▼
Display Result
```

Example:

```
BMI = 22

Ideal Range

Health Score = 95+
```

---

# 7. Error Handling Flow

```
Calculate Button Click
          │
          ▼
Validate Inputs
          │
   ┌──────┴──────┐
   │             │
Error         Success
   │             │
Show Error    Calculate BMI
Message       Display Result
```

---

# 8. Future State Flow

```
Login
  │
  ▼
Profile
  │
  ▼
BMI Calculation
  │
  ▼
Store History
  │
  ▼
Trend Analysis
  │
  ▼
AI Recommendations
```

---

# 9. Technology Flow

```
React UI
   │
   ▼
App.tsx
   │
   ▼
State Management
(useState)
   │
   ▼
BMI Calculation Logic
   │
   ▼
Result Card
   │
   ▼
Health Compass Gauge
   │
   ▼
User Interface Update
```
