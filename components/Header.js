import Link from 'next/link'

export default function Header() {
  return (
    <header className="container antialiased mx-auto lg:w-3/6 2xl:w-3/6">
      <div>
        <div className="text-2xl py-8 flex justify-between items-center">
          <Link href="/" passHref>
            <a>
              <span className="font-inter_light font-thin tracking-wide text-stone-200">
                paolo
              </span>
              <span className="font-inter_regular font-normal tracking-wide text-stone-400">
                dapul
              </span>
            </a>
          </Link>
          <ul className="flex w-64 justify-between items-center text-base text-stone-300">
            <li>
              <Link href="/" passHref>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
