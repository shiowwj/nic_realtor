import client from '@/lib/sanity/client'
import { fetchSanity, groq } from '@/lib/sanity/fetch'
import { modulesQuery } from '@/lib/sanity/queries'
import { notFound } from 'next/navigation'
import Modules from '@/ui/modules'
import processMetadata from '@/lib/processMetadata'
import ContactForm from '@/ui/modules/ContactForm'

export default async function Page({ params }: Props) {
	const page = await getPage(params)
	if (!page) notFound()
	return (
		<>
			<Modules modules={page?.modules} page={page} />
			{page.contactForm && <ContactForm {...page.contactForm} />}
		</>
	)
}

export async function generateMetadata({ params }: Props) {
	const page = await getPage(params)
	if (!page) notFound()
	return processMetadata(page)
}

export async function generateStaticParams() {
	const slugs = await client.fetch<string[]>(
		groq`*[
			_type == 'page' &&
			defined(metadata.slug.current) &&
			!(metadata.slug.current in ['index', '404'])
		].metadata.slug.current`,
	)

	return slugs.map((slug) => ({ slug }))
}

async function getPage(params: Props['params']) {
	return await fetchSanity<Sanity.Page>(
		groq`*[
			_type == 'page' &&
			metadata.slug.current == $slug &&
			!(metadata.slug.current in ['index', '404'])
		][0]{
			...,
			modules[]{ ${modulesQuery} },
			metadata {
				...,
				'ogimage': image.asset->url
			},
            'contactForm':contactForm->contactForm
		}`,
		{
			params: { slug: params.slug },
			tags: ['pages'],
		},
	)
}

type Props = {
	params: { slug?: string }
}
