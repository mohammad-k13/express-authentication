import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Express Authenticaiton",
  description: "A Project to Practice Authentication system on express",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased w-full h-screen overflow-hidden flex items-center justify-center`}
      >
        {children}
        <Toaster richColors/>
      </body>
    </html>
  );
}
