import Link from 'next/link';

export default function Post({ post }) {
  return (
    <div className=" lg:w-auto mb-12">
      <Link href={`/blog/${post.slug}`}>
        <a>
          <h1 className="text-zinc-900 font-heebo_medium text-3xl font-medium mb-2 leading-9">
            {post.frontMatter.title}
          </h1>
        </a>
      </Link>
      <div className='font-heebo_regular text-base text-slate-700 leading-relaxed mb-2'>{post.frontMatter.excerpt}</div>
      <div className='text-sm text-slate-500'>{post.frontMatter.date}</div>
    </div>
  );
}
