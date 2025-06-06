import "./globals.css";

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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
