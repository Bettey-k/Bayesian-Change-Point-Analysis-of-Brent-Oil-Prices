import pandas as pd
import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../"))

def load_prices():
    path = os.path.join(BASE_DIR, "data/raw/BrentOilPrices.csv")
    df = pd.read_csv(path)
    df["Date"] = pd.to_datetime(df["Date"])
    return df.sort_values("Date")

def load_events():
    path = os.path.join(BASE_DIR, "data/processed/events.csv")
    return pd.read_csv(path)
