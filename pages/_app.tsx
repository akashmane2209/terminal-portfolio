import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import CommandContextProvider from './context/CommandContext';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CommandContextProvider>
        <Component {...pageProps} />
      </CommandContextProvider>
      <Analytics />
    </>
  );
}
export default MyApp;
