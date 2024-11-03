import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About page of the my Website. In this, I Build a simple multi-page
        website using React components. I Apply Custom CSS to style the website, ensuring responsiveness.</p>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
