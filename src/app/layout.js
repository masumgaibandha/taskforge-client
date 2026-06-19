import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "TaskForge",
    template: "%s | TaskForge",
  },
  description:
    "TaskForge is a freelance micro-task marketplace where clients post tasks, freelancers submit proposals, and projects get completed securely through Stripe-powered payments.",
  keywords: [
    "freelance marketplace",
    "micro task platform",
    "task management",
    "freelancer",
    "remote work",
    "TaskForge",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              background: "#1e293b",
              color: "#f8fafc",
              border: "1px solid #334155",
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
