import Link from 'next/link';

export default function Post({ post }) {
  return (
    <div className="mb-12 relative">
      <div className="-ml-16 bg-gradient-to-r from-blue-400 to-emerald-400 w-1 h-full rounded-md absolute"></div>
      <Link href={`/blog/${post.slug}`}>
        <a>
          <h1 className="text-stone-100 font-bold text-3xl mb-2 leading-9 tracking-normal">
            {post.frontMatter.title}
          </h1>
        </a>
      </Link>
      <div className="text-base text-stone-50 font-normal leading-relaxed mb-8">
        {post.frontMatter.excerpt}
      </div>
      <div className="text-sm text-stone-500">{post.frontMatter.date}</div>
    </div>
  );
}
