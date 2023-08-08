import { useState, useLayoutEffect } from 'react'

const scrollPos = 450

export const useFooterAnimation = mainRef => {
  const [footerVisible, setFooterVisible] = useState(false)

  const onScroll = () => {
    const topPos = -mainRef?.current?.getBoundingClientRect().top

    if (topPos > scrollPos) {
      setFooterVisible(true)
    } else {
      setFooterVisible(false)
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return footerVisible
}
