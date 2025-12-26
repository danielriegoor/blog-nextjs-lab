import clsx from 'clsx';
import Link from 'next/link';

export function Header() {
  return (
    <header
      className={clsx(
        'text-1xl/normal font-extrabold py-8',
        'sm:text-2xl/normal sm:py-10',
        'md:text-3xl/normal sm:py-11',

        'text-center'
      )}
    >
      <span>
        <p>
          &rarr; <Link href="/">Home - Daniel Riêgo NextJS Labs</Link> &larr;
        </p>
      </span>
    </header>
  );
}
