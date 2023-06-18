import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guillaume Duhan — Chief Technology Officer",
  description:
    "CTO & Senior Front-End Developer in Freelance since 10 years. I've worked in 50+ start-ups (4 to 1000 employees) in Paris, London and Berlin.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
