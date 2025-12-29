import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider"; 

const hostGrotesk = Host_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Brand Buddy",
  description: "AI Powered Logo Maker",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={hostGrotesk.className}>
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
