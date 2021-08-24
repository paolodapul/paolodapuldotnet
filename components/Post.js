import Link from 'next/link';

export default function Post({ post }) {
  return (
    <div>
      <Link href={`/blog/${post.slug}`}>
        <a>
          <h2>{post.frontMatter.title}</h2>
        </a>
      </Link>
      <div>{post.frontMatter.date}</div>
      <div>{post.frontMatter.excerpt}</div>
    </div>
  );
}
