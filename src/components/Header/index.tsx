import clsx from 'clsx';
import Link from 'next/link';

export function Header() {
  return (
    <header
      className={clsx(
        'text-4xl/normal font-extrabold py-8',
        'sm:text-5xl/normal sm:py-10',
        'md:text-6xl/normal sm:py-11',
        'lg:text-7xl/normal sm:py-12',
        'text-center'
      )}
    >
      <span>
        <p>
          &rarr; <Link href="/">Home</Link>
        </p>
      </span>
    </header>
  );
}
