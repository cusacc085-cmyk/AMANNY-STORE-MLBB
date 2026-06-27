import "./globals.css";

export const metadata = {
  title: "AMANNY STORE",
  description: "MLBB Recharge Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
