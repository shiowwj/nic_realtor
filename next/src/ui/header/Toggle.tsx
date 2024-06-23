import { Menu, X } from 'lucide-react'

export default function Toggle() {
	return (
		<label className="[grid-area:toggle] md:hidden">
			<input id="header-open" type="checkbox" hidden />
			<span className="header-closed:hidden">
				{' '}
				<X />
			</span>
			<span className="header-open:hidden">
				{' '}
				<Menu />
			</span>
		</label>
	)
}
