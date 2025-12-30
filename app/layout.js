import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
});

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
            {/* HEADER: Placed here to be visible on EVERY page */}
            <Header />
            
            {/* CHILDREN: This is where the page content (Dashboard, Create, etc.) renders */}
            {children}
            
            <Toaster />
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
