import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/" passHref>
          <a>
            <div>Paolo Dapul</div>
            <div>Musings and Learnings</div>
          </a>
        </Link>
      </div>
    </header>
  );
}
