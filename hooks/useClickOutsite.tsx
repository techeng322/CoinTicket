'use client'
import { useEffect, useRef } from 'react'

const useClickOutside = (onClose: () => void) => {
  const ref = useRef(null)
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // Check if the click was outside the referenced element
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose()
      }
    }

    // Add event listener
    document.addEventListener('mousedown', handleClick)

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [ref, onClose])

  return { ref }
}

export default useClickOutside
