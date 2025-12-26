import clsx from 'clsx';
import Link from 'next/link';

export function Footer() {
  return (
    <footer
      className={clsx(
        'text-1xl/normal font-extrabold py-8',
        'sm:text-3xl/normal sm:py-10',
        'md:text-4xl/normal sm:py-12',
        'pb-16',
        'text-center'
      )}
    >
      <p>
        <span>
          <Link
            className="target:_"
            href="https://daniel.riegos.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            &rarr; Daniel Riêgo Portfólio &larr;{' '}
          </Link>{' '}
        </span>{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
