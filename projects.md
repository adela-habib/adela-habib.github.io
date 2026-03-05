---
layout: page
title: "Projects"
permalink: /projects/
subtitle: "Selected research and software. Each entry includes a short description, technologies, and links/media when available."
---

<div class="projects-list">
  {% assign items = site.projects | sort: 'order' %}
  {% for p in items %}
    <div class="project-item">
      <div class="title">
        <h3><a href="{{ p.url | relative_url }}">{{ p.title }}</a></h3>
        <span class="meta">{{ p.timeframe }}</span>
      </div>
      <p>{{ p.summary }}</p>
      {% if p.technologies %}
      <div class="tech">
        {% for t in p.technologies %}<span class="chip">{{ t }}</span>{% endfor %}
      </div>
      {% endif %}
    </div>
  {% endfor %}
</div>
