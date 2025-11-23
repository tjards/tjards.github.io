---
date: '2025-11-16T11:31:32-05:00'
draft: true
title: 'Mas_directions'
tags: []
categories: ['research']
ShowToc: true
tools: []
---

# Multi-agent Control is Quietly Entering a New Theoretical Era

In late 2021, while the world was still grappling with a global pandemic, I was searching for ways to stay productive and—well—sane. Like many young researchers, I wanted a fresh direction that felt relevant to a changing world and built on what I already knew. Having spent years studying dynamical systems, control theory, and reinforcement learning, extending these ideas to more complex multi-agent settings seemed like a natural next step. I had always been drawn to Reynolds’s early biologically inspired bird-flocking work [2], and it eventually led me into the rich and fascinating world of multi-agent systems (MAS).

What I discovered was a quiet revolution underway. For nearly two decades, the MAS community operated inside a beautifully structured theoretical framework-one grounded in graph Laplacians, consensus protocols, and Lyapunov stability proofs. At first, I found it frustrating to develop new insights beyond this rigid structure-a feeling exacerbated by a deluge of papers that seemed to rehash the same ideas for niche applications... or just find reasons to apply machine learning to problems already solved by classical methods. However, beneath all this well-structured noise and apparent stability, I discovered a new frontier already being explored. This new frontier was characterized by operations in hidden spaces. 



## The Previous Frontier

The paper that first caught my attention was Olfati-Saber’s 2006 work on flocking for multi-agent dynamic systems [5]. I found the synthesis of graph theory, control theory, and distributed algorithms elegant. Watching simple, strict rules generate elaborate, scalable group behaviours was captivating. What I did not appreciate at the time, however, was the broader context surrounding this work.

If you were doing distributed control research between 2003 and 2010, you were living through a golden age. Olfati-Saber’s paper was among the most prominent in a wave of foundational contributions exploring how to coordinate multiple agents effectively. Building on earlier ideas from Fiedler [1], Jadbabaie et al. [3], and others [4–6], this period saw a flurry of activity that culminated in the comprehensive texts by Ren & Beard [7], Mesbahi & Egerstedt [8], and Ren & Cao [9]. Collectively, these efforts established the theoretical foundations of modern multi-agent systems.

Roughly, I would summarize the key insights from this era as follows:

1. Agents can generally be modeled at particles in free space using double-integrator dynamics.

2. The relationships between agents can be captured using graph theory, with nodes representing agents and edges representing their interactions.

3. We can build Lyapunov functions to examine the stability and convergence of the overall system.

4. Control laws can be designed using simple rules of cohesion, separation, and alignment based on local information.

5. These control laws typically correspond to gradient descent flows of well-chosen Lyapunov functions.








## References

### Foundational 

**1. F. Fiedler (1973).**  
[*Algebraic connectivity of graphs*](https://eudml.org/doc/12723). *Czechoslovak Mathematical Journal*.  


**2. C. W. Reynolds (1987).**  
[*Flocks, herds and schools: A distributed behavioral model*](https://doi.org/10.1145/37401.37406). *SIGGRAPH '87: Proceedings of the 14th Annual Conference on Computer Graphics and Interactive Techniques*.  


**3. A. Jadbabaie, J. Lin, & A. S. Morse (2003).**  
[*Coordination of groups of mobile autonomous agents using nearest neighbor rules*](https://doi.org/10.1109/TAC.2003.812781). *IEEE Transactions on Automatic Control*.  


**4. R. Olfati-Saber & R. M. Murray (2004).**  
[*Consensus problems in networks of agents with switching topology and time-delays*](https://doi.org/10.1109/TAC.2004.834113). *IEEE Transactions on Automatic Control*.  


**5. R. Olfati-Saber (2006).**  
[*Flocking for multi-agent dynamic systems: algorithms and theory*](https://doi.org/10.1109/TAC.2005.864190). *IEEE Transactions on Automatic Control*.  


**6. R. Olfati-Saber, J. A. Fax, & R. M. Murray (2007).**  
[*Consensus and cooperation in networked multi-agent systems*](https://doi.org/10.1109/JPROC.2006.887293). *Proceedings of the IEEE*.  


**7. W. Ren & R. Beard (2008).**  
[*Distributed Consensus in Multi-Vehicle Cooperative Control*](https://link.springer.com/book/10.1007/978-1-84800-015-5). Springer.  


**8. M. Mesbahi & M. Egerstedt (2010).**  
[*Graph Theoretic Methods in Multi-Agent Networks*](https://doi.org/10.2307/j.ctt1287k9b). Princeton University Press.  


**9. W. Ren & Y. Cao (2011).**  
[*Distributed Coordination of Multi-Agent Networks: Emergent Problems, Models, and Issues*](https://link.springer.com/book/10.1007/978-0-85729-169-1). Springer.  



### Learning 

**10. K. S. Narendra & M. A. L. Thathachar (1974).**  
[*Learning automata – A survey*](https://doi.org/10.1109/TSMC.1974.5408453). *IEEE Transactions on Systems, Man, and Cybernetics*.  


**11. L. Busoniu, R. Babuska, B. De Schutter, & D. Ernst (2010).**  
[*Reinforcement Learning and Dynamic Programming Using Function Approximators*](http://rlbook.busoniu.net/). CRC Press.  


**12. Y. Yang, R. Luo, M. Li, M. Zhou, W. Zhang, & J. Wang (2018).**  
[*Mean field multi-agent reinforcement learning*](http://proceedings.mlr.press/v80/yang18d.html). *Proceedings of ICML*.  


**13. B. Recht (2019).**  
[*A tour of reinforcement learning: The view from continuous control*](https://doi.org/10.1146/annurev-control-053018-023825). *Annual Review of Control, Robotics, and Autonomous Systems*.  


**14. K. Zhang, Z. Yang, & T. Başar (2021).**  
[*Multi-agent reinforcement learning: A selective overview*](https://link.springer.com/chapter/10.1007/978-3-030-60990-0_12). In *Handbook of Reinforcement Learning and Control*. Springer.  


**15. G. Jing, H. Bai, J. George, A. Chakrabortty, & P. K. Sharma (2024).**  
[*Distributed multiagent reinforcement learning based on graph-induced local value functions*](https://doi.org/10.1109/TAC.2024.3375248). *IEEE Transactions on Automatic Control*.  

### Hidden Spaces

**16. B. O. Koopman (1931).**  
[*Hamiltonian systems and transformation in Hilbert space*](https://doi.org/10.1073/pnas.17.5.315). *Proceedings of the National Academy of Sciences*.  


**17. C. W. Rowley, I. Mezić, S. Bagheri, P. Schlatter, & D. S. Henningson (2009).**  
[*Spectral analysis of nonlinear flows*](https://doi.org/10.1017/S0022112009992059). *Journal of Fluid Mechanics*.  


**18. B. Lusch, J. N. Kutz, & S. L. Brunton (2018).**  
[*Deep learning for universal linear embeddings of nonlinear dynamics*](https://www.nature.com/articles/s41467-018-07210-0). *Nature Communications*.  


**19. M. Korda & I. Mezić (2018).**  
[*Linear predictors for nonlinear dynamical systems: Koopman operator meets model predictive control*](https://doi.org/10.1016/j.automatica.2018.03.046). *Automatica*.  


**20. J. L. Proctor, S. L. Brunton, & J. N. Kutz (2018).**  
[*Generalizing Koopman theory to allow for inputs and control*](https://doi.org/10.1137/16M1062296). *SIAM Journal on Applied Dynamical Systems*.  


**21. P. T. Jardine & S. G. Givigi (2025).**  
[*Emergent homeomorphic curves in swarms*](https://doi.org/10.1016/j.automatica.2024.112221). *Automatica*, Vol. 176.  
