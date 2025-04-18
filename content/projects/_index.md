---
title: "Projects"
layout: "project-list"
---


{{ define "main" }}
  <main class="main">
    <div class="post-list">
      <h1>Projects</h1>
      {{ range where .Site.RegularPages "Params.categories" "intersect" (slice "project") }}
        {{ partial "components/li.html" . }}
      {{ end }}
    </div>
  </main>
{{ end }}
