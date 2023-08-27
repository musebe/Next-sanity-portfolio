import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';
import Navbar from './components/Navbar';
import { Provider } from './components/Provider';

const roboto = Roboto_Slab({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Musebecodes',
  description: 'Personal portfolio of Musebe',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${roboto.className} bg-white text-black dark:bg-gray-900 dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800 text-lg`}
        suppressHydrationWarning={true}
      >
        <Provider>
          <Navbar />
          <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
