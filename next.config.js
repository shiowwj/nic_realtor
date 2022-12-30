/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
		runtime: "experimental-edge",
    unstable_allowDynamic: [
      '/node_modules/airtable/lib/airtable.umd.js',
      '/lib/airtableapi/airtableapi.ts'
    ],
	},
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config, { isServer }) => {
		if (isServer) {
			require("./scripts/sitemap-generator");
		}
		return config;
	},
	images: {
		// domains:['scontent-xsp1-3.cdninstagram.com', 'scontent-xsp1-1.cdninstagram.com', 'scontent-xsp1-2.cdninstagram.com','scontent-xsp1-3.cdninstagram.com', ''],
		// remotePatterns/
	},
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	}
};

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

module.exports = nextConfig;
