import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";
import { ToasterProvider } from "@/components/toaster-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avatar OS · Operator Console",
  description:
    "Autonomous operations cockpit to let your digital twin manage code, clients, infra, and comms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full bg-slate-950 text-slate-100 antialiased`}
      >
        <ToasterProvider />
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <Topbar />
            <main className="flex-1 overflow-y-auto bg-slate-950">
              <div className="mx-auto w-full max-w-[1400px] space-y-8 px-6 pb-24 pt-8">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
