import type { Metadata, Viewport } from "next";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Sichan | MERN Stack Developer",
  description:
    "Portfolio of Sichan, a MERN stack developer and computing student in Nepal. React, Next.js, TypeScript, Tailwind CSS, Node, Express and MongoDB.",
};

export const viewport: Viewport = { themeColor: "#060a17", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}