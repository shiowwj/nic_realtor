import cn from 'clsx'
// import {Footer, Navbar} from '@components/common'
import s from './Layout.module.css'

interface Props {
  children?: React.ReactNode
  currentPath?: string
}


const Layout: React.FC<Props> = ({
  children,
  currentPath
}) => {

  return (
      <div className={cn(s.root)}>
        <main className="fit my-auto">{children}</main>
        {/* // <Footer /> */}
      </div>
  )
}

export default Layout