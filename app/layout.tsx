import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PairSpace",
  description: "Disposable real-time collaborative coding rooms for interviews and pair programming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} ${syne.variable} h-full antialiased`}
    >
      <head>
        <style>
          {`
          .yRemoteSelection {
            background-color: rgba(91, 127, 255, 0.3);
          }
          .yRemoteSelectionHead {
            position: absolute;
            border-left: 2px solid;
            border-top: 2px solid;
            border-color: inherit;
            height: 100%;
            box-sizing: border-box;
          }
          .yRemoteSelectionHead::after {
            content: attr(data-user);
            position: absolute;
            top: -1.4em;
            left: -2px;
            font-size: 11px;
            padding: 1px 5px;
            border-radius: 3px;
            background: inherit;
            color: white;
            white-space: nowrap;
            pointer-events: none;
          }
          `}
        </style>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
