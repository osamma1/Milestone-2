import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <h2>This is my assignment of Milestone 2</h2>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
