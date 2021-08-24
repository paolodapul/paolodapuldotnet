import Link from 'next/link';

export default function Post({ post }) {
  return (
    <div className=" lg:w-auto">
      <Link href={`/blog/${post.slug}`}>
        <a>
          <h1 className="text-gray-700 text-3xl font-medium">
            {post.frontMatter.title}
          </h1>
        </a>
      </Link>
      <div>{post.frontMatter.date}</div>
      <div>{post.frontMatter.excerpt}</div>
    </div>
  );
}
