import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog com NextJS",
  description: "Descrição do blog",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body className="Qualquer">
        <header>
          <h1>Header</h1>
        </header>
        <div className="bg-red-500">
          {children}
        </div>
        <footer>
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
