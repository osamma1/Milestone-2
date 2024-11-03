import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>This is the Contact page.If you have any questions, feel free to reach out!</p>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
