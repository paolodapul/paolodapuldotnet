---
title: 'Revamped my site.'
date: 'September 24, 2022'
excerpt: 'I moved my site from WordPress to Vercel, and re-built everything with Next.js. Also, a few other updates.'
---

## How the move started

I moved my blogging platform from WordPress to Vercel when I had the itch to explore the Vercel stack. At the time, I had also been thinking about dabbling with Next.js because of how hyped it was. Well as far as I know, the React meta-framework lived up to the hype.

## Failures prior to sunsetting the WordPress site

I didn't expect that I would be encountering some inconvenience getting out of Hostinger and WordPress as I thought that I only needed to export my data from MySQL and call it a day. I didn't plan it out well, so I ended up only having a bunch of blog post data with WordPress-specific HTML magic. I think the content can still be parsed and reused for historical purposes, but at this point, I'm not planning to do some salvaging work for my "legacy blog posts" and just move on with my life.

## What's up with this new site?

Aside from it's built with Next.js, my content management happens via Markdown parsing. It feels more lightweight and I like the sense of control that's being given to me by my current tech stack. I went with the most minimal approach I can think of that's quite reasonable but also not as simple as hosting static files on a web server. I'm comfortable writing Markdown documents so I feel like this approach is just right.

At this point, I'm not sure yet if I will really need some kind of CMS to scale my site, but maybe what I'm going to do in the future is to first try maximizing Next.js as much as possible before optimizing my setup.

Shout out to Traversy Media for posting a great lesson about creating a Next.js-powered blog. This was the lesson I followed in the process of building this site. [Link to the video lesson.](https://www.youtube.com/watch?v=MrjeefD8sac)

This is also how code snippets will look like. The theme may change from time to time, depending on my mood.

```javascript
function hello() {
  return 'Hi'
}
```

## What I've been working on these days

Most of my activity at work and during my personal time were about React, TypeScript and JavaScript tooling. First, I got involved in creating a React boilerplate to be used internally within [Stratpoint](https://stratpoint.com/) (my current employer) - we got to learn about setting up a usable frontend template with linting, formatting and type-checking.

I also suggested to my team that we use Parcel 2 and move away from Create React App. The performance gain for using the SWC-powered bundler helped with productivity, and it was evident when we started using it in a prototype application for a client. The community support and available Stack Overflow answers wasn't on par with Webpack but nevertheless, the move we did was worth it.

I also tried creating small (and mostly unfinished) starter templates for personal use: [React + TypeScript + Vite Starter](https://github.com/paolodapul/react-ts), and [Node Starter](https://github.com/paolodapul/node-starter). My most complex attempt so far with regard to all these boilerplate craziness is [Owl](https://github.com/paolodapul/owl) - a full-stack TypeScript monorepo, and my goal for building it is to create an end-to-end type-checked application, to cure all my pent-up frustrations about object property mismatches from backend to frontend and vice-versa. _Side note: I think I developed quite an obsession with type-checking when I started using TypeScript._

I know that these boilerplates were already created by great developers out there, and I know that a lot of their implementations are way better, it's just that I wanted to gain first-hand experience on what it's really like building a boilerplate from scratch. The learning experience may also help me get my way around the code bases easier in the future. It's always fun learning new things as well.

2021 and 2022 were mostly all about React, TypeScript and JavaScript for me. I still have a lot of deep diving to do especially with React, but I love how it's making me productive these days. React has its own quirks, caveats and criticisms, yet I feel like I invested my time with the right technology - a feeling I've been trying to chase for the longest time. What matters to me is the fact that I'm able to build stuff and give value through it.

_On to the next one._
