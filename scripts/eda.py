import matplotlib.pyplot as plt

def plot_price_trend(df):
    plt.figure(figsize=(14,5))
    plt.plot(df.index, df["Price"])
    plt.title("Brent Oil Price Trend (Monthly)")
    plt.show()

def plot_volatility(df):
    plt.figure(figsize=(14,5))
    plt.plot(df.index, df["log_return"])
    plt.title("Brent Oil Log Returns (Volatility)")
    plt.show()
