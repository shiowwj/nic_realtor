import { fetchSanity, groq } from '@/lib/sanity/fetch'
import { modulesQuery } from '@/lib/sanity/queries'
import Modules from '@/ui/modules'
import processMetadata from '@/lib/processMetadata'
import ContactForm from '@/ui/modules/ContactForm'

export default async function Page() {
	const page = await getPage()
	return (
		<>
			<Modules modules={page?.modules} />
			{page.contactForm && <ContactForm {...page.contactForm} />}
		</>
	)
}

export async function generateMetadata() {
	const page = await getPage()
	return processMetadata(page)
}

async function getPage() {
	const page = await fetchSanity<Sanity.Page>(
		groq`*[_type == 'page' && metadata.slug.current == 'index'][0]{
			...,
			modules[]{ ${modulesQuery} },
			metadata {
				...,
				'ogimage': image.asset->url
			},
			'contactForm':contactForm->contactForm
		}`,
		{
			tags: ['homepage'],
		},
	)

	if (!page)
		throw new Error(
			"Missing 'page' document with metadata.slug 'index' in Sanity Studio",
		)

	return page
}
