import './globals.css';
import type { Metadata } from 'next';
import { Source_Sans_3} from 'next/font/google';
import Navbar from './components/Navbar';
import { Provider } from './components/Provider';

const source = Source_Sans_3({
  weight: '400',
  subsets: ['latin-ext'],
  display: 'auto',
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
        className={`${source.className} bg-white text-black dark:bg-gray-900 dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800 text-lg`}
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
