---
title: "GPU-accelerated inverse factorization"
subtitle: "Mixed-precision matrix methods on tensor cores"
order: 5
tech:
  - C++
  - CUDA
  - Mixed precision
  - Linear algebra
  - HPC
links:
  - label: "Google Scholar (JCTC 2024)"
    url: "https://scholar.google.com/citations?user=yYTKXucAAAAJ&hl=en"
cover: "/assets/img/covers/gpu-linear-algebra-cover.png"
---

### Project description

Implemented a **GPU-optimized iterative matrix inverse solver** targeting **NVIDIA tensor cores** (mixed precision) for efficient inverse overlap matrix factorization in electronic-structure calculations.

### Outcome

- Achieved **~3× speedup** over conventional solvers.
- Published: *Efficient mixed-precision matrix factorization of the inverse overlap matrix…* (J. Chem. Theory Comput., 2024).

### Technologies used

- C++ / CUDA kernels
- Mixed-precision numerical methods
- Performance profiling and optimization for GPU hardware
