import pymc as pm
import numpy as np

def build_change_point_model(returns):
    n = len(returns)

    with pm.Model() as model:
        tau = pm.DiscreteUniform("tau", 0, n-1)
        mu_1 = pm.Normal("mu_1", 0, 1)
        mu_2 = pm.Normal("mu_2", 0, 1)
        sigma = pm.HalfNormal("sigma", 1)

        mu = pm.math.switch(np.arange(n) < tau, mu_1, mu_2)
        pm.Normal("obs", mu=mu, sigma=sigma, observed=returns)

    return model
