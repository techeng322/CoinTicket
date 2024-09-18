'use client'
import { useState } from 'react'

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <div className="flex">
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search ..."
        className="border px-4 py-2 rounded-lg focus:boder-none focus:outline-none w-[400px]"
      />
    </div>
  )
}

export default SearchInput
