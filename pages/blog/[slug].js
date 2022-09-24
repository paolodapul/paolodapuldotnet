import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
    return hljs.highlight(code, { language }).value
  },
  langPrefix: 'text-sm !py-6 !px-8 rounded hljs language-',
})

export default function PostPage({ frontMatter: { title, date }, content }) {
  return (
    <div id="post-page">
      <h1 className="text-stone-100 font-inter_light font-bold text-5xl mb-2">
        {title}
      </h1>
      <div className="text-sm text-stone-500">{date}</div>
      <div
        className="text-base text-stone-100 py-8 prose prose-invert leading-relaxed prose-pre:p-0"
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
