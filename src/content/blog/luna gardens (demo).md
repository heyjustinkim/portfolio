---
author: Justin Kim
pubDatetime: 2023-11-15
title: "Post-Mortem: Luna Gardens (Demo)"
postSlug: post-mortem-luna-gardens-demo
featured: true
draft: false
tags:
  - project
  - interactive-fiction
  - showcase
description: A post-mortem of my entry for IntroComp 2023.
cover: /assets/luna-gardens-cover.jpg
coverAlt: White text saying "Luna Gardens" next to a white crescent moon on a black background.
ogImage: ./public/astropaper-og.jpg
---

![White text saying 'Luna Gardens' next to a white crescent moon on a black background.](/assets/luna-gardens-cover.jpg)

## Table of contents

## Note

*This article was originally posted on [intfiction.org](https://intfiction.org/t/brustins-introcomp-2023-thread-feedback-for-entrants-and-the-comp-a-post-mortem/64301/21?u=bruhstin).*

## Where to begin…

[Luna Gardens](https://bruhstin.itch.io/luna-gardens) is a parser game that emphasizes observing your environment. I intended it to be less about puzzles (which I have a love-hate relationship with) and more about the little things you notice in the place immediately surrounding you.

At least, I realized this in hindsight. I didn’t really understand what exactly I was making at the time.

## How an idea is planted

This game’s main idea was inspired by the walks I’d take at night back in college. There was a lot of wandering; sometimes I’d just be inside my head, other times I’d see some real bizarre stuff. All of that coalesced into an idea that I was tackling inch-by-inch but struggled to flesh out.

When I found out about [IntroComp](https://introcomp.org/) I realized that it was the perfect opportunity to push me to finish a prototype of the idea I’d been thinking about. But this idea wasn’t my first choice; looking back at my brainstorming mind map I had 4 other ideas in consideration. In the end this one won out whether it was due to constraints or feasibility.

After that it was just me brainstorming and thinking of as many self-assigned constraints as possible to shape the game; what else can you do when the sky’s the limit?

## The timeline (and what went wrong)

I found out about IntroComp late in June and only started around July 1st, meaning this demo version of Luna Gardens took about a month to make. Concepting and Designing took about 2 weeks, with Implementation and Testing taking up the other 2 weeks.

At first glance this doesn’t seem too difficult but as we all know making a game is never that straightforward. I realized that this kind of game was best suited for the parser format and took my first steps to make my first serious [Inform 7](https://ganelson.github.io/inform-website/) (I7) game.

![Lines of text in a computer application window with an empty line below for entering input.](@assets/images/luna-gardens/parser.png)

<p class="post-image">A screenshot of <a href="https://en.wikipedia.org/wiki/Zork">Zork I</a> running in the <a href="https://www.ifwiki.org/Gargoyle">Gargoyle interpreter</a>. Source: <a href="https://en.wikipedia.org/wiki/Interactive_fiction#/media/File:Zork_I_screenshot_video_game_Gargoyle_interpreter_on_Ubuntu_Linux.png">Wikipedia</a>.</p>

### A sound thrashing from Inform 7

![Illustrated animation of three men kicking someone on the ground.](@assets/images/luna-gardens/jo-jo-gang.gif)

<p class="post-image">Learning Inform 7 on the fly, in a nutshell. Source: <a href="https://tenor.com/view/jo-jo-gang-beat-up-anime-kick-gif-17369990">Tenor</a>.</p>

Those last 2 weeks were painful. I7 is a fun and unique approach to programming IF but man I think I (figuratively) broke my brain trying to figure out how it works. It’s ironic that my experience with programming classes made it hard for me to get used to I7’s syntax.

![A screenshot of the Inform 7 interface with the text on the left column and a chart on the right column.](@assets/images/luna-gardens/i7.png)

<p class="post-image">Screenshot of the Inform 7 interface. Source: <a href="https://en.wikipedia.org/wiki/Inform#/media/File:Inform_7_code_and_skein.png">Wikipedia</a>.</p>

Anyways, I get why a lot of younger game makers skew towards choice-based tools. My first time giving Inform 7 a real try felt like a mental beating. Meanwhile it’s the simplest thing in the world to implement a choice in Twine or Ink; the hard part is making it worth choosing. Regardless I plan on continuing to learn I7.

## Inspirations and influences

I know at least 1 or 2 folks commented on how the setting, characters, and branching were unusual, so I wanted to go into that a bit.

### Clouds and butterflies

At the time I started thinking of the game’s story and design I was reading a book called [_The 9 Cloud Dream_](https://en.wikipedia.org/wiki/The_Cloud_Dream_of_the_Nine).

![Book cover of 8 fairies in the sky looking down at a monk crossing a bridge in the mountains.](@assets/images/luna-gardens/9-cloud-dream.jpg)

<p class="post-image">Cover for <i>The 9 cloud Dream</i>. Source: <a href="https://www.amazon.com/Nine-Cloud-Dream-Kim-Man-jung/dp/0143131273">Amazon</a>.</p>

The branching path you could take to become either a cloud or a butterfly was inspired by this novel quoting [Zhuangzi’s butterfly dream](<https://en.wikipedia.org/wiki/Zhuangzi_(book)#:~:text=%22-,The%20Butterfly%20Dream,-%22%5Bedit>). I thought it’d be fun to suddenly find yourself transformed into something else. The easiest way I figured out to accomplish this was via walking through a tunnel.

![Painting of an old man sleeping while a butterfly hovers above him.](@assets/images/luna-gardens/butterfly.jpg)

<p class="post-image"><em>Zhuangzi Dreaming of a Butterfly, by 18th century Japanese painter Ike no Taiga.</em> Source: <a href="https://en.wikipedia.org/wiki/Zhuangzi_(book)#/media/File:Zhuangzi-Butterfly-Dream.jpg">Wikipedia</a>.</p>

The cloud path is a little less obvious. I heard somewhere (I forget exactly where) that Buddhist and Daoist monks are sometimes referred to as “clouds” when they’re on a pilgrimage since they seem to be wandering around like clouds in the sky.

### Luna Gardens itself

In a nutshell, the setting of Luna Gardens is inspired by my old college campus. Sometimes I’d randomly come across a garden or two and chill out there in-between wherever I was rushing to next.

The trippy aspect of this was inspired by the approaches of both *The 9 Cloud Dream* and David Lynch’s work, particularly *Twin Peaks*. I’m a big fan of detective fiction and seeing it in a surreal and ominous way left a mark on me.

![Animation of a man speaking with "It is happening, again" shown as a subtitle.](@assets/images/luna-gardens/twin-peaks.gif)

<p class="post-image">It is happening, again... Source: <a href="https://tenor.com/view/twin-peaks-its-happening-again-gif-9584457">Tenor</a>.</p>

### Whomstdtve sits here?

It’s on me for not testing more but towards the end of this demo you encounter a character named Maya whom you can ask questions via dialogue options. I think based on Brian’s transcript, there was a bug where spelling “maya” with the lower-case M didn’t bring up those options.

The fruits you could take from the tree and give to Maya were part of a light puzzle to proceed in the level. If I recall correctly each fruit has a specific meaning I got from a Buddhist website (in accordance with the Buddhist themes in *The 9 Cloud Dream*).

![Photo of a yellow fruit with the ends curling out like fingers.](@assets/images/luna-gardens/buddha-hand.jpg)

<p class="post-image">The Buddha's Hand fruit. Source: <a href="https://en.wikipedia.org/wiki/Buddha%27s_hand#/media/File:Buddhas_hand_1.jpg">Wikipedia</a>.</p>

Lastly, Maya’s appearance is inspired by [the High Priestess](https://en.wikipedia.org/wiki/The_High_Priestess) of the Rider-Waite-Smith Tarot deck. I chose this reference because of the moon’s presence in its imagery; it’s something I want to expand upon in the full story.

![Drawing of a robed-woman sitting in front of pomegranates and behind a crescent moon.](@assets/images/luna-gardens/high-priestess.jpg)

<p class="post-image">The High Priestess, as depicted in the <a href="https://en.wikipedia.org/wiki/Rider%E2%80%93Waite_Tarot">RWS deck</a>. Source: <a href="https://en.wikipedia.org/wiki/The_High_Priestess#/media/File:RWS_Tarot_02_High_Priestess.jpg">Wikipedia</a>.</p>

## My self-review

Whew, that was a mouth-full. Here’s the tl;dr!

### What worked out

#### The writing

I was really worried about how my writing style would be received, so it was nice to hear that folks seemed to like it. I had a whole headache dealing with my anxiety and figuring out how not to make it *too* pretentious, so I’m glad it worked out in the end.

#### The fiction

Folks also seemed to enjoy the world of Luna Gardens. I didn’t know how well it’d be received because it doesn’t play into typical genre settings nor is it rooted in anything specific. But as long as flying clowns with chainsaw machine-guns don’t start flying out of the wood works (Hmmm, actually…), then I guess it should be fine.

#### The branching

This one was probably the biggest surprise for me. I didn’t know much about the typical game made with Inform at the time so hearing that the branching was unusual was a bit of a shock. But now I’m considering ditching the journal mechanic in favor of just transforming in each branch.

### What needs work

#### Finding the right amount of objects and descriptions.

I know including detailed descriptions was a nice touch but also detracted from the amount of time I had to finish making the demo. I’m going to have to figure out the right balance so that I can actually finish without running myself ragged.

#### Figuring out where to take the game.

To be honest, I’m not entirely sure where to take this game’s concept next. However I do plan on researching some more first before committing to any one direction.

#### Balancing working on this and other games.

While I do intend on finishing this game, I also want to get in more practice by making games for other events. The obvious risk here is running out of steam before I even make it to the finish line. But maybe it’s the learning curve of making an Inform game that’s speaking here.

## Thanks for reading!

If you managed to get down this far, thank you for reading! Do let me know if you have any questions or comments for me.
