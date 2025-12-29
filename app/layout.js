import { Host_Grotesk } from "next/font/google";
import "./globals.css";

const hostGrotesk = Host_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Brand Buddy",
  description: "AI Powered Logo Maker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={hostGrotesk.className}>
        {children}
      </body>
    </html>
  );
}
