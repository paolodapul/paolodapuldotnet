import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from '@components/Post';
``;
import { sortByDate, getPostKey } from '../utils';

type PostType = {
  frontMatter: {
    title: string;
    slug: string;
    excerpt: string;
    date: string;
  };
};

export default function Home({ posts }: { posts: PostType[] }) {
  return (
    <div className="posts h-screen mx-auto w-full">
      {posts.map((post) => (
        <Post key={getPostKey(post.frontMatter.title)} post={post} />
      ))}
    </div>
  );
}

export async function getStaticProps() {

  return { notFound: true };

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
      posts: posts.sort(sortByDate),
    },
  };
}
