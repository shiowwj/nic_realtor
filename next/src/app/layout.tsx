// import { GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'
import SkipToContent from '@/ui/SkipToContent'
import Announcement from '@/ui/Announcement'
import Header from '@/ui/header'
import Footer from '@/ui/footer'
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/app.css'
import { Josefin_Sans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { RECAPTCHA_SITE_KEY } from '@/lib/env'
const font = Josefin_Sans({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
	icons: {
		// icon: `https://fav.farm/🖤`,
	},
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			{/* <GoogleTagManager gtmId='' /> */}
			<script
				src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
			></script>
			<body className={cn(font.className, 'bg-canvas text-ink')}>
				<SkipToContent />
				<Announcement />
				<Header />
				<main id="main-content" tabIndex={-1}>
					{children}
				</main>
				<Footer />

				<Analytics />
				{draftMode().isEnabled && <VisualEditing />}
			</body>
		</html>
	)
}
