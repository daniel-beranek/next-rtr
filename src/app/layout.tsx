import type { Metadata } from 'next';

import type { LayoutProps } from './types';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'next-rtr',
	description: 'NextJS ready to run template',
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<html lang="en-GB">
			<body className={inter.className}>{children}</body>
		</html>
	);
};

export default Layout;
