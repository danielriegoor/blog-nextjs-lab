import clsx from 'clsx';
import Link from 'next/link';

export function Footer() {
  return (
    <footer
      className={clsx(
        'text-4xl/normal font-extrabold py-8',
        'sm:text-5xl/normal sm:py-10',
        'md:text-6xl/normal sm:py-12',
        'lg:text-7xl/normal sm:py-12',
        'pb-16',
        'text-center'
      )}
    >
      <p>
        <span>
          <Link href="/">Sobre &rarr;</Link>{' '}
        </span>{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
