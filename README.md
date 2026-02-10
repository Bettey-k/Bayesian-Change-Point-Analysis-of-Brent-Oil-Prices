# Bayesian Change Point Analysis of Brent Oil Prices

## Project Overview

This project analyzes historical Brent crude oil prices to identify **structural breaks** and understand how **geopolitical events, economic shocks, and OPEC policy decisions** influence price dynamics.  

Using **Bayesian change point detection**, the project detects regime shifts in the oil market and visualizes these insights through an **interactive dashboard** built with Flask (backend) and React (frontend).

The project is structured into three main tasks:
- **Task 1:** Data analysis workflow and event research  
- **Task 2:** Time series analysis and Bayesian change point modeling  
- **Task 3:** Interactive dashboard for result exploration  

---

## Project Structure

```text
Bayesian-Change-Point-Analysis-of-Brent-Oil-Prices/
│
├── data/
│   ├── raw/
│   │   └── BrentOilPrices.csv
│   ├── processed/
│   │   └── events.csv
│
├── scripts/
│   ├── data_loader.py
│   ├── preprocessing.py
│   ├── eda.py
│   └── change_point_model.py
│
├── notebooks/
│   └── 01_change_point_analysis.ipynb
│
├── backend/
│   ├── app.py
│   ├── routes/
│   │   ├── prices.py
│   │   ├── events.py
│   │   └── changepoints.py
│   └── utils/
│       └── data_loader.py
│
├── frontend/
│   └── (React application files)
│
├── reports/
│   ├── task1_workflow.md
│   └── task2_summary.md
│
├── requirements.txt
├── .gitignore
└── README.md

Data Sources

Brent Oil Prices: Historical daily Brent crude oil prices (CSV format)

Event Data: Manually curated dataset containing major geopolitical events, economic crises, and OPEC policy decisions with dates and expected impacts

Task 1: Data Analysis Workflow and Event Research
Objectives

Define a clear data analysis workflow

Research and structure major real-world events affecting oil prices

State assumptions, limitations, and communication strategy

Key Outputs

A documented analysis workflow (reports/task1_workflow.md)

A structured events dataset with 10+ major events (data/processed/events.csv)

Explicit discussion of:

Correlation vs. causation

Event validation against detected change points

Data and modeling limitations

Task 2: Time Series Analysis and Change Point Modeling
Analysis Steps

Data loading and validation

Monthly aggregation to reduce noise

Log-return computation

Exploratory data analysis:

Trend analysis

Volatility inspection

Stationarity testing using the Augmented Dickey–Fuller (ADF) test

Bayesian change point modeling using PyMC

Interpretation of detected structural breaks

Model Choice

A Bayesian change point model is used to:

Detect regime shifts probabilistically

Estimate parameters before and after change points

Quantify uncertainty in detected break locations

Key Findings

A major structural break is detected around early 2020

The change aligns with the COVID-19 pandemic and OPEC+ production cuts

Post-change regime shows higher volatility and altered price dynamics

A written interpretation is provided in reports/task2_summary.md.

Task 3: Interactive Dashboard
Dashboard Architecture

Backend (Flask):

REST APIs serving:

Historical price data

Event data

Change point results

Frontend (React):

Interactive line chart of Brent oil prices

Event highlight markers

Bayesian change point marker

Date range filtering for exploratory analysis

Responsive layout for different screen sizes

Key Features

Visualization of historical price trends

Event-based vertical markers to highlight real-world shocks

Explicit display of Bayesian change point results

Interactive date filtering for focused analysis
Setup Instructions
1. Create Virtual Environment
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate

2. Install Dependencies
pip install -r requirements.txt

3. Run the Analysis Notebook
jupyter notebook notebooks/01_change_point_analysis.ipynb

Running the Dashboard
Backend (Flask)

From the project root:
python -m backend.app

Backend runs at:
http://127.0.0.1:5000

Frontend (React)
cd frontend
npm install
npm start

Frontend runs at:
http://localhost:3000

Future Work

Incorporate macroeconomic indicators (GDP, inflation, exchange rates)

Extend to multi-change-point or regime-switching models

Add predictive forecasting capabilities

Deploy the dashboard to a cloud environment
Author

Bayesian Change Point Analysis Project
KAIM – Week 11