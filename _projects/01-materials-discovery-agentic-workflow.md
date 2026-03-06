---
title: "Materials discovery: agentic AI workflow"
subtitle: "Closing the loop from literature → simulation → verification"
order: 1
tech:
  - Python
  - LAMMPS
  - ASE
  - DFT
  - LLM agents
links:
  - label: "GitHub (URSA - lammps_agent)"
    url: "https://github.com/lanl/ursa/tree/lammps_agent"
cover: "/assets/img/covers/materials-agentic-cover.png"
---

### What it is

An end-to-end **agentic workflow** for materials discovery: the system can search context (papers/notes), propose candidate structures, run simulations (e.g., **MD** and **DFT** via tools such as **LAMMPS** and **ASE**), and then **review/correct outcomes** using structured reasoning.

### Why it matters

Materials pipelines typically fail at the handoff between steps (literature → setup → simulation → analysis). This project focuses on making the loop **reliable, scalable, and reproducible**.

### What I contributed

- Designed specialized AI agents that coordinate tasks across simulation stacks.
- Built guardrails for simulation correctness (detecting failed runs, unstable dynamics, and inconsistent outputs).
- Integrated tooling to support iterative refinement and provenance tracking.

### Technologies used

- Python, tool orchestration
- LAMMPS + ASE integration
- DFT/MD workflows
- LLM-based planning, verification, and correction

> Notes: This work is listed as **manuscript in preparation** on my resume.
