---
author: Justin Kim
pubDatetime: 2024-10-30
title: Developing an Indie Publication's Website
postSlug: developing-an-indie-publications-website
featured: true
draft: false
tags:
  - project
  - showcase
  - GhostCMS
  - Front_End_Development
  - UX_Design
  - UX
description: Coded an indie publication's website using Ghost CMS.
cover: /assets/finalarc_cover.png
coverAlt: Final Arc website displayed on multiple devices.
ogImage: ./public/astropaper-og.jpg
---

![Final Arc website displayed on multiple devices.](@assets/images/indie-website/finalarc_cover.png)

## Summary

- Coded and helped design the website for Final Arc, an online publication focused on indie games and more.
- Implemented by customizing a Ghost CMS theme using HTML5, CSS3, and UI Design experience.
- Made the mascots dance when you hover over them.
- Results over three months: **390 new and active users**, **1,555 site views**, and **2.01% CTR**.

## The Mission (Which I Chose to Accept)

Final Arc is an online publication dedicated to sharing the latest and greatest independent projects on the internet with the rest of the world. In other words, they're covering all the cool stuff creative folks are making.

### Okay, so why is Final Arc important?

<p style="display: flex; justify-content: center;"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/6_9Edh2J3cc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="rounded-md"></iframe></p>
<p class="text-[--color-card-muted] text-center pt-0 mt-0 text-xs">A video explaining how indie games rose to prominence. Video by Dosuka via <a href="https://www.youtube.com/watch?v=6_9Edh2J3cc">YouTube</a>.</p>

Why is this important, you may ask? Indie media is finally getting the attention it deserves. We're no longer in a world where a multi-million dollar media conglomerate is the only gateway to global success.

Thanks to factors such as free and open-source software and a consumer need for radically different experiences, anyone can find fame overnight by building and sharing their nifty creations with the world. But people need to find said creations in the first place.

### Nice mission. But how's Final Arc involved?

<p style="display: flex; justify-content: center;"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/blzyYpPuehI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="rounded-md"></iframe></p>

<p class="text-[--color-card-muted] text-center pt-0 mt-0 text-xs">A video by an indie developer explaining how hard it is for indie games to succeed with marketing. Video by Johnny Ostad via <a href="https://www.youtube.com/watch?v=blzyYpPuehI">YouTube</a>.</p>

The down-side to this new and exciting era is that large organizations with _way_ more money and resources can push polished marketing campaigns which overshadow the efforts of mere hobbyists. That's where Final Arc steps in.

By providing a single place to find the coolest stuff on the web, more people with an unsatiated taste for the new and weird can lay eyes on the projects that creators pour their blood, sweat, and tears into.

### So where does ol' Justin come in?

![Close-up portrait of a devilishly handsome Korean man.](@assets/images/me.jpg)

Hello, there. Tis I, Justin. I'm a UX Generalist who coded the website. I also [write](https://www.heyjustinkim.com/writing/) now for Final Arc, but that's a different story.

## Problems we had to figure out

<p style="display: flex; justify-content: center;"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/MHVEVcJlUAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="rounded-md"></iframe></p>
<p class="text-[--color-card-muted] text-center pt-0 mt-0 text-xs">Intro explaining what Webflow is. Video by Webflow via <a href="https://www.youtube.com/watch?v=MHVEVcJlUAk">YouTube</a>.</p>

We had a couple of glaring challenges to solve. First and foremost, we had no website. Our original approach was to build the entire site using Webflow, a no-code website builder, but we ran into two hiccups.

### Hiccup #1: No feasible (and affordable) tech stack

Our original strategy called for a strong social component where people could engage each with each other meaningful ways. Proposed solutions included an advanced commenting feature and customizable user profiles. However the Webflow integrations we found were pricy and inadequate to fully realize what we wanted.

### Hiccup #2: We picked the wrong approach

To top it all off, we also realized that Webflow is just terrible for posting blog posts. Their editor is terrible[^1] for writing with and it would have taken wrangling together a whole _other_ system just to make posting content easier. It would have defeated the whole purpose of launching a publication in the first place.

## The solution we came up with

So if going with Webflow wasn't the right way, then what was the right one? Well that's why I said we picked the wrong _approach_, not the wrong tool. The main draw of Webflow was that our lead designer[^2] could build the website herself without us relying on a developer we couldn't afford. As fate would have it, Webflow would still be in the game... But with a catch.

### The catch in question

![Udesley's web page for their Ghost CMS and Webflow integration product.](@assets/images/indie-website/udesly.png)

<p class="text-[--color-card-muted] text-center pt-0 mt-0 text-xs">Image by Udesly via <a href="https://udesly.nexus/pages/webflow-to-ghost">udesly.nexus</a>.</p>

The lead designer and publication owner[^3] gathered us in a meeting one day. They announced that due to the issues with Webflow I mentioned earlier in this case study, we'd switch to Ghost CMS but build the site using a Webflow integration.

### What is Ghost CMS?

<p style="display: flex; justify-content: center;"><iframe width="560" height="315" src="/assets/dashboard.mp4" title="Ghost CMS Dashboard Demo Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="rounded-md"></iframe></p>
<p class="text-[--color-card-muted] text-center pt-0 mt-0 text-xs">Video demonstrating Ghost CMS's dashboard. Video by Ghost via <a href="https://ghost.org/">ghost.org</a>.</p>

Ghost CMS is a one-stop shop for building a blog website. Its simple and smooth word editor made publishing content way easier than anything Webflow could offer. Getting a basic, aesthetic, and functioning website up and running was also a cinch since Ghost uses templates. Not to mention, commenting and user profiles were already setup for us.

### A new plan of attack and a new hiccup

To launch sooner and give our design team time to finish wireframing the responsive design as well as the final visual identity, an alpha launch website would be made using Ghost alone. We were going to buy a premium template because they look cooler than the free ones and were responsive right off the bat. All we had to do was apply some quick branding on it.

... Or so we thought. Here's yet another hiccup we encountered: Even the premium template wasn't up to par with our standards. Any visual change that couldn't be made inside the Ghost dashboard required a web developer changing the template's code itself. Yet another bummer---Or so everyone else thought.

### One of my greatest moments yet

In one of the coolest experiences I ever had, I revealed my ability to customize the template. I had [prior experience](https://www.heyjustinkim.com/posts/creating-university-labs-website/) working with Ghost CMS and knew how to code. Not only that, I'm also a designer, meaning I could troubleshoot any ambiguities while implementing the designs. Even though the design team only finished wireframing the desktop view in anticipation of the original Webflow approach, it was no trouble to handle responsive issues myself. The Final Arc ship would be launching much faster than anticipated and in style, too!

## Customizing the Ghost template

![](@assets/images/indie-website/porto_samples.png)

<p class="text-[--color-card-muted] text-center pt-0 mt-0 text-xs">Various views of the Porto <a href="https://porto.gbjsolution.com/">website</a>.</p>

Spoiler-alert: This was also one of my most terrifying moments. While I was treading familiar grounds, I quickly realized that getting this site up and running and looking the best it can (at that moment in time) was all on my shoulders. It's a good thing, then, that I enjoy a challenge!

The template we used is GBJ Solution's [Porto theme](https://ghost.org/themes/porto/), which had a slick and powerful aesthetic off the bat that suited Final Arc's initial needs just fine. Specific styling changes to reflect the brand during its alpha launch were provided by the design team[^4].

<p><iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="680" src="https://embed.figma.com/design/dNZU8jgsoZVVei346Etyev/Final-Arc-Styling-Sample?node-id=0-1&embed-host=share" allowfullscreen className="rounded-md"></iframe></p>
<p class="text-[--color-card-muted] text-center pt-0 mt-0 text-xs">The styling guide for the alpha launch website prepared by our design team.</p>

While many issues were found and debugged, I'll just share a few of the biggest hurdles I came across with you.

### The journey of a thousand steps begins with the first problem

![Unfinished draft of the Porto theme for Ghost CMS.](@assets/images/indie-website/devenv.png)

<p class="text-[--color-card-muted] text-center pt-0 mt-0 text-xs">How the website first looked when I got the development environment running.</p>

Getting my local Ghost developer environment up and running was the first issue I came across. Installing the most compatible version of Node.js and using the proper Gulp.js commands ensured any changes to the theme compiled and appeared in the browser.

### Wrestling with fonts

![Samples of the old Megazoid and new Young Serif fonts.](@assets/images/indie-website/fonts.png)

<p class="text-[--color-card-muted] text-center pt-0 mt-0 text-xs">We originally went with Megazoid for titles and h1's but users complained it was too hard to read. So we went with Young Serif for legibility.</p>

It's embarrassing to admit but we've all been there---some of the fonts wouldn't show up. After trying multiple approaches, I learned that they had to be imported via code injection. Was it a painful lesson? Yes. But am I going to forget anytime soon? No way!

### Fixing surprise problems across device widths

![Comparison between original and current post card layouts on mobile view.](@assets/images/indie-website/postcards.png)

<p class="text-[--color-card-muted] text-center pt-0 mt-0 text-xs">On mobile, the post cards became too squished, so we made them vertical to make reading titles and seeing the cover images easier.</p>

Often an element a designer assumes resizes well across a range of breakpoints fails to do so in actuality. In one particular case, we had an issue with the post cards which preview the articles they point to.

They worked fine on a desktop view but became harder to read and unpleasant to look at the narrower the device width became. I used my design experience to determine a new breakpoint for the post cards. This way, they take on a new layout that's optimized for users to read comfortably with at smaller device widths.

### A fun little treat for myself

![Hovering over the mascots in the hero and header sections make them dance!](@assets/images/indie-website/finalarc_hover.gif)

<p class="text-[--color-card-muted] text-center pt-0 mt-0 text-xs">Indy and Jasper dancing adds a playful element to the site that sets a more casual tone. It wouldn't do for a publication focused on indie entertainment to come across as stiff and formal.</p>

Developers need to have fun, too! To add a little charm to the website that aligned with the publication's brand[^5], I made our mascot, Indy, and the publication icon, Jasper, dance when you hover over them.

## Launching the site

At last, we launched the site. Over a period of 3 months, we tracked the visitors who came to the Final Arc site and observed what they were doing.

<!--- There's code right below this idk why it's not loading. --->
<p><object class="pdf" data= "/assets/Final_Arc_Reporting.pdf" width="100%"             height="500px" className="rounded-md"></object></p>

<p class="text-[--color-card-muted] text-center pt-0 mt-0 text-xs">The full summary report for Final Arc's traffic and organic search performance is provided here for your convenience.</p>

### Traffic summary

![Numbers for Final Arc's traffic over 3 months since its launch.](@assets/images/indie-website/traffic.png)

<p class="text-[--color-card-muted] text-center pt-0 mt-0 text-xs">We had a surprisingly large number of people visiting the site itself since our launch.</p>

To start with, we had 390 new and active users who spent more than 10 seconds on a page, looked at at least two or more pages, and interacted meaningfully with the site. That's almost 400 separate people who checked us out!

Overall, the website was seen 1,555 total times, which is a great amount for a [new site](https://www.seomechanic.com/seo-101-how-long-does-seo-take/#:~:text=Having%20a%20new%20website%2C%20a,organic%20traffic%20on%20Google%20Analytics.) such as Final Arc's. Users engaged with Final Arc on an average of about one minute and two seconds. This is an impressive feat considering an average engagement time found by Noble Intent Studios was [52 seconds](https://nobleintentstudio.com/blog/ga4-is-all-about-engagement-what-are-good-engagement-metrics/#:~:text=What%20Is%20A%20Good%20Average%20Engagement%20Time?,0:31%E2%80%931:37%2C%20for%20an%20average%20of%2052%20seconds.).

### Search engine ranking performance

![Numbers for how many people looked up Final Arc on a search engine over 3 months since its launch.](@assets/images/indie-website/organic.png)

<p class="text-[--color-card-muted] text-center pt-0 mt-0 text-xs">For a new website, we're well on our way towards building up a brand which people can find through search engines.</p>

But how did Final Arc fare with organic search traffic? We received 21 clicks from organic searches which is to be expected. We haven't grown a strong and widespread brand yet and most of our marketing tactics targeted online community gathering spaces.

On average, our click-through-rate (CTR) is at 2.01%, which is a great percentage for a brand new site when considering an average CTR of 3% or more is what's generally desired for websites from an SEO perspective.

### Cool numbers, but what does it all mean?

If we go strictly by the metrics measured across the three months since Final Arc opened shop, then they show that the website is doing pretty darn well for itself. Most new sites struggle to attract a lot of traffic when first starting out. With our initial performance, we're on the right track to achieving our mission of shining a light on underserved indie projects.

### For what it's worth...

Numbers aren't everything, after all. The biggest sign I knew we're on the right path was receiving compliments from creators whose games we covered. Many of them complimented us on our mission, site design, and content quality. Coming from one of our primary stakeholder groups, this is the best indicator of success Final Arc could ask for.

## Thanks for reading!

Like what you read? Interested in starting your own online publication? Need a Ghost expert who can get your website up and running in style? Talk with me on [LinkedIn](https://www.linkedin.com/in/heyjustinkim/)!

## Notes

[^1]: I used it back when it was still new. You don't understand how mad I was that their overall UX _still_ hadn't improved.
[^2]: Hi, Kat! She's a cool gal, connect with her on [LinkedIn](https://www.linkedin.com/in/kcossarddesign/).
[^3]: The man, the myth, Evan himself 🙏. Find him on [LinkedIn](https://www.linkedin.com/in/evan-childs1/), too.
[^4]: The design team at this point included not only Kat but also an amazing designer named Kristianne! Find her on [LinkedIn](https://www.linkedin.com/in/kristianne-j/) as well.
[^5]: The brand wasn't finalized yet, which gave us room to play and experiment!
