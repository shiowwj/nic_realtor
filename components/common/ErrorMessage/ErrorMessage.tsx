import { FC } from "react";
import cn from 'clsx'

import s from './ErrorMessage.module.css'

interface Props{
  className?: string
  message: string
}

const ErrorMsg: FC<Props> =({className, message}) => {
  return (
    <p className={cn(s.errorMsg, className)}>
      {message}
    </p>
  )
}

export default ErrorMsg