import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Post from '@components/Post';

export default function Home({ posts }) {
  const getPostKey = (title) => {
    return title.replace(' ', '-');
  };

  return (
    <div>
      <Head>
        <title>Paolo Dapul | Musings and Learnings</title>
        <meta name="description" content="Blog by Paolo Dapul." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="posts">
        {posts.map((post, index) => (
          <Post key={getPostKey(post.frontMatter.title)} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      slug,
      frontMatter,
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
}
