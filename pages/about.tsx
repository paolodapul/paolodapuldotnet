import React from 'react';

export default function About() {
  return (
    <div className="prose prose-invert mx-auto w-11/12">
      <h1 className="text-5xl text-stone-100">{`Hi, I'm Paolo.`}</h1>
      <hr />
      <p>{`I have close to 8 years of software engineering experience building and maintaining enterprise web applications. I am a front-end focused full-stack engineer, specialized in React.js and its surrounding ecosystem.`}</p>
      <p>{`
      My personal mantra in software development is to always bring value through effective engineering practices whilst being able to ship production-grade products with speed and reliability. I also believe that strong engineering is backed by having a constant desire to learn and improve, by caring deeply about the product and its users, and by being a kind and competent colleague.
      `}</p>
      <p>
        {`
        As of 2024, I am immersed in the JavaScript ecosystem, and use the following tools on a day-to-day basis: React.js, TypeScript, Vite, Tailwind CSS, Next.js, GraphQL, Storybook.js. My testing stack includes React Testing Library, Vitest and Playwright. With regard to infrastructure, I deploy things to Vercel and Amazon Web Services, but I very much prefer using automated and managed services for the infrastructure side of things.
        `}
      </p>
      <p>{`You can reach me out at hello@paolodapul.net if you want to talk!`}</p>
      <div className="text-right mt-24">
        <em>
          Last updated: {new Date('07/16/2024').toLocaleDateString('en-PH')}
        </em>
      </div>
      <hr />
    </div>
  );
}
