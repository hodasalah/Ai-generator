import {ClerkProvider} from '@clerk/nextjs';
import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';
import './globals.css';

const inter = Poppins({subsets: ['latin'], weight: ['400', '500', '800']});

export const metadata: Metadata = {
	title: 'Ai-Saas-App',
	description: 'Ai-Generator-app with nextjs and tailwindcss',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={inter.className}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
