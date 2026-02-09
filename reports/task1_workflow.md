# Task 1: Data Analysis Workflow and Model Understanding

## 1. Business Objective
The objective of this project is to analyze historical Brent oil prices to identify
structural breaks caused by major geopolitical events, economic shocks, and OPEC
policy decisions. Understanding these regime changes helps investors, policymakers,
and energy companies manage risk and plan under uncertainty.

---

## 2. Data Analysis Workflow

The analysis follows the steps below:

1. Load historical Brent oil price data from CSV.
2. Validate data types and handle missing values.
3. Aggregate daily prices to monthly averages to reduce noise.
4. Compute log returns to stabilize variance.
5. Perform exploratory time series analysis:
   - Trend analysis
   - Volatility inspection
   - Stationarity testing
6. Apply Bayesian change point detection to identify structural breaks.
7. Compare detected change points with known real-world events.
8. Quantify parameter changes before and after each change point.
9. Communicate insights through reports, visualizations, and notebooks.

---

## 3. Event Data Research and Integration

A structured events dataset is stored in:

`data/processed/events.csv`

This dataset includes:
- Event start date
- Event description
- Event category
- Expected market impact

During analysis, detected change points are cross-checked against event dates
within a ±3–6 month window to validate temporal alignment.

---

## 4. Assumptions and Limitations

### Assumptions
- Major global events influence oil price regimes.
- Markets may react with delay or anticipation.
- Monthly aggregation preserves long-term regime changes.

### Correlation vs Causation
This analysis identifies **statistical correlations in time**, not causal effects.
A detected change point coinciding with an event does not prove that the event
caused the price shift.

### Limitations
- Multiple overlapping events may affect prices simultaneously.
- External macroeconomic variables are not explicitly modeled.
- Change point detection is sensitive to data frequency and noise.

---

## 5. Communication Channels

Results will be communicated via:
- Technical reports (Markdown / PDF)
- Annotated Jupyter notebooks
- GitHub repository documentation
- A future interactive dashboard
