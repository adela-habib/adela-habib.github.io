---
layout: page
title: Projects
permalink: /projects/
---

<div class="grid">
  {% assign items = site.projects | sort: 'order' %}
  {% for p in items %}
    <a class="card" href="{{ p.url | relative_url }}">
      <div class="card-top">
        {% if p.cover %}
          <img class="card-cover" src="{{ p.cover | relative_url }}" alt="{{ p.title }} cover">
        {% else %}
          <div class="card-cover placeholder"></div>
        {% endif %}
      </div>
      <div class="card-body">
        <h3>{{ p.title }}</h3>
        {% if p.subtitle %}<p class="muted">{{ p.subtitle }}</p>{% endif %}
        <p>{{ p.excerpt | strip_html | truncate: 160 }}</p>
        {% if p.tech %}
          <div class="tag-row">
            {% for t in p.tech %}<span class="tag">{{ t }}</span>{% endfor %}
          </div>
        {% endif %}
      </div>
    </a>
  {% endfor %}
</div>
