import Link from "next/link";

export default function Navigate() {
  return (
    <header className="grid grid-cols-2 bg-blue-900">
      <div className="text-3xl text-amber-100">Logo</div>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/other">Other</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
