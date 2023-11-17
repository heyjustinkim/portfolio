---
author: Justin Kim
pubDatetime: 2023-11-14
title: Dashboard Design
postSlug: dashboard-design
featured: false
draft: false
tags:
  - project
  - UX
  - Altum
description: Help users navigate the Jenni writing service ecosystem.
cover: /assets/document_model.png
coverAlt: test
ogImage: ./public/astropaper-og.jpg
---

![A grid showing multiple articles as interactive boxes.](/assets/document_model.png)

## Table of contents

## Overview

- Client: Altum Inc. (Startup)
- Duration: Nov. 2019 – Oct. 2020

### Summary

- Users of Altum’s AI-assisted writing service, Jenni, needed an easier way to access information on Jenni’s dashboard.

### Roles

UX Designer, UI Designer, User Researcher

## Background

Multiple users reported difficulty with accessing articles on Jenni. Altum wanted to launch features that mitigate pain points and make searching for information easy.

## Goals

We hypothesized that improving the user experience of the dashboard would see a decrease in complaints and/or an increase in compliments from users.

## Process

The steps of Altum's design process are:

- **Define.** Defining our users and the MVP design.
- **Ideate.** Ideating on design possibilities.
- **Test.** Testing pre-release ideations.
- **Observe.** Observing post-release outcomes.

![A graphic showing a loop around Define and Ideate. Test and Observe aren't looped.](@assets/images/process.png)

<p class="post-image">The Altum design process.</p>

## Define

In the Jenni ecosystem, our various users included content writers, customers, editors, and admins.

![Notes detailing a user interview.](@assets/images/dashboard/interview.png)

<p class="post-image">A user interview with one of our editors.</p>

After collecting the relevant user insights I experimented with making quick design specs that succinctly captured the design’s goals and intentions.

![Spreadsheet with details for the design spec.](@assets/images/dashboard/spec.png)

<p class="post-image">The design spec I made for the article rejection feature. Here I listed requirements in relation to their contexts and what UI components were necessary to incorporate.</p>

## Ideate

There were multiple features involved with the Dashboard design.

A filter system for sorting articles by category (in-progress, finished, etc).

![List of articles with filter options.](@assets/images/dashboard/filter_old.png)

<p class="post-image">The first iteration of the article filtering system.</p>

A graph visualizing a client’s articles in their various stages (in-progress, finished, etc).

![A vertical bar graph showing the various stages of article completion.](@assets/images/dashboard/graph.png)

A page navigation system for more easily going through lists of article information.

![UI navigation components according to usage-scenarios.](@assets/images/dashboard/nav_system.png)

<p class="post-image">The components and scenarios of the new navigation system.</p>

![A table of statistics about individual articles.](@assets/images/dashboard/nav_old.png)

<p class="post-image">An example of the original dashboard navigation.</p>

![Dashboard navigation with the new UI components.](@assets/images/dashboard/nav_new.png)

<p class="post-image">The new navigation system applied to the dashboard.</p>

A custom interface for Editors to accept/reject articles.

![Dashboard for editors with full tables detailing articles.](@assets/images/dashboard/editor_dash.png)

<p class="post-image">Full Editor dashboard layout with drop down options. Note: This iteration was before the new navigation system.</p>

![Dialog box with options to edit, reject, or approve an article.](@assets/images/dashboard/editor_modal.png)

<p class="post-image">Dialog box with Editor-only functions for accepting and rejecting articles.</p>

A payment processing page redesign.

![Three screens showing a step in subscribing to Jenni AI.](@assets/images/dashboard/payment_old.png)

<p class="post-image">The original 3 step process (fig. 1-3) spread throughout 3 screens. The flow ends with the user seeing their chosen plan (fig. 4).</p>

![New payment process redesign with all steps on one screen.](@assets/images/dashboard/payment_new.png)

<p class="post-image">The redesigned payment page for a streamlined experience.</p>

A page with a form made of text fields for ordering articles and SurferSEO integration (a competitor service our users were also using).

![Order form with various fields for article meta-details.](@assets/images/dashboard/orderform.png)

<p class="post-image">The article order form with auto-keyword variations from competitor link scraping.</p>

![Order form with drag and drop area for SurferSEO export files.](@assets/images/dashboard/surfer.png)

<p class="post-image">The article order form with SurferSEO integration. Pictured: A user has just uploaded a .txt file from SurferSEO and the dashboard has populated the order form with keyword variations from the file.</p>

A tile-based layout redesign where articles are individually clickable objects as part of the SaaS transition.

![Grid of documents with titles and dates created](@assets/images/dashboard/document_layout.png)

## Test

User testing was done with less resources due to competing interest in the AI-assisted word processor.

![Screenshot of a video call for a user test.](@assets/images/dashboard/usertest.png)

<p class="post-image">Screenshot of user testing with one of our editors. “Guest” is the editor’s phone and not a 3rd party.</p>

## Observe

With success metrics of a decrease in complaints and/or an increase in compliments from users we saw a mixed bag of success and failures.

## Reflection

The Dashboard was an interesting lesson in the importance of small details combining into a major influence on a user’s experience.

## Next steps

My next steps would have included:

- Validating the filtering system during user interviews with clients.
- Discussing with Development if a more refined chart could be built using existing API’s.
