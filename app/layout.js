import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "Velvet Whispers",
  description: "Soft spoken content and early access whispers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
