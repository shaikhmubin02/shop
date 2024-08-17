import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dark } from "@clerk/themes"
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creative Solutions",
  description: "Your one-stop shop for graphic design, printing, branding, and digital marketing solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { 
          colorPrimary: '#3371FF', 
          fontSize: '16px'
        },
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
      
    >
      <html lang="en">
        <body className={inter.className}>
          {children}</body>
      </html>
    </ClerkProvider>
  );
}