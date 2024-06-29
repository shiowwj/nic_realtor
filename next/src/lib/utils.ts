import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function nl2br(str?: string) {
	if (!str) return ''
	return str.split('\n').join('<br>')
}

export function slug(str: string) {
	return str
		.toLowerCase()
		.replace(/[\s\W]+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '')
}
export function numberWithCommas(x: number): string {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function extractYouTubeVideoId(url: string) {
	const regex =
		/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i
	const match = url.match(regex)
	return match ? match[1] : null
}

/**
 * Utility function to remove underscores from a string.
 * @param {string} inputString - The string from which underscores will be removed.
 * @returns {string} - The modified string with underscores removed.
 */
export function removeUnderscores(inputString: string): string {
	return inputString.replace(/_/g, ' ')
}
