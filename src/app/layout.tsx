import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adler",
  description: "Immersive battle arenas and competitive 3D experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-pretendard antialiased">
        {children}
      </body>
    </html>
  );
}