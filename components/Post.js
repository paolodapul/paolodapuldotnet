import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div className="-ml-16 mb-12 pl-16 border-double border-stone-500 border-l-2">
      <Link href={`/blog/${post.slug}`}>
        <a>
          <h1 className="text-stone-100 font-inter_light font-bold text-3xl mb-2 leading-9 tracking-normal">
            {post.frontMatter.title}
          </h1>
        </a>
      </Link>
      <div className="font-inter_light font-light text-base text-stone-50 leading-relaxed mb-2">
        {post.frontMatter.excerpt}
      </div>
      <div className="text-sm text-stone-500">{post.frontMatter.date}</div>
    </div>
  )
}
