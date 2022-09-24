import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

const renderer = new marked.Renderer()
renderer.link = function (href, title, text) {
  const link = marked.Renderer.prototype.link.call(this, href, title, text)
  return link.replace('<a', "<a target='_blank' ")
}

marked.setOptions({
  renderer,
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
    return hljs.highlight(code, { language }).value
  },
  langPrefix: 'text-sm !py-6 !px-8 rounded hljs language-',
})

export default function PostPage({ frontMatter: { title, date }, content }) {
  return (
    <div
      id="post-page"
      className="-ml-16 pl-16 border-double border-stone-500 border-l-2"
    >
      <h1 className="text-stone-100 font-inter_light font-bold text-3xl mb-2">
        {title}
      </h1>
      <div className="text-sm text-stone-300">{date}</div>
      <div
        className="text-base text-stone-100 py-16 prose prose-invert leading-relaxed prose-pre:p-0"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></div>
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', `${slug}.md`),
    'utf-8'
  )

  const { data: frontMatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontMatter,
      slug,
      content,
    },
  }
}
