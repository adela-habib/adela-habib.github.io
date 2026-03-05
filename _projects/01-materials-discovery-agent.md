---
title: "Materials discovery agentic workflow"
order: 1
featured: true
summary: "AI-agent workflow that closes the loop from literature search to simulation (MD/DFT) for materials property prediction and validation."
role: "Lead developer / researcher"
org: "Los Alamos National Laboratory"
timeframe: "2021–present"
technologies:
  - Python
  - LLM tools / agentic workflows
  - ASE
  - LAMMPS
  - DFT (e.g., VASP / Quantum Espresso)
  - HPC
links:
  - label: "URSA (LANL) — lammps_agent"
    url: "https://github.com/lanl/ursa/tree/lammps_agent"
  - label: "GitHub profile"
    url: "https://github.com/adela-habib"
---

### What it is
An end-to-end workflow that uses specialized AI agents to help execute the *materials discovery loop*: find candidate materials from the literature, set up simulations, run property predictions (e.g., molecular dynamics and DFT), and review/correct outcomes using reasoning and validation steps.

### Why it matters
This loop reduces time-to-insight by automating repetitive steps (data gathering, input generation, job orchestration) while keeping a scientist-in-the-loop for quality control.

### What I did
- Designed the agent architecture and tool interface around common simulation packages.
- Integrated simulation execution and post-checks to catch failures and inconsistencies.
- Built in review/correction mechanisms to improve robustness.
