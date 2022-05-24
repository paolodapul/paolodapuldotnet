import Link from 'next/link';

export default function Header({ className: classes }) {
  return (
    <header className={`antialiased ${classes} mb-28`}>
      <div>
        <Link href="/" passHref>
          <a>
            <h1 className="text-3xl font-bold text-slate-700 tracking-tight font-heebo_bold">
              Paolo Dapul
            </h1>
          </a>
        </Link>
      </div>
    </header>
  );
}
