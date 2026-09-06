import type { Metadata } from "next";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Smart Interview Scheduler",
  description: "AI-powered interview scheduling platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "rgba(20,20,20,0.95)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              borderRadius: "12px",
              fontSize: "13px",
            },
            success: { iconTheme: { primary: "#fff", secondary: "#000" } },
            error: { iconTheme: { primary: "#fff", secondary: "#000" } },
          }}
        />
      </body>
    </html>
  );
}
