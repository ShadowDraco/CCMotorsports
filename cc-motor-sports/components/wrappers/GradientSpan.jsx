import React from 'react'

export default function GradientSpan({ color1, color2, color3, children }) {
  return (
    <span
      style={{
        color: 'transparent',
        backgroundImage: `linear-gradient(90deg, ${color1} 0%, ${color2} 35%, ${color3} 100%)`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        MozBackgroundClip: 'text',
      }}
    >
      {children}
    </span>
  )
}
