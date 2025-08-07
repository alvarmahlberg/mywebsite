import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Alvar Mahlberg",
  description: "Projects and thoughts",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
