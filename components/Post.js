import Link from 'next/link';

export default function Post({ post }) {
  return (
    <div className="mb-12 relative">
      <Link href={`/blog/${post.slug}`}>
        <a>
          <h1 className="text-stone-100 font-bold text-xl leading-9 tracking-normal">
            {post.frontMatter.title}
          </h1>
        </a>
      </Link>
      <div className="text-sm text-stone-400 font-normal leading-relaxed">
        {post.frontMatter.excerpt}
      </div>
      <div className="text-sm text-stone-500">{post.frontMatter.date}</div>
    </div>
  );
}
