---
date: '2024-11-24T14:47:03-05:00'
draft: false
title: 'A Survey of Potential Functions for Multi-agent Systems'
tags: ["survey"]
categories: ["general"]
---

I recently conducted a [minor survey](https://github.com/tjards/survey_potential_functions) on potential functions in the context of multi-agent systems. Collective potential functions are a common way to produce desired separation between agents in a swarm. Fig. 1 provides an illustration of one such scenario.

<figure>
  <img src="/img/2024/animation2D_pinning4.gif" alt="" style="width: 400px; height: auto">
  <figcaption>Fig. 1: Illustration of potential functions in action.</figcaption>
</figure>

Note that the agents maintain some common distance between eachother, except when navigating around the obstacles in yellow. 

## Potential

A common potential function used in molecular dynamics and lattice formation with equilibrium distances is the [Lennard-Jones](https://www.jstor.org/stable/94265) potential function:

$$
V = \frac{a}{(\|\mathbf{x}_i - \mathbf{x}_j\|)^{12}} - \frac{b}{(\|\mathbf{x}_i - \mathbf{x}_j\|) ^6}
$$

where **x<sub>i</sub>** and **x<sub>j</sub>** are the positions of agents *i* and *j* and *a* and *b* are gain parameters selected for desired performance. Notice that as the agents get closer together, the value of the *a*-potential decreases, while the value of *b*-potential increases. The idea is to select parameters that balance the need for cohesion (*a*) with the need to avoid collisions (*b*).  

## Gradient

We control the agents by minimizing the gradient of *V* over time (often through gradient descent methods). This requires us to compute the gradient as follows:

$$
\nabla V = \left( \frac{-12a}{(\|\mathbf{x}_i - \mathbf{x}_j\| ^{13})} + \frac{6b}{(\|\mathbf{x}_i - \mathbf{x}_j\|) ^7} \right) \hat{\mathbf{u}}
$$

where **u** with the litte hat is a unit vector representing the direction from **x<sub>j</sub>** to **x<sub>i</sub>**. 

## Comparisons

Different potential functions produce different transient and steady-state performance characteristics. Fig. 2 compares some of the more common variants.

<figure>
  <img src="/img/2024/potential_functions.png"  alt="" style="width: 600px; height: auto">
  <figcaption>Fig. 2: Comparison of common potential functions.</figcaption>
</figure>

## Implemention

One of the seminal works in [multi-agent flocking algorithms and theory](https://ieeexplore.ieee.org/document/1605401) provides more sophisticated potential functions and stability analysis tailored for these applications. If you are interested in practical implementations of these and other multi-agent coordination strategies, check out my still-evolving [Multiagent Coordination Simulator](https://github.com/tjards/multi-agent_sim/).

## References

1. My [Survey of Potential Functions for Multi-agent Systems](https://github.com/tjards/survey_potential_functions)

2. J. E. Jones,  ["On the determination of molecular fields"](https://www.jstor.org/stable/94265), *Proceedings of the Royal Society of London. Series A, Containing Papers of a Mathematical and Physical Character*, 106(738), 441-462, 1924.

3. Reza Olfati-Saber, ["Flocking for Multi-Agent Dynamic Systems: Algorithms and Theory"](https://ieeexplore.ieee.org/document/1605401), *IEEE Transactions on Automatic Control*, 
Vol. 51 (3), 2006.

4. My [Multiagent Coordination Simulator](https://github.com/tjards/multi-agent_sim/)

