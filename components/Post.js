import Link from 'next/link';

export default function Post({ post }) {
  return (
    <div>
      <h2>{post.frontMatter.title}</h2>
      <p>{post.frontMatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <a href="#">Read more</a>
      </Link>
    </div>
  );
}
