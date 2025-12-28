---
date: '2025-12-21T20:27:32-05:00'
draft: true
title: "From Control to Influence - Theory and Practice"
tags: []
ShowToc: true
categories: ["research"]
---

Over the course of three papers, written years apart under different circumstances, both an idea and a person matured along a common arc. The papers ([1](https://doi.org/10.1109/TNSE.2022.3217460), [2](https://doi.org/10.1016/j.automatica.2025.112221), [3](https://doi.org/10.1109/LRA.2025.3634882)) trace the evolution of a simple intuition about how swarms could self-organize into a coherent and increasingly general mathematical theory. Alongside this progression, the author of these papers -- a mid-level executive moonlighting as a research scientist on evenings and weekends -- underwent a parallel transition. Over time, they came to new realizations about their role in the systems and people around them. 

This dual progression was marked by a shift from optimizing individual actions to shaping collective behavior, from solving problems personally to setting conditions under which others could solve them, from **control to influence**.

## Angry birds

Standing at the window of their apartment in 2021, coffee in hand, the author watched a flock of birds mobbing a squirrel. At first glance, the scene appeared chaotic; closer inspection revealed patterns. Long, slow, sweeping arcs from above transitioned smoothly into aggressive dive-bombs, followed by rapid ascents for another pass. At the center of this aerial ballet was the squirrel, darting back and forth. The birds were not merely reacting; they were coordinating —- taking turns, maintaining even spacing, and repeating a bombardment designed to maximize pressure.

The shape was familiar. It resembled figure-eight (or, lemniscate) pattern -- a classic trajectory used in robotics due to favorable energy and control properties. There are numerous variations of lemniscate trajectories, each with unique properties. Below are a few common examples, including lemniscates of Gerono, Bernoulli, and the Dumbbell curve. Notice these are captured inside a circle of fixed radius.

<div style="text-align: center;">
    <img src="https://raw.githubusercontent.com/tjards/twisted_circles/master/2d_3_xy.png"
        style="width: 50%; height: auto; border-radius: 4px;" >
</div>

Typical implementations of these trajectories in mult-agent robotics systems, for example, rely on a preprogrammed maneuvers and each agent having access to their global position. Yet these birds were achieving this complex behaviour through local interactions only, without a central controller. 

Could this behaviour be recreated in synthetic systems?

## Circles are easy

For simple circles, the answer was yes. Previous work had already solved the problem of creating stable, evenly-spaced circular multi-agent formations using local information. The intuition for this is straightforward: agents coordinate around a reference position (i.e., the center of the circle), adjusting their speed based on the relative distances from the neighbours immediately ahead and behind them in the circle. With a shared reference, radius, and desired angular speed, agents can maintain a stable circular trajectory. 

An example of this dynamic encirclement is shown below.

<div style="text-align: center;">
    <img src="https://raw.githubusercontent.com/tjards/dynamic_encirclement/master/Figs/animation_01.gif"
        style="width: 50%; height: auto; border-radius: 4px;" >
</div>

## Just twist the circles

And this is where a new idea took root. Recalling the birds mobbing the squirrel, aren't these lemniscate patterns just circles twisted in space? What if we could leverage the convenient properties of circular formation control by simply twisting the reference frame? Moreover, couldn't we generalize this to a whole class of curves produced by deforming circles?

Building off the 2D image above, let us imagine what this twisting action would look like in 3D. Below are a few examples of these curves from this perspective. All of these curves share the 2D projection shown earlier, but are rotated in space in arbitrary ways. 

<div style="text-align: center;">
    <img src="https://raw.githubusercontent.com/tjards/twisted_circles/master/3d_3.png"
        style="width: 50%; height: auto; border-radius: 4px;" >
</div>

What does this tell us?

This suggest that ..



## new

<div style="text-align: center;">
    <img src="/img/2025/geometric_embeddings/eqn1.png"
        style="width:50%; height:auto; border-radius:4px;">
</div>




