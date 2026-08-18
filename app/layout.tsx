import "./globals.css";
import "@fontsource/space-grotesk";

export const metadata = {
  title: "Ahmad Rafli",
  description: "Database Administrator & Infrastructure Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}