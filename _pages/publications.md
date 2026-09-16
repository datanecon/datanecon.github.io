---
layout: page
permalink: /publications/
title: publications
description: Peer-reviewed publications, working papers, and other / policy work, in reverse chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

{%- comment -%}
Search/filter box suppressed for now (small publication count).
To restore it, remove this comment wrapper: {% include bib_search.liquid %}
{%- endcomment -%}

<p class="mt-3 mb-4"><em>Working papers and other writing are listed <a href="#working-papers">further down</a> &darr;</em></p>

<h2 class="mt-4">Peer-reviewed publications</h2>
<div class="publications">
{% bibliography %}
</div>

<h2 id="working-papers" class="mt-5">Working papers</h2>
<div class="publications">
{% bibliography --file working_papers %}
</div>

<h2 class="mt-5">Other / Policy</h2>
<div class="publications">
{% bibliography --file other %}
</div>
