import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUI hair salon｜架空美容室LP作成例",
  description: "Pidam Galleryが制作した、静かな大人向け架空美容室のLP作成例です。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
