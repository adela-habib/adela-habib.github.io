---
title: "GPU-optimized inverse factorization for electronic structure"
order: 5
featured: false
summary: "CUDA implementation of an iterative matrix inverse solver optimized for tensor cores, enabling faster quantum molecular dynamics kernels."
role: "Lead developer"
org: "Los Alamos National Laboratory"
timeframe: "2021–2024"
technologies:
  - C++
  - CUDA
  - GPU tensor cores
  - Mixed precision
  - Linear algebra
links:
  - label: "Paper (JCTC 2024) — via Google Scholar"
    url: "https://scholar.google.com/citations?user=yYTKXucAAAAJ&hl=en"
---

### Description
Implemented a GPU-optimized iterative matrix inverse / inverse factorization solver in C++/CUDA with mixed precision on modern AI hardware.

### Key outcome 
Achieved ~3× speedup compared to conventional solvers, supporting scalable quantum molecular dynamics and electronic-structure workflows.
