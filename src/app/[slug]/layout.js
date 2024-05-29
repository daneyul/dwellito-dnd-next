import "../globals.css";

export const metadata = {
  title: "Custom Homebuilder",
  description: "Dwellito",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
