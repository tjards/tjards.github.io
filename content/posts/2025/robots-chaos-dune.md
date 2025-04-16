---
date: '2025-02-02T16:15:45-05:00'
draft: false
title: 'Robots, Chaos, and Dune: Reflections on Unpredictability'
tags: ['culture']
categories: ['personal']
ShowToc: false
---

*My thoughts on how a meteorology paper published in 1963 explains the difference between two giants of science fiction, with some personal reflections on how they each influence my own work.*

## Introduction

My research [began](https://onlinelibrary.wiley.com/doi/abs/10.1002/acs.2882) in the narrow field of reinforcement learning applied to constrained, optimal control. Solutions were well-structured, precise, and mathematically rigorous. This fit neatly into a deterministic view of the world - if I defined everything correctly and did the math, things would work out well. There was a comfort in this. 

But then I started dealing with more than one robot. At first, I felt I could squeeze out a few solid papers by just naively extending my ideas into teams of robots. Little did I expect, when each robot started learning in isolation using the methods I had established earlier, they were torn apart by competition. Of course, more formally, this is where I learned that multi-agent reinforcement learning is not as simple as applying single-agent reinforcement learning to multiple agents. What I missed was an appreciation for the role of interactions between the robots and the need to negotiate on shared goals. This naturally led into research centered on [cooperative reinforcement learning](https://link.springer.com/article/10.1007/s10846-021-01387-1), [network control](https://ieeexplore.ieee.org/abstract/document/9931405), and [complex systems](https://ieeexplore.ieee.org/abstract/document/10741086). 

At the same time, I started reading science fiction and quickly started feeling themes from my research were popping up in these novels. Some notable favourites include Cixin’s *The Three-Body Problem* (2008), Banks’ *Surface Detail* (2010), and Stephenson’s *Seveneves* (2015). Then I learned about Chaos theory and everything made sense. Here I offer my reflections on how concepts from the above works are related to each other. 

## Chaos

In 1963, American meteorologist Edward N. Lorenz upended centuries of scientific thought with his groundbreaking paper, [Deterministic Nonperiodic Flow](https://journals.ametsoc.org/view/journals/atsc/20/2/1520-0469_1963_020_0130_dnf_2_0_co_2.xml), forever altering our understanding of nature’s unpredictability. His research revealed a whole class of systems for which small variations in initial conditions lead to vastly different outcomes, making long-term predictions impossible (even if we have the exact equations that describe their dynamics). His work inspired a generation of scientists to relax their assumptions about reality and laid the foundation for what became Chaos theory.  

As the scientific community grappled with the consequences of Lorenz’s work, so too did popular literature. While a classical example of Chaos named the three-body-problem was recently popularized in the aforementioned novel and [Netflix series](https://www.imdb.com/title/tt13016388/) of a similar name, this is the product of a stark shift in contemporary geek literature that occurred in the early 1960’s.

## A Lorenzian Shift in Literature 

A cursory review of science fiction and fantasy leading up to the early 1950’s reveals a tradition rooted in structure, order, and control. Perhaps an examination of the certainty scientific progress appeared to provide, stories were filled with examples where technology, psychology, and even history itself could be predicted with certainty and controlled by those in power. Examples include Orwell’s *1984* (1949), Asimov’s *I, Robot* (1950) and *Foundation* (1951), and Tolkien’s *Lord of the Rings* (1954). Heroes in such stories were defined by their unwavering commitment to virtuous principles and their ability to stand firm against danger and temptation.

In contrast, by the early 1960’s, fictional narratives began emphasizing qualities of fluidity, uncertainty, and emergence - mirroring the discoveries of Lorenz. Examples include Heinlein’s *Strangers in a Strange Land* (1961), Herbert’s *Dune* (1965), Dick’s *Do Androids Dream of Electric Sheep?* (1968), and Kubrick’s *2001: A Space Odyssey* (1968). These stories reflect a growing recognition that the systems around us, whether they be technical, political, economic, or social, are far less predictable than we once believed. In these later works of fiction, the idea of a hero gives way to the antihero—morally ambiguous and flawed - navigating a complex world of compromised ideals and a prioritization of survival over virtue. 

## From Foundation to Dune

Perhaps the quintessential example of this effect is found in comparing two giants of science fiction - Asimov’s *Foundation* (1951) and Herbert’s *Dune* (1965) - separated by the decade in which Chaos was discovered. While both works appear similar on the surface, exploring the rise and fall of massive, space-faring intergalactic empires over thousands of years, they differ in one fundamental respect - the confidence of prediction. 

In *Foundation* (1951), the science of *psychohistory* mathematically predicts the inevitable collapse of a galactic empire. In response, an institution named the Foundation strives to preserve knowledge and guide civilization as is navigates the unfolding crisis. A central theme of the story is inevitability, downplaying the role of individual agency in shaping the future.

By contrast, Herbert’s *Dune* (1965) emphasizes the power one individual can play in shaping an uncertain future. Facing knowledge of an impending threat to humanity, Paul Atreides sets humanity on the *Golden Path*. In a universe where machines committed to destroying humanity have the gift of *prescience* - that is, the ability to predict the future - the Golden Path is one in which long-term predictions are impossible. Over thousands of years, the descendants of Atreides steer humanity onto a trajectory in which small variations lead to vastly different outcomes (what Lorenz would describe as a chaotic system), thereby protecting humanity from the future-predicting machines. 

## Conclusion

Lorenz’s discovery of Chaos shattered the illusion that the evolution of complex systems could be predicted. At the same time, popular literature was undergoing a similar transformation. Predictable, deterministic worlds of the 1950’s gave way to the uncertainty and chaos of the 1960’s. Reliable predictions gave way to visions of the future in which minor disruptions changed everything. The Lorenzian shift in literature reflects a broader realization I came to as I ventured beyond the safety of student life and into the vast unknown of adulting and independent research - things rarely work out the way you think they will.