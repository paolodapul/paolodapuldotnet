export default function About() {
  return (
    <div className="prose prose-invert">
      <h1 className="text-5xl text-stone-100">{`Hi, I'm Paolo.`}</h1>
      <hr />
      <p>{`I write down a lot of my thoughts all the time, usually just for myself, but here, I'm going to share my knowledge on the things I've learned, showcasing it to the world to hopefully make it useful for my fellow developers and enthusiasts. Being able to freely share and consume information over the web is one of the things I love about life because it fuels our joy of learning.`}</p>
      <p>{`I'm a software developer, primarily working on web-related projects. I consider myself a generalist when it comes to technologies, having worked with a variety of tech stacks throughout my existence.`}</p>
      <p>
        {`If you'd like to know more about my work and see what I look like, you can check out my`}{' '}
        <a
          className="no-underline text-sky-300"
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/paolodapul"
        >
          LinkedIn profile
        </a>{' '}
        {`- it's pretty updated. If you're interested in seeing how I write code, you can find my `}
        <a
          className="no-underline text-sky-300"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/paolodapul"
        >
          GitHub profile
        </a>
        {` here.`}
      </p>
      <div className="text-right mt-24">
        <em>
          Last updated: {new Date('10/01/2023').toLocaleDateString('en-PH')}
        </em>
      </div>
      <hr />
    </div>
  );
}
