export default function About() {
  return (
    <div className="prose prose-invert">
      <h1 className="text-5xl text-stone-100">{`Hi, I'm Paolo.`}</h1>
      <hr />
      <p>{`I write a lot of my thoughts down all the time, usually just to myself, but here, I'm going to dump my knowledge on things I learned, showing it to the world to make it useful (hopefully) to my fellow developers and enthusiasts. Being able to freely share and consume information over the web is one of the nicest things I like about life, because this fuels our joy of learning.`}</p>
      <p>{`I'm a software developer, working usually on web stuff. I'm very much of a generalist when it comes to technologies, working with a variety of tech stacks throughout the span of my existence, but I prefer TypeScript, React and Node.js these days.`}</p>
      <p>
        {`If you'd like to know more about what I've been doing with my work life and to see how I look like, you can check my`}{' '}
        <a
          className="no-underline text-sky-300"
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/paolodapul"
        >
          LinkedIn profile
        </a>{' '}
        {`- it's pretty updated. If you'd like to see how I write code, here is my `}
        <a
          className="no-underline text-sky-300"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/paolodapul"
        >
          GitHub profile
        </a>
        .
      </p>
      <div className="text-right mt-24">
        <em>
          Last updated: {new Date('9/24/2022').toLocaleDateString('en-PH')}
        </em>
      </div>
      <hr />
    </div>
  )
}
