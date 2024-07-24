import Script from 'next/script';
import '../globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}&libraries=places`}
      />
      <body>{children}</body>
    </html>
  );
}
