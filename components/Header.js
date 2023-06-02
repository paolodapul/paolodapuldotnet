import Link from "next/link";

export default function Header() {
  return (
    <header className="container antialiased mx-auto lg:w-3/6 2xl:w-3/6">
      <div>
        <div className="text-2xl py-8 flex justify-between items-center">
          <Link href="/" passHref>
            <a>
              <span className="font-light tracking-tight text-stone-200">
                paolo
              </span>
              <span className="font-normal tracking-tight text-stone-400">
                dapul
              </span>
            </a>
          </Link>
          <ul className="flex w-32 justify-between items-center text-base text-stone-300">
            <li>
              <Link href="/about" passHref>
                About
              </Link>
            </li>
            <li>
              <a
                className="flex"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/paolodapul"
              >
                <img
                  src="/github.svg"
                  className="w-8 h-8 bg-stone-200 rounded"
                  alt="GitHub icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
