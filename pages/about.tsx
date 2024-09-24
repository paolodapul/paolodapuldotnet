import React from 'react';

export default function About() {
  return (
    <div className="prose prose-invert mx-auto w-11/12">
      <h1 className="text-5xl text-stone-100">{`Hi, I'm Paolo.`}</h1>
      <hr />
      <p>{`I have 8 years of software engineering experience building and maintaining enterprise web applications.
      `}</p>
      <p>{`My personal mantra in software development is to always bring value through effective engineering practices whilst being able to ship production-grade products with speed and reliability. I also believe that strong engineering is backed by having a constant desire to learn and improve, by caring deeply about the product and its users, and by being a kind and competent colleague.
      `}</p>
      <p>{`You can reach me out at hello@paolodapul.net if you want to talk!`}</p>
      <div className="text-right mt-24">
        <em>
          Last updated: {new Date('09/24/2024').toLocaleDateString('en-PH')}
        </em>
      </div>
      <hr />
    </div>
  );
}
