import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blog com NextJS',
  description: 'Descrição do blog',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
