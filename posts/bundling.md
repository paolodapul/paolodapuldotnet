---
title: 'Using TypeScript in the Browser'
date: 'October 30, 2023'
excerpt: 'TL;DR: use a bundler.'
---

I was learning RxJS and writing my code in TypeScript when I got stuck, unable to run my JavaScript code in the browser. I tried mindlessly modifying my tsconfig file until I hit a point where it might work so I can get on with my life, but it wasn't as quick of a "quick fix" as I'd liked it to be.

This served as my refresher course on why we bundle JavaScript code.

## Node modules can directly be used in Node environments, but not in browsers

In day-to-day JavaScript development, we often use packages that, upon installation, are placed in the `node_modules` directory. Now, when we try importing those packages into browser code, it won't be as straightforward as to how we import packages when writing programs for Node.js.

I set up my project to use TypeScript, and ran `tsc --init` to give myself a quick tsconfig file. Running `tsc` will emit a JavaScript file that is the result of TypeScript's compilation. The resulting JavaScript file of the code I was working on looked like this:

```javascript
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const rxjs_1 = require('rxjs');
let tenthSecond$ = (0, rxjs_1.interval)(100);
tenthSecond$.subscribe(console.log);
```

Notice that it contains a `require` call, so it's already a giveaway that this code won't run in the browser. The browser's console complained instead that `exports` is not defined, but nevertheless, the code still wouldn't work.

## Maybe just use ESNext and let the browser figure things out?

I tried copying the tsconfig from my own custom Vite boilerplate, but still I had no luck. With the following tsconfig setting, my code still wouldn't work. What a pain.

```json
{
  "compilerOptions": {
    "target": "ES2015",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true
  }
}
```

The resulting JS file after running `tsc` is shown below. Notice that it didn't do any translation to older, more backwards-compatible JavaScript syntax:

```javascript
import { interval } from 'rxjs';
let tenthSecond$ = interval(100);
tenthSecond$.subscribe(console.log);
```

Which led to the following error:

```plaintext
Uncaught SyntaxError: Cannot use import statement outside a module
```

I tried updating the `<script>` tag in the index.html to include the `type="module"` attribute, but still no luck.

```plaintext
Uncaught TypeError: Failed to resolve module specifier "rxjs".
Relative references must start with either "/", "./", or "../".
```

## The solution: use a bundler

I got this thing finally fixed by using Vite, since it will take care of the magic that needs to be done to run Node modules in the browser. How it happens is beyond my current knowledge (but I would be interested in exploring it further).

A portion of the resulting JavaScript bundle looked like the code below. It is clear that the bundler does some extra work behind the scenes to make the Node modules work in the browser.

```javascript
(function(){const e=document.createElement("link").relList;
if(e&&e.supports&&e.supports("modulepreload"))return;
for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);
new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});
function t(i){const o={}; return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?
o.credentials="omit":o.credentials="same-origin",o}
function n(i){if(i.ep)return;i.ep=!0;
const o=t(i);fetch(i.href,o)}})();var w=function(r,e)
```

I gave myself a vanilla TypeScript Vite app with the `pnpm create vite new-app --template vanilla-ts` command.
