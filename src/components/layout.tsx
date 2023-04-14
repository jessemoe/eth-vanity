
import { RootLayoutProps } from '@/types';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: {
    default: 'ETH Vanity',
    template: '%s | ETH Vanity'
  },
  description: 'ETH Vanity.',
  openGraph: {
    title: 'ETH Vanity',
    description: 'ETH Vanity.',
    url: 'https://aitools.eth2.ml',
    siteName: 'ETH Vanity',
    locale: 'en-US',
    type: 'website'
    // TODO: add logo for images
  },
  twitter: {
    title: 'ETH Vanity',
    card: 'summary_large_image',
    description: 'ETH Vanity.'
  },
  icons: {
    shortcut: '/favicon.ico'
  }
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="mx-auto flex max-w-3xl flex-auto flex-col text-sm antialiased md:text-base lg:text-base">
      <main className="min-h-full">{children}</main>
    </div>
  );
}
