# BMI Health Compass - Design Document

## 1. Overview

BMI Health Compass is a modern, user-friendly Body Mass Index calculator designed to help users quickly evaluate their weight category and overall health status.

The application provides:

* BMI calculation
* Height and weight unit conversions
* Health score visualization
* Interactive Health Compass gauge
* Responsive design for desktop and mobile devices
* Input validation and error handling

---

# 2. Design Goals

## Primary Goals

* Simple and intuitive user experience
* Minimal data entry
* Instant feedback
* Mobile-friendly layout
* Accessible color scheme
* Modern healthcare-inspired design

## Secondary Goals

* Easy future integration with:

  * BMI history tracking
  * Pediatric BMI calculations
  * Health recommendations
  * Wearable integrations
  * Cloud synchronization

---

# 3. User Interface Layout

## Header Section

```
-----------------------------------
Health Compass BMI Calculator
-----------------------------------
```

Purpose:

* Application branding
* Immediate user context

---

## User Input Card

### Age

```
Age

Years               Months

[24 ▼]              [0 ▼]
```

Features:

* Dropdown selection
* Prevents invalid values
* Supports pediatric calculations

---

### Gender

```
Gender

( Male ) ( Female )
```

Features:

* Radio button selection
* Required field

---

### Height

```
Height

Feet                Inches

[5 ▼]               [10 ▼]

5'10" = 177.8 cm
```

Alternative Mode:

```
Height (CM)

[177.8]
```

Features:

* Dynamic conversion display
* Unit switching support

---

### Weight

```
Weight (KG)

[70.5]

70.5 kg = 155.4 lbs
```

Alternative Mode:

```
Weight (LBS)

[155.4]

155.4 lbs = 70.5 kg
```

Features:

* Decimal support
* Live conversion

---

### Calculate Button

```
[ Calculate BMI ]
```

Style:

* Blue-Green Gradient
* Rounded corners
* Hover animation

---

# 4. BMI Result Card

```
Age: 24y 0m

21.2

Normal Weight

Health Score: 95/100
```

Features:

* Large BMI value
* Category color coding
* Health score indicator

---

# 5. Health Compass Gauge

## Gauge Concept

Semi-circular arc divided into four categories:

```
Underweight | Normal | Overweight | Obese
```

Color Mapping:

| Category    | Color  |
| ----------- | ------ |
| Underweight | Blue   |
| Normal      | Green  |
| Overweight  | Orange |
| Obese       | Red    |

---

## Indicator

Current Design:

* Animated needle

Future Enhancement:

* Animated category-colored marker
* Smooth transition between values

---

## Labels

```
Underweight
10 - 18.5

Normal
18.5 - 25

Overweight
25 - 30

Obese
30 - 40
```

Each label uses matching category colors.

---

# 6. Validation Rules

## Age

* Required
* Must be greater than 0 months

---

## Height

Feet:

* Integer only
* Range 0-8

Inches:

* Integer only
* Range 0-11

CM:

* Positive value only

---

## Weight

* Positive value
* Decimal allowed
* Maximum 1 decimal place recommended

Examples:

Valid:

* 70
* 70.5

Invalid:

* -10
* abc

---

# 7. Health Score Logic

Example Formula:

```
100 - (BMI deviation from ideal range)
```

Range:

| Score    | Status          |
| -------- | --------------- |
| 90-100   | Excellent       |
| 75-89    | Good            |
| 60-74    | Fair            |
| Below 60 | Needs Attention |

---

# 8. Color Palette

Primary Gradient:

```
#14B8A6 → #0EA5E9
```

Underweight:

```
#3B82F6
```

Normal:

```
#22C55E
```

Overweight:

```
#F59E0B
```

Obese:

```
#EF4444
```

Background:

```
#F8FAFC
```

Card Background:

```
#FFFFFF
```

---

# 9. Responsive Design

Desktop:

* Two-column height inputs
* Wider gauge

Tablet:

* Responsive grid layout

Mobile:

* Single-column layout
* Touch-friendly controls
* Optimized gauge size

---

# 10. Future Enhancements

Phase 2:

* BMI history
* Local storage persistence
* User profiles

Phase 3:

* Pediatric BMI percentile charts
* AI health recommendations

Phase 4:

* Google Fit integration
* Apple Health integration
* Wearable device synchronization
