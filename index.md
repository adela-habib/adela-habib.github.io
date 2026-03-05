---
layout: default
title: "Home"
permalink: /
---

<section class="hero">
  <h1>Adela Habib</h1>
  <p>
    Computational scientist specializing in <strong>AI/ML for science</strong>, computational physics/chemistry,
    and <strong>HPC optimization</strong> for scalable simulation and model development.
    I currently work as a Postdoctoral Fellow at Los Alamos National Laboratory.
  </p>

  {% include icons.html %}

  <div class="badges">
    <span class="badge">AI/ML: Transformers, GNNs, Diffusion</span>
    <span class="badge">Comp. Phys/Chem: DFT, MD, rt density-matrix dynamics</span>
    <span class="badge">HPC: CUDA, MPI, GPU tensor/matrix cores</span>
  </div>
</section>

<section class="grid">
  <div class="card">
    <h2>About</h2>
    <p>
      I build accelerated, physics-informed machine learning and simulation workflows for materials and molecular science.
      My work spans first-principles electronic structure, molecular dynamics, geometric deep learning, and
      GPU-optimized numerical methods.
    </p>

    <h2 style="margin-top:14px;">Current focus</h2>
    <ul>
      <li>Agentic AI workflows for materials discovery (literature → simulation → validation)</li>
      <li>Geometric deep learning + protein language models for protein interaction/design</li>
      <li>Physics-informed ML surrogates for electron/charge dynamics in nanostructures</li>
      <li>GPU acceleration of linear algebra kernels for electronic structure methods</li>
    </ul>
  </div>

  <div class="card">
    <h2>Quick links</h2>
    <ul>
      <li><a href="{{ '/projects/' | relative_url }}">Projects</a> — selected research & software</li>
      <li><a href="{{ '/publications/' | relative_url }}">Publications</a> — selected papers (with Google Scholar link)</li>
      <li><a href="{{ '/cv/' | relative_url }}">CV</a> — resume PDF + highlights</li>
    </ul>

    <h2 style="margin-top:14px;">Contact</h2>
    <p style="margin: 0; color: var(--muted);">
      Email: <a href="mailto:adelahanihabib@gmail.com">adelahanihabib@gmail.com</a><br/>
      Location: Los Alamos, NM
    </p>
  </div>
</section>

<section style="margin-top: 18px;">
  <div class="card">
    <h2>Featured projects</h2>
    <div class="projects-list">
      {% assign featured = site.projects | where: 'featured', true | sort: 'order' %}
      {% for p in featured limit: 3 %}
        <div class="project-item">
          <div class="title">
            <h3><a href="{{ p.url | relative_url }}">{{ p.title }}</a></h3>
            <span class="meta">{{ p.timeframe }}</span>
          </div>
          <p>{{ p.summary }}</p>
          {% if p.technologies %}
          <div class="tech">
            {% for t in p.technologies limit: 6 %}<span class="chip">{{ t }}</span>{% endfor %}
          </div>
          {% endif %}
        </div>
      {% endfor %}
    </div>
    <p style="margin-top: 12px;"><a href="{{ '/projects/' | relative_url }}">See all projects →</a></p>
  </div>
</section>
