import numpy as np

def prepare_monthly_returns(df):
    df_m = df.set_index("Date").resample("ME").mean().dropna()
    df_m["log_return"] = np.log(df_m["Price"]).diff()
    return df_m.dropna()
