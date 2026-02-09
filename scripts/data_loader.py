import pandas as pd

def load_price_data(path: str) -> pd.DataFrame:
    if not path:
        raise ValueError("Path to price data must be provided.")

    df = pd.read_csv(path)

    if "Date" not in df.columns or "Price" not in df.columns:
        raise ValueError("CSV must contain 'Date' and 'Price' columns.")

    df["Date"] = pd.to_datetime(df["Date"])
    return df.sort_values("Date")
