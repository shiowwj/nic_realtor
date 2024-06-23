import Link from 'next/link'
import processUrl from '@/lib/processUrl'
import { cn } from '@/lib/utils'
import { stegaClean } from '@sanity/client/stega'

export default function CTA({
	link,
	style,
	className,
	children,
}: Sanity.CTA & React.HTMLAttributes<HTMLAnchorElement>) {
	const props = {
		className: cn(style, className) || undefined,
		children:
			children || link?.label || link?.internal?.title || link?.external,
	}

	if (link?.type === 'internal' && link.internal)
		return (
			<Link
				href={processUrl(link.internal, {
					base: false,
					params: link.params,
				})}
				{...props}
			/>
		)

	if (link?.type === 'external' && link.external)
		return (
			<a
				href={stegaClean(link.external)}
				target="_blank"
				rel="noopener noreferrer"
				{...props}
			/>
		)

	return props.children
}
