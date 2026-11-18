'use client'

import { Link, useLocation } from 'react-router-dom'
import GradualBlur from '@/components/GradualBlur'

export default function ConditionalPageBlur() {
  const { pathname } = useLocation()
  const isBlogPostPage = pathname.startsWith('/blogs/')

  if (isBlogPostPage) {
    return null
  }

  return (
    <GradualBlur
      position="bottom"
      height="5rem"
      target="page"
      zIndex={1}
      strength={2}
      divCount={5}
    />
  )
}
