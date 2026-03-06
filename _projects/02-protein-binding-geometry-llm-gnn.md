---
title: "Protein design: LLM + geometric deep learning"
subtitle: "Binding-site prediction on surface geometry graphs"
order: 2
tech:
  - PyTorch
  - PyTorch Geometric
  - Geometric Transformers
  - Protein LLMs
links:
  - label: "LinkedIn"
    url: "https://www.linkedin.com/in/adela-habib/"
cover: "/assets/img/covers/protein-gnn-cover.png"
---

### Overview

A modeling pipeline to identify **protein–protein binding sites** by representing protein pair surfaces as **coarse surface geometry graphs** and combining:

- **Geometric transformers / EGNN-style models** for 3D structure
- **Protein large language models** for sequence-aware context

### Key outcomes (from resume)

- Achieved **~6× speedup** and **~8% accuracy improvement** against surface-based binding-site identification baselines.
- Benchmarked structure-aware protein representations (geometric transformers, EGNNs, SchNet-like architectures).

### Technologies

- PyTorch + PyTorch Geometric
- Graph construction on surface meshes / point clouds
- Geometric attention, equivariant architectures

> Notes: Code is listed as on LANL GitLab; manuscript in preparation.
