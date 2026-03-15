---
date: '2026-03-15T13:31:41-04:00'
draft: false
title: 'Emergent Manifolds in Swarms: Hidden Spaces for Robots to Coordinate'
tags: ["featured"]
categories: ["research"]
ShowToc: false
---

In [recent work](https://doi.org/10.1016/j.automatica.2025.112221), we showed that stable formations can emerge through negotiation in a lower-dimensional latent space (which we called geometric *embeddings*). Appropriately constructed embeddings yield globally stable equilibria based solely on local observations and decisions. We extend this work by applying learning techniques to optimize the geometry of the swarm along the resultant equilibrium manifold. 

We extend previous work by applying reinforcement learning (RL) to control the orientation of the swarm. In a proof-of-concept, we implem
this idea using [Continuous Action Learning Automata](https://doi.org/10.1007/978-3-540-39737-3_119) to learn the optimal orientation (azimuth and altitude angle) of the embedding plane. In this implementation, collective learning is coordinated by a randomly-selected leader agent. 

Updates on progress posted [here](https://github.com/tjards/multi-agent_sim/blob/master/docs/readme_subpages/dynamic_structures.md).

This will also be the topic of an upcoming talk at [Ingenuity Labs Research Institute](https://ingenuitylabs.queensu.ca/). Time/location TBD. 