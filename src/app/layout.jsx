import "./globals.css";

export const metadata = {
  title: "AMANNY STORE",
  description: "MLBB Recharge Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
