import {ClerkProvider} from '@clerk/nextjs';
import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';
import './globals.css';

const poppins = Poppins({subsets: ['latin'], weight: ['400', '500', '800']});

export const metadata: Metadata = {
	title: 'Intra-Saas-App',
	description: 'Ai-Generator-app with nextjs and tailwindcss',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={poppins.className}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
