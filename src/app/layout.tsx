import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'TinyWash - El Mini Lavarropas Portátil #1 de Argentina',
  description: 'Descubrí TinyWash, el revolucionario mini lavarropas portátil con batería recargable. Perfecto para espacios reducidos, viajes y prendas delicadas. ¡Envío gratis a todo el país!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body>
          {children}
      </body>
    </html>
  );
}
