import Link from 'next/link';

export default function Header({ className: classes }) {
  return (
    <header>
      <div className={`antialiased ${classes}`}>
        <Link href="/" passHref>
          <a>
            <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
              Paolo Dapul
            </h1>
            <div className="text-sm">Musings and Learnings</div>
          </a>
        </Link>
      </div>
    </header>
  );
}
